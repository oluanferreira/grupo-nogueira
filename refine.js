const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'dist', 'index.html');
let html = fs.readFileSync(file, 'utf8');

const refine = `
<style id="hero-stage4-refine">
/* ETAPA 4 — acabamento visual da hero */
.hero{background:
  radial-gradient(760px 500px at 80% 34%,rgba(40,84,150,.26),transparent 62%),
  radial-gradient(560px 260px at 78% 78%,rgba(249,115,22,.12),transparent 72%),
  linear-gradient(180deg,#071425 0%,#0a1a31 58%,#071421 100%)!important}
.hero::before{background:
  linear-gradient(90deg,rgba(3,13,26,.97) 0%,rgba(5,17,33,.82) 34%,rgba(5,18,35,.18) 58%,rgba(5,18,35,.02) 100%),
  radial-gradient(circle at 78% 36%,rgba(255,255,255,.045) 0 1px,transparent 1.5px)!important;background-size:auto,26px 26px!important}
.hero-inner{grid-template-columns:.88fr 1.34fr!important;gap:8px!important;padding:38px 0 50px!important}
.hero-v2 .hero-inner{grid-template-columns:1.02fr .98fr!important;gap:42px!important;padding:54px 0 66px!important}
.hero-v2 .hero-copy{padding-right:0!important}
.hero-copy{padding-right:18px!important}
.hero h1{font-size:clamp(43px,4.8vw,64px)!important;max-width:600px!important}
.hero-copy p{max-width:500px!important;color:#b8c5d5!important}
.hero-actions{margin-top:32px!important}

.truck-hero{margin-right:-14vw!important;min-height:600px!important;justify-content:flex-end!important}
.truck-stage{width:810px!important;max-width:68vw!important;height:555px!important;transform:translateY(22px) scale(1.02)!important;transform-origin:center bottom}
.truck-svg{filter:drop-shadow(0 34px 36px rgba(0,0,0,.48)) drop-shadow(0 0 1px rgba(255,255,255,.12))!important}
.truck-glow{left:11%!important;right:0!important;bottom:5%!important;height:118px!important;background:radial-gradient(ellipse,rgba(249,115,22,.22),rgba(30,76,135,.13) 44%,transparent 72%)!important;filter:blur(25px)!important}

.hero::after{inset:auto -18% 1.5% 32%!important;height:165px!important;background:
  linear-gradient(174deg,transparent 43%,rgba(249,115,22,.05) 44%,rgba(249,115,22,.65) 45%,rgba(255,202,148,.82) 45.6%,rgba(249,115,22,.19) 47%,transparent 49%),
  linear-gradient(178deg,transparent 54%,rgba(249,115,22,.38) 55%,rgba(249,115,22,.08) 56%,transparent 57%)!important;opacity:.82!important}

.protection-shell{left:7%!important;top:8%!important;width:88%!important;height:78%!important;border:1px solid rgba(249,115,22,.22)!important;box-shadow:0 0 20px rgba(249,115,22,.08),inset 0 0 26px rgba(249,115,22,.045)!important;opacity:.48!important;transform:rotate(-2deg)!important}
.protection-shell::before{background-size:42px 26px!important;opacity:.22!important}
.protection-sweep{top:9%!important;bottom:12%!important;width:18%!important;filter:blur(10px)!important;background:linear-gradient(90deg,transparent,rgba(249,115,22,.03) 16%,rgba(249,115,22,.18) 46%,rgba(255,199,140,.34) 56%,rgba(249,115,22,.07) 76%,transparent)!important;animation-duration:6.4s!important}
.protection-sweep::after{left:56%!important;width:1px!important;background:linear-gradient(transparent,rgba(255,213,169,.72) 25%,rgba(249,115,22,.76) 55%,transparent 90%)!important;box-shadow:0 0 12px 3px rgba(249,115,22,.24)!important}

.hero-points{display:none!important}
.hero-point i{width:6px!important;height:6px!important;box-shadow:0 0 8px rgba(249,115,22,.45)!important}

@media(max-width:1080px){
  .hero-inner{padding:54px 0 34px!important}
  .hero-v2 .hero-inner{grid-template-columns:1fr!important;gap:30px!important;padding:54px 0 34px!important}
  .hero-v2-side{max-width:700px!important;width:100%!important}
  .truck-hero{margin:8px -11vw -24px -4vw!important;min-height:490px!important;justify-content:center!important}
  .truck-stage{width:790px!important;max-width:102vw!important;height:485px!important;transform:translateY(6px)!important}
  .protection-shell{left:8%!important;top:8%!important;width:86%!important;height:78%!important}
}
@media(max-width:620px){
  .hero-inner{display:grid!important;grid-template-columns:1fr!important;align-items:start!important;min-height:auto!important;gap:0!important;padding:26px 0 28px!important}
  .hero-v2 .hero-inner{gap:22px!important;padding:26px 0 34px!important}
  .hero-copy{padding-right:0!important;width:100%!important;max-width:none!important}
  .hero h1{font-size:clamp(34px,10.2vw,42px)!important;line-height:1.04!important;letter-spacing:-.03em!important;margin-top:0!important;max-width:100%!important}
  .hero-copy p{font-size:15px!important;line-height:1.65!important;margin-top:20px!important;max-width:100%!important}
  .hero-actions{margin-top:24px!important;gap:12px!important}
  .hero-actions .btn{width:100%!important;min-height:54px!important;padding:14px 18px!important}
  .truck-hero{position:relative!important;min-height:250px!important;margin:18px 0 0!important;width:100%!important;justify-content:center!important;overflow:visible!important}
  .truck-stage{position:relative!important;width:100%!important;max-width:100%!important;height:250px!important;transform:none!important}
  .protection-shell{left:11%!important;top:10%!important;width:80%!important;height:73%!important;opacity:.38!important}
  .protection-sweep{width:16%!important;animation-duration:7.2s!important}
  .hero::after{inset:auto -14% 0 8%!important;height:74px!important;opacity:.5!important}
}
@media(max-width:390px){
  .hero-inner{padding-top:22px!important}
  .hero h1{font-size:34px!important}
  .hero-copy p{font-size:14.5px!important}
  .truck-hero{min-height:225px!important;margin-top:14px!important}
  .truck-stage{height:225px!important}
}
</style>`;

html = html.replace('</head>', refine + '\n</head>');
fs.writeFileSync(file, html, 'utf8');
