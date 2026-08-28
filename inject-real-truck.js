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
  '<img class="truck-real" src="/truck-real.webp" alt="Carreta protegida pelo Grupo Nogueira" decoding="async" fetchpriority="high"><img class="truck-protection-pass" src="/truck-real.webp" alt="" aria-hidden="true" decoding="async">'
);

const realTruckStyles = `
<style id="real-truck-stage">
/* ETAPA 4D — película presa aos pixels reais da carreta */
.truck-stage{width:850px;max-width:70vw;height:555px;transform:translateY(8px)}
.truck-real,.truck-protection-pass{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:contain;object-position:center 56%}
.truck-real{z-index:2;filter:drop-shadow(0 30px 32px rgba(0,0,0,.48)) drop-shadow(0 0 18px rgba(68,119,190,.08))}
.protection-shell,.protection-sweep{display:none!important}
.truck-glow{left:12%;right:2%;bottom:7%;height:105px;background:radial-gradient(ellipse,rgba(249,115,22,.24),rgba(29,75,136,.14) 48%,transparent 74%);filter:blur(22px)}

.truck-protection-pass{
  z-index:4;
  pointer-events:none;
  opacity:0;
  mix-blend-mode:screen;
  filter:sepia(1) saturate(7) hue-rotate(338deg) brightness(1.22) contrast(1.03);
  -webkit-mask-image:linear-gradient(96deg,transparent 0 37%,rgba(0,0,0,.16) 42%,rgba(0,0,0,.9) 48%,#000 50%,rgba(0,0,0,.72) 53%,rgba(0,0,0,.12) 59%,transparent 64% 100%);
  mask-image:linear-gradient(96deg,transparent 0 37%,rgba(0,0,0,.16) 42%,rgba(0,0,0,.9) 48%,#000 50%,rgba(0,0,0,.72) 53%,rgba(0,0,0,.12) 59%,transparent 64% 100%);
  -webkit-mask-size:285% 100%;
  mask-size:285% 100%;
  -webkit-mask-repeat:no-repeat;
  mask-repeat:no-repeat;
  -webkit-mask-position:145% 0;
  mask-position:145% 0;
  animation:truckPixelSweep 6.4s cubic-bezier(.45,.02,.2,1) infinite;
}

.truck-stage::after{content:none!important;display:none!important}

@keyframes truckPixelSweep{
  0%,12%{-webkit-mask-position:145% 0;mask-position:145% 0;opacity:0}
  17%{opacity:.16}
  24%{opacity:.48}
  52%{opacity:.62}
  68%{opacity:.38}
  77%{-webkit-mask-position:-55% 0;mask-position:-55% 0;opacity:.08}
  82%,100%{-webkit-mask-position:-55% 0;mask-position:-55% 0;opacity:0}
}

.hero::after{opacity:.72}

@media(max-width:1080px){
  .truck-stage{width:790px;max-width:98vw;height:500px;transform:none}
  .truck-real,.truck-protection-pass{object-position:center center}
  .truck-hero{margin:14px -7vw -24px -3vw}
}

/* Mobile: leitura primeiro; carreta inteira abaixo dos CTAs */
@media(max-width:620px){
  .hero-inner{display:grid!important;grid-template-columns:1fr!important;align-items:start!important;min-height:auto!important;padding:26px 0 28px!important;gap:0!important}
  .hero-copy{padding-right:0!important;max-width:100%!important;width:100%!important}
  .hero h1{font-size:clamp(34px,10.2vw,42px)!important;line-height:1.04!important;letter-spacing:-.03em!important;max-width:100%!important;margin-top:0!important}
  .hero-copy p{font-size:15px!important;line-height:1.65!important;margin-top:20px!important;max-width:100%!important}
  .hero-actions{margin-top:24px!important;gap:12px!important}
  .hero-actions .btn{width:100%!important;min-height:54px!important;padding:14px 18px!important}

  .truck-hero{position:relative!important;min-height:250px!important;margin:18px 0 0!important;width:100%!important;max-width:100%!important;justify-content:center!important;overflow:visible!important}
  .truck-stage{position:relative!important;width:100%!important;max-width:100%!important;height:250px!important;transform:none!important}
  .truck-real,.truck-protection-pass{object-fit:contain!important;object-position:center center!important}
  .truck-real{filter:drop-shadow(0 20px 22px rgba(0,0,0,.40)) drop-shadow(0 0 10px rgba(68,119,190,.05))}
  .truck-protection-pass{animation-duration:7s;-webkit-mask-size:300% 100%;mask-size:300% 100%}
  .truck-glow{left:16%!important;right:16%!important;bottom:2%!important;height:52px!important;filter:blur(16px)!important}
  .hero::after{inset:auto -14% 0 8%!important;height:74px!important;opacity:.5!important}
}

@media(max-width:390px){
  .hero-inner{padding-top:22px!important}
  .hero h1{font-size:34px!important}
  .hero-copy p{font-size:14.5px!important}
  .truck-hero{min-height:225px!important;margin-top:14px!important}
  .truck-stage{height:225px!important}
}

@media(prefers-reduced-motion:reduce){
  .truck-protection-pass{animation:none;opacity:.12;-webkit-mask-position:50% 0;mask-position:50% 0}
}
</style>`;

html = html.replace('</head>', realTruckStyles + '\n</head>');
fs.writeFileSync(indexPath, html, 'utf8');
console.log('Verified real truck asset injected:', truckBuffer.length, 'bytes', sha);
