const fs = require('fs');
const path = require('path');

const source = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const cleaned = source
  .replace('<span class="eyebrow">Grupo Nogueira Corretora de Seguros</span>', '')
  .replace('<span class="eyebrow">Clube de Benefícios</span>', '')
  .replace('<span class="eyebrow">Como Funciona</span>', '')
  .replace('<span>Desenvolvido com <span class="heart">❤</span> por <strong>i5x</strong></span>', '');

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), cleaned, 'utf8');
