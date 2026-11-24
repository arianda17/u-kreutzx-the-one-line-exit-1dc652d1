import { writeFileSync, mkdirSync } from 'node:fs';

const entry = "I resign effective at the end of this sentence; my one-sentence two weeks' notice starts now and ends with this period.\n";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry, 'utf8');
