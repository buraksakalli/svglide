import fs from 'fs';
import path from 'path';

const data = JSON.parse(fs.readFileSync('missing-icons.json', 'utf8'));
const icons = data.icons;

const toPascal = (str) =>
  str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');

const toLabel = (str) =>
  str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

let content = '';
content += 'import React from "react";\n';
content += 'import { LucideIcon } from "./lucide-icon";\n';
content += 'import type { IconProps } from "./icon.types";\n\n';

let exports = [];
let iconsArray = [];
let nameEntries = [];

for (const icon of icons) {
  const pascal = toPascal(icon);
  const label = toLabel(icon);
  content += `export const ${pascal}: React.FC<IconProps> = (props) => <LucideIcon name="${pascal}" {...props} />;\n`;
  exports.push(pascal);
  iconsArray.push(`  [${pascal}, "${label}"],`);
  nameEntries.push(`  ${pascal}: "${label}",`);
}

content += '\nexport {\n  ' + exports.join(',\n  ') + '\n};\n';

content += '\nexport const GeneratedIcons = [\n' + iconsArray.join('\n') + '\n] as const;\n';

content += '\nexport const GeneratedIconNames = {\n' + nameEntries.join('\n') + '\n};\n';

fs.writeFileSync('src/lib/icons/generated.tsx', content);
