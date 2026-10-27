const fs = require('fs');

const files = (process.env.INPUT_FILES || '')
  .split(',')
  .map(f => f.trim())
  .filter(Boolean);

const missing = files.filter(f => !fs.existsSync(f));

files.forEach(f => console.log(`${fs.existsSync(f) ? '✅' : '❌'} ${f}`));

if (missing.length > 0) {
  console.error(`::error::Faltan archivos: ${missing.join(', ')}`);
  process.exit(1);
}