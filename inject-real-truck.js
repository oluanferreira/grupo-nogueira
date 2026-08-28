const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const chunksDir = path.join(ROOT, 'assets', 'truck-final');
const chunkNames = ['01a.txt','01b.txt','02.txt','03a.txt','03b.txt','04a.txt','04b.txt','05a.txt','05b.txt','06.txt','07.txt','08.txt'];

const b64 = chunkNames
  .map(name => fs.readFileSync(path.join(chunksDir, name), 'utf8'))
  .join('')
  .replace(/\s+/g, '');

const EXPECTED_B64_LENGTH = 74356;
const EXPECTED_BINARY_LENGTH = 55766;
const EXPECTED_SHA256 = 'eb27012f2f9972bb934f7ca43cebf105713f54b5e4904eeffe27994c65264a31';

if (b64.length !== EXPECTED_B64_LENGTH) {
  throw new Error(`Truck base64 length mismatch: ${b64.length} (expected ${EXPECTED_B64_LENGTH})`);
}

const truckBuffer = Buffer.from(b64, 'base64');
if (truckBuffer.length !== EXPECTED_BINARY_LENGTH) {
  throw new Error(`Truck binary length mismatch: ${truckBuffer.length} (expected ${EXPECTED_BINARY_LENGTH})`);
}
if (truckBuffer.toString('ascii', 0, 4) !== 'RIFF' || truckBuffer.toString('ascii', 8, 12) !== 'WEBP') {
  throw new Error('Truck asset is not a valid WebP container');
}
const sha = crypto.createHash('sha256').update(truckBuffer).digest('hex');
if (sha !== EXPECTED_SHA256) {
  throw new Error(`Truck sha256 mismatch: ${sha} (expected ${EXPECTED_SHA256})`);
}

fs.writeFileSync(path.join(DIST, 'truck-real.webp'), truckBuffer);

const indexPath = path.join(DIST, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const svgRegex = /<svg class="truck-svg"[\s\S]*?<\/svg>/;
if (!svgRegex.test(html)) {
  throw new Error('Could not find SVG truck in built hero');
}
html = html.replace(
  svgRegex,
  '<img class="truck-real" src="/truck-real.webp" alt="Carreta protegida pelo Grupo Nogueira" decoding="async" fetchpriority="high">'
);

const realTruckStyles = `
<style id="real-truck-stage">
/* ETAPA 4C — asset real íntegro e verificado */
.truck-stage{width:850px;max-width:70vw;height:555px;transform:translateY(8px)}
.truck-real{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:contain;object-position:center 56%;z-index:2;filter:drop-shadow(0 30px 32px rgba(0,0,0,.48)) drop-shadow(0 0 18px rgba(68,119,190,.08))}
.protection-shell,.protection-sweep{display:none!important}
.truck-glow{left:12%;right:2%;bottom:7%;height:105px;background:radial-gradient(ellipse,rgba(249,115,22,.24),rgba(29,75,136,.14) 48%,transparent 74%);filter:blur(22px)}
.truck-stage::after{content:"";position:absolute;inset:0;z-index:4;pointer-events:none;background:linear-gradient(112deg,transparent 0 33%,rgba(249,115,22,.03) 39%,rgba(249,115,22,.18) 46%,rgba(255,197,139,.48) 50%,rgba(249,115,22,.22) 54%,rgba(249,115,22,.05) 61%,transparent 68% 100%);background-size:230% 100%;background-position:180% 0;-webkit-mask-image:url('/truck-real.webp');mask-image:url('/truck-real.webp');-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center 56%;mask-position:center 56%;filter:drop-shadow(0 0 12px rgba(249,115,22,.24));mix-blend-mode:screen;opacity:0;animation:realProtectionSweep 6.4s cubic-bezier(.45,.02,.2,1) infinite}
@keyframes realProtectionSweep{0%,12%{background-position:180% 0;opacity:0}18%{opacity:.72}52%{opacity:.92}72%{background-position:-80% 0;opacity:.32}78%,100%{background-position:-80% 0;opacity:0}}
.hero::after{opacity:.72}
@media(max-width:1080px){.truck-stage{width:790px;max-width:98vw;height:500px;transform:none}.truck-real{object-position:center center}.truck-stage::after{-webkit-mask-position:center center;mask-position:center center}.truck-hero{margin:14px -7vw -24px -3vw}}
@media(max-width:620px){.truck-hero{min-height:330px;margin:12px -19vw -8px -15vw}.truck-stage{width:620px;max-width:130vw;height:345px}.truck-real{object-position:center center}.truck-stage::after{-webkit-mask-position:center center;mask-position:center center;animation-duration:7s}.truck-glow{left:18%;right:8%;bottom:4%;height:70px}}
@media(prefers-reduced-motion:reduce){.truck-stage::after{animation:none;opacity:.12;background-position:50% 0}}
</style>`;

html = html.replace('</head>', realTruckStyles + '\n</head>');
fs.writeFileSync(indexPath, html, 'utf8');
console.log('Verified real truck asset injected:', truckBuffer.length, 'bytes', sha);
