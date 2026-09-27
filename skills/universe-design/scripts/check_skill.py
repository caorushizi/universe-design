#!/usr/bin/env python3
"""Validate packaged source coverage, local links, assets, and metadata; no network."""
from pathlib import Path
from collections import Counter
import json, re

root = Path(__file__).resolve().parents[1]
refs = root / 'references'
manifest = json.loads((refs/'sources.json').read_text())
figures = json.loads((refs/'figures.json').read_text())
assert len(manifest) == len({m['url'] for m in manifest}) == 61
assert len({m['id'] for m in manifest}) == 61
assert Counter(m['group'] for m in manifest) == {
    'overview':1, 'design-language':6, 'internationalization':2,
    'data-visualization':1, 'responsive-design':1, 'navigation':7,
    'data-entry':23, 'data-display':13, 'feedback':7,
}
for m in manifest:
    assert (refs/m['reference']).is_file(), m['id']
    assert m['url'] in (refs/m['reference']).read_text(), m['id']
    assert re.fullmatch(r'[a-f0-9]{64}', m['sha256']), m['id']
    assert len(figures[m['id']]['urls']) == m['images'], m['id']
    assert len(figures[m['id']]['reviewed_zero_based_indexes']) == m['visual_review_count']
assert sum(m['images'] for m in manifest) == 1335
assert sum(m['visual_review_count'] for m in manifest) == 11
bad=[]
for file in root.rglob('*.md'):
    text=file.read_text()
    for link in re.findall(r'\]\(([^\s)]+)\)',text):
        if link.startswith(('http:', 'https:', '#', 'mailto:')): continue
        if not (file.parent/link.split('#')[0]).exists(): bad.append((str(file.relative_to(root)),link))
    assert '[TODO' not in text, file
assert not bad, bad
starter=root/'assets/react-starter'
assert (starter/'package-lock.json').is_file()
assert len(list((starter/'src/components/ui').glob('*.tsx'))) == 9
assert not list(root.rglob('node_modules')), 'Do not package dependencies'
assert not list(root.rglob('.DS_Store')), 'Do not package OS metadata'
assert 'name: universe-design' in (root/'SKILL.md').read_text()
assert '$universe-design' in (root/'agents/openai.yaml').read_text()
print('PASS: 61 source pages, 1335 figure references, 11 visual reviews, all local links, 9 component modules, metadata and clean packaging.')
