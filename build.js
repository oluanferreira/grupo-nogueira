const fs = require('fs');
const path = require('path');

const source = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const productionStyles = `
<style id="production-refinements">
/* Ecossistema de soluções — mesma linguagem visual do site */
.solutions{background:var(--navy-2);padding:88px 0 92px;position:relative;overflow:hidden}
.solutions::after{content:"";position:absolute;inset:auto -10% -42px 32%;height:120px;background:linear-gradient(174deg,transparent 42%,rgba(249,115,22,.16) 43%,rgba(249,115,22,.42) 44%,transparent 47%);transform:skewX(-10deg);pointer-events:none}
.solutions-head{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;position:relative;z-index:1}
.solutions h2{font-size:clamp(30px,3.6vw,44px);font-weight:800;line-height:1.15;letter-spacing:-.01em;margin-top:18px;max-width:660px}
.solutions-intro{max-width:410px;color:var(--muted);font-size:15.5px;line-height:1.8}
.solution-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px;margin-top:42px;position:relative;z-index:1}
.solution-card{min-height:250px;padding:24px 20px 22px;border:1px solid var(--line);border-radius:16px;background:rgba(255,255,255,.035);display:flex;flex-direction:column;transition:.25s}
.solution-card:hover{transform:translateY(-5px);border-color:rgba(249,115,22,.55);background:rgba(249,115,22,.06);box-shadow:0 18px 34px rgba(0,0,0,.16)}
.solution-index{font-family:'Plus Jakarta Sans';font-size:12px;font-weight:800;letter-spacing:.12em;color:var(--orange)}
.solution-card h3{font-size:18px;font-weight:700;margin-top:18px}
.solution-card p{color:var(--muted);font-size:13.5px;line-height:1.65;margin-top:10px}
.solution-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:18px}
.solution-list span{font-size:11.5px;color:#dfe7f3;border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:5px 8px}
.solution-link{display:inline-flex;align-items:center;gap:7px;margin-top:18px;color:var(--orange-2);font-size:12px;font-weight:700;letter-spacing:.01em}
.solution-link::after{content:"→";font-size:15px;transition:transform .2s}
.solution-card:hover .solution-link::after{transform:translateX(3px)}
@media(max-width:1080px){.solution-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.solution-card{min-height:220px}}
@media(max-width:620px){.solutions{padding:72px 0 70px}.solutions-head{display:block}.solutions-intro{margin-top:18px}.solution-grid{grid-template-columns:1fr 1fr;gap:12px;margin-top:30px}.solution-card{min-height:230px;padding:20px 16px}.solution-card h3{font-size:16px}.solution-card p{font-size:13px}.solution-list span{font-size:11px;padding:4px 7px}.club .track{overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;scrollbar-width:none;cursor:grab;-webkit-overflow-scrolling:touch}.club .track::-webkit-scrollbar{display:none}.club .bcard{scroll-snap-align:start}}

.brand-lockup{display:block;width:208px;height:auto;max-height:56px;object-fit:contain;object-position:left center}
@media(max-width:620px){.brand-lockup{width:178px;max-height:46px}}

/* Cotação — estrutura pronta para conectar aos canais oficiais */
.quote{background:var(--navy);padding:0 0 96px}
.quote-inner{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:start}
.quote-copy h2{font-size:clamp(30px,3.6vw,44px);font-weight:800;line-height:1.15;letter-spacing:-.01em;margin-top:18px;max-width:520px}
.quote-copy p{color:var(--muted);font-size:15.5px;line-height:1.8;margin-top:20px;max-width:450px}
.quote-note{display:inline-flex;align-items:center;gap:8px;margin-top:24px;color:#dfe7f3;font-size:13px}
.quote-note::before{content:"";width:8px;height:8px;background:var(--orange);border-radius:50%;box-shadow:0 0 12px rgba(249,115,22,.55)}
.quote-form{display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:28px;border-radius:20px;background:var(--card);border:1px solid var(--line);box-shadow:0 18px 42px rgba(0,0,0,.16)}
.quote-field{display:flex;flex-direction:column;gap:8px}.quote-field.full{grid-column:1/-1}
.quote-field label{font-size:12px;font-weight:700;color:#dfe7f3}.quote-field input,.quote-field select,.quote-field textarea{width:100%;border:1px solid rgba(255,255,255,.14);border-radius:10px;background:rgba(255,255,255,.045);color:#fff;font:inherit;font-size:14px;padding:12px 13px;outline:none;transition:.2s}.quote-field textarea{min-height:108px;resize:vertical}.quote-field input::placeholder,.quote-field textarea::placeholder{color:#7f91ad}.quote-field input:focus,.quote-field select:focus,.quote-field textarea:focus{border-color:var(--orange);box-shadow:0 0 0 3px rgba(249,115,22,.12)}.quote-field select option{color:#0f172a}.quote-form .btn{grid-column:1/-1;justify-self:start;margin-top:4px}.quote-status{grid-column:1/-1;color:var(--muted);font-size:12.5px;line-height:1.55;min-height:20px}.quote-status[data-state="error"]{color:#fdba74}.quote-status[data-state="ready"]{color:#c5f6d5}
@media(max-width:1080px){.quote-inner{grid-template-columns:1fr;gap:32px}.quote-copy p{max-width:650px}}
@media(max-width:620px){.quote{padding-bottom:72px}.quote-form{grid-template-columns:1fr;padding:20px}.quote-field.full{grid-column:auto}.quote-form .btn,.quote-status{grid-column:auto;width:100%}}
.f-logo img{display:block;width:88px;height:auto;object-fit:contain}

/* Clube de benefícios */
.club-inner{grid-template-columns:330px minmax(0,1fr);gap:68px;align-items:center}
.club h2{margin-top:0}
.club-side>p{margin-top:22px;font-size:16px;line-height:1.9}
.club-note{display:none!important}
.club-right{overflow:hidden}
.pills{display:none!important}
.carousel{margin-top:0;overflow:hidden;padding:14px 0 18px}
.track{gap:24px;overflow:hidden;scroll-snap-type:none;padding:8px 10px 24px;cursor:default;will-change:scroll-position}
.bcard{flex:0 0 282px;min-height:310px;border-radius:20px;padding:30px 26px 26px;border:1px solid #e5eaf2;box-shadow:0 12px 32px rgba(15,35,70,.08);display:flex;flex-direction:column;justify-content:flex-start}
.bcard:hover{transform:translateY(-6px);box-shadow:0 22px 44px rgba(15,35,70,.14);border-color:#d9e0ea}
.blogo{height:122px;margin-bottom:22px}
.bcard h3{font-size:17px;line-height:1.35}
.bcard .disc{font-size:14px;margin-top:9px;line-height:1.5}
.tag{margin-top:auto;align-self:flex-start;font-size:12px;padding:6px 11px;border-radius:999px;background:#f2f5f9}
.car-arrow,.dots{display:none!important}

/* Nova hero: pesados / carreta */
.hero{isolation:isolate;background:
 radial-gradient(900px 520px at 82% 34%,rgba(34,76,145,.30),transparent 62%),
 radial-gradient(620px 300px at 76% 77%,rgba(249,115,22,.11),transparent 70%),
 linear-gradient(180deg,#081526 0%,#0a1930 57%,#071523 100%)}
.hero::before{content:"";position:absolute;inset:0;background:
 linear-gradient(90deg,rgba(4,14,28,.95) 0%,rgba(5,17,33,.75) 35%,rgba(5,18,35,.12) 62%,rgba(5,18,35,.02) 100%),
 radial-gradient(circle at 80% 38%,rgba(255,255,255,.05) 0 1px,transparent 1.5px);background-size:auto,24px 24px;opacity:.95;mask-image:none;-webkit-mask-image:none;width:auto;height:auto;top:0;right:0}
.hero::after{content:"";position:absolute;inset:auto -12% 2% 38%;height:150px;background:
 linear-gradient(172deg,transparent 40%,rgba(249,115,22,.08) 41%,rgba(249,115,22,.85) 42%,rgba(255,196,132,.95) 43%,rgba(249,115,22,.32) 45%,transparent 47%),
 linear-gradient(177deg,transparent 48%,rgba(249,115,22,.55) 49%,rgba(249,115,22,.10) 51%,transparent 52%);filter:blur(.2px);opacity:.9;transform:skewX(-8deg);pointer-events:none}
.hero-inner{grid-template-columns:.92fr 1.28fr;gap:18px;min-height:calc(100vh - var(--headerH));padding:44px 0 54px}
.hero-copy{position:relative;z-index:5;padding-right:12px}
.hero h1{font-size:clamp(44px,5vw,67px);line-height:1.08;max-width:620px;letter-spacing:-.025em}
.hero-copy p{max-width:520px;color:#b7c3d4;font-size:17px;line-height:1.78}
.hero-actions{margin-top:34px}
.hero-actions .btn{min-width:182px}

.truck-hero{position:relative;margin-right:-11vw;min-height:570px;display:flex;align-items:center;justify-content:center;z-index:2}
.truck-stage{position:relative;width:760px;max-width:64vw;height:520px;transform:translateY(20px)}
.truck-glow{position:absolute;left:14%;right:4%;bottom:8%;height:95px;background:radial-gradient(ellipse,rgba(249,115,22,.25),rgba(22,69,128,.14) 48%,transparent 74%);filter:blur(20px)}
.truck-svg{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 28px 30px rgba(0,0,0,.45));overflow:visible}
.truck-svg .metal{fill:url(#truckMetal)}
.truck-svg .dark{fill:#111923}
.truck-svg .glass{fill:url(#truckGlass)}
.truck-svg .chrome{fill:url(#truckChrome)}
.truck-svg .orangeLamp{fill:#f97316;filter:url(#orangeGlow)}
.truck-svg .headLamp{fill:#e8f6ff;filter:url(#whiteGlow)}

.protection-shell{position:absolute;left:4%;top:3%;width:94%;height:88%;border:1.6px solid rgba(249,115,22,.42);border-radius:50% 50% 42% 42%/58% 58% 42% 42%;box-shadow:0 0 24px rgba(249,115,22,.16),inset 0 0 34px rgba(249,115,22,.08);transform:rotate(-3deg);pointer-events:none;opacity:.82}
.protection-shell::before{content:"";position:absolute;inset:3%;border-radius:inherit;background-image:linear-gradient(30deg,rgba(249,115,22,.16) 1px,transparent 1px),linear-gradient(150deg,rgba(249,115,22,.11) 1px,transparent 1px);background-size:36px 22px;mask-image:radial-gradient(ellipse at center,#000 18%,transparent 72%);-webkit-mask-image:radial-gradient(ellipse at center,#000 18%,transparent 72%);opacity:.48}
.protection-sweep{position:absolute;top:3%;bottom:7%;width:22%;left:-28%;border-radius:50%;background:linear-gradient(90deg,transparent,rgba(249,115,22,.06) 18%,rgba(249,115,22,.30) 50%,rgba(255,188,121,.42) 57%,rgba(249,115,22,.08) 78%,transparent);filter:blur(8px);transform:skewX(-10deg);mix-blend-mode:screen;animation:protectionSweep 5.7s cubic-bezier(.45,.02,.2,1) infinite;pointer-events:none}
.protection-sweep::after{content:"";position:absolute;top:5%;bottom:5%;left:54%;width:2px;background:linear-gradient(transparent,rgba(255,203,147,.92) 23%,rgba(249,115,22,.92) 55%,transparent 92%);box-shadow:0 0 16px 5px rgba(249,115,22,.34)}
@keyframes protectionSweep{0%,14%{left:-28%;opacity:0}19%{opacity:.9}58%{opacity:.85}72%,100%{left:112%;opacity:0}}

.hero-points{position:absolute;left:6%;right:3%;bottom:0;display:flex;gap:22px;align-items:center;color:#d8e1ec;font-size:12px;opacity:.9}
.hero-point{display:flex;gap:8px;align-items:center}.hero-point i{width:7px;height:7px;border-radius:50%;background:var(--orange);box-shadow:0 0 12px rgba(249,115,22,.6)}

@media(max-width:1080px){
 .club-inner{grid-template-columns:1fr;gap:34px}.club-side{max-width:650px}.carousel{margin-left:-4px;margin-right:-4px}
 .hero-inner{grid-template-columns:1fr;gap:0;padding:58px 0 44px}
 .hero-copy{max-width:720px}
 .truck-hero{margin:18px -8vw -20px -2vw;min-height:470px}
 .truck-stage{max-width:96vw;width:760px;height:480px}
 .hero::before{background:linear-gradient(180deg,rgba(5,16,31,.30),rgba(5,16,31,.78) 56%,rgba(5,16,31,.28)),radial-gradient(circle at 80% 38%,rgba(255,255,255,.05) 0 1px,transparent 1.5px);background-size:auto,24px 24px}
}
@media(max-width:620px){
 .club{padding:72px 0 62px}.club-inner{gap:30px}.bcard{flex-basis:244px;min-height:286px;padding:25px 22px 22px}.blogo{height:108px}.track{gap:16px;padding-inline:2px}
 .hero-inner{padding:42px 0 30px}
 .hero h1{font-size:clamp(38px,12vw,52px)}
 .hero-copy p{font-size:15.5px;margin-top:20px}
 .hero-actions{margin-top:26px}.hero-actions .btn{width:100%}
 .truck-hero{min-height:350px;margin:12px -18vw -4px -12vw}
 .truck-stage{width:620px;max-width:124vw;height:355px;transform:none}
 .protection-shell{left:9%;top:7%;width:84%;height:80%}
 .protection-sweep{animation-duration:6.8s}
 .hero-points{display:none}
 .hero::after{inset:auto -40% 0 5%;height:100px;opacity:.7}
}
@media(prefers-reduced-motion:reduce){.protection-sweep{animation:none;display:none}}
</style>`;

const v2Styles = `
<style id="site-v2-refinements">
/* v0.2 — hero de cotação e catálogo de produtos */
.hero-v2 .hero-inner{grid-template-columns:1.02fr .98fr;gap:42px;min-height:calc(100vh - var(--headerH));padding:54px 0 66px}
.hero-v2 .hero-copy{padding-right:0;max-width:620px}
.hero-v2 .hero-copy p{max-width:540px}
.hero-v2-side{position:relative;display:grid;gap:18px;align-content:center;min-width:0}
.hero-v2 .hero-quote{position:relative;z-index:4;align-self:center}
.hero-v2 .quote-copy{grid-column:1/-1}
.hero-v2 .quote-copy p{margin-top:12px;max-width:540px}
.hero-v2 .quote-form{padding:28px;background:rgba(14,30,58,.92);backdrop-filter:blur(12px);box-shadow:0 26px 60px rgba(0,0,0,.22)}
.hero-v2 .quote-form .btn{width:100%;justify-self:stretch}
.hero-v2 .quote-status{font-size:12px}
.hero-v2-side{display:block;min-height:620px}
.hero-v2 .hero-quote{max-width:540px;margin-left:auto;padding-top:42px}
.hero-v2-side .hero-ecosystem{position:absolute;z-index:1;top:-26px;right:-20px;width:560px;min-height:360px;opacity:.82;pointer-events:none}
.hero-v2 .hero-quote{z-index:4}
.hero-v2 .quote-flow{display:block;padding:24px;border-radius:22px;background:rgba(14,30,58,.94);border:1px solid rgba(255,255,255,.14);box-shadow:0 26px 60px rgba(0,0,0,.28);backdrop-filter:blur(14px)}
.quote-flow-head{display:flex;align-items:center;gap:12px}.quote-flow-icon{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:linear-gradient(145deg,var(--orange-2),var(--orange-3));color:#fff;font-family:'Plus Jakarta Sans';font-size:17px;font-weight:800;box-shadow:0 8px 18px rgba(249,115,22,.22)}.quote-flow-head .eyebrow{display:block}.quote-flow-meta{display:block;margin-top:4px;color:#93a4bd;font-size:11px}
.quote-flow-title{margin-top:22px}.quote-flow-title h2{font-size:clamp(25px,2.6vw,34px);line-height:1.1;letter-spacing:-.025em}.quote-flow-title p{margin-top:8px;color:var(--muted);font-size:13px;line-height:1.55}
.quote-progress{display:flex;align-items:center;gap:10px;margin-top:20px;color:#8799b2;font-size:11px;font-weight:700}.quote-progress-line{height:1px;flex:1;background:rgba(255,255,255,.13);order:2}.quote-progress-step{display:inline-flex;align-items:center;gap:5px;white-space:nowrap;order:1}.quote-progress-step:last-child{order:3}.quote-progress-step.active{color:#fff}.quote-progress-step.active::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--orange);box-shadow:0 0 10px rgba(249,115,22,.6)}.quote-progress-step:not(.active)::before{content:"";width:7px;height:7px;border:1px solid #61738d;border-radius:50%}.quote-progress-step small{font-size:10px;font-weight:600;color:inherit;opacity:.9}
.quote-step{margin-top:18px}.quote-product-choice{display:grid;grid-template-columns:1fr 1fr;gap:9px;border:0;margin:0;padding:0}.quote-product-option{display:flex;align-items:center;gap:10px;min-height:63px;padding:11px 12px;border:1px solid rgba(255,255,255,.13);border-radius:13px;background:rgba(255,255,255,.035);color:#fff;text-align:left;font:inherit;cursor:pointer;transition:.2s}.quote-product-option:hover{border-color:rgba(249,115,22,.7);background:rgba(249,115,22,.08);transform:translateY(-2px)}.quote-product-option.selected{border-color:var(--orange);background:rgba(249,115,22,.14);box-shadow:0 0 0 2px rgba(249,115,22,.12)}.quote-option-mark{display:grid;place-items:center;width:25px;height:25px;flex:none;border-radius:8px;background:rgba(255,255,255,.08);color:#a9bad0;font-size:9px;font-weight:800;letter-spacing:.04em}.quote-product-option.selected .quote-option-mark{background:var(--orange);color:#fff}.quote-product-option strong{display:block;font-size:12px;line-height:1.2}.quote-product-option small{display:block;margin-top:4px;color:#91a3bb;font-size:10px;line-height:1.2}.quote-option-arrow{margin-left:auto;color:#8295ae;font-size:16px;transition:.2s}.quote-product-option:hover .quote-option-arrow,.quote-product-option.selected .quote-option-arrow{color:var(--orange-2);transform:translateX(2px)}.quote-next{margin-top:14px;min-height:48px}.quote-next:disabled{opacity:.42;cursor:not-allowed;transform:none!important;box-shadow:none}
.quote-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.quote-flow .quote-field{gap:6px}.quote-flow .quote-field label{font-size:11px;color:#dfe7f3}.quote-flow .quote-field label span{color:#7f91ad;font-weight:500}.quote-flow .quote-field input{padding:12px;border-radius:11px;background:rgba(255,255,255,.055);font-size:13px}.quote-field-email{margin-top:10px}.quote-summary{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:14px;padding:11px 13px;border:1px solid rgba(249,115,22,.32);border-radius:12px;background:rgba(249,115,22,.07)}.quote-summary small{display:block;color:#98a9be;font-size:10px}.quote-summary strong{display:block;margin-top:3px;color:#fff;font-size:13px}.quote-change{border:0;background:transparent;color:var(--orange-2);font:inherit;font-size:11px;font-weight:700;cursor:pointer}.quote-actions{display:grid;grid-template-columns:.72fr 1.28fr;gap:9px;margin-top:16px}.quote-actions .btn{width:100%;min-height:47px}.quote-status{margin-top:13px!important;min-height:18px!important;font-size:11px!important}.quote-status[data-state="ready"]{color:#c5f6d5}.quote-status[data-state="error"]{color:#fdba74}
@media(max-width:1080px){.hero-v2-side{display:grid;gap:18px;min-height:auto}.hero-v2 .hero-quote{max-width:700px;padding-top:0}.hero-v2-side .hero-ecosystem{position:relative;top:auto;right:auto;width:auto;min-height:250px;opacity:1;order:-1}}
@media(max-width:620px){.hero-v2 .quote-flow{padding:20px}.quote-flow-title{margin-top:18px}.quote-flow-title h2{font-size:25px}.quote-product-choice{grid-template-columns:1fr;gap:8px}.quote-product-option{min-height:58px}.quote-contact-grid{grid-template-columns:1fr}.quote-actions{grid-template-columns:1fr 1.5fr}.hero-v2-side .hero-ecosystem{min-height:200px}.hero-v2 .hero-quote{padding-top:0}}
@media(max-width:390px){.quote-actions{grid-template-columns:1fr}.quote-actions .quote-back{order:2}.quote-actions .btn-primary{order:1}}
.hero-v2 .hero-quote::before{content:"";position:absolute;inset:-18px -18px 18px 18px;border:1px solid rgba(249,115,22,.20);border-radius:24px;transform:rotate(-2deg);pointer-events:none}
.hero-v2 .hero-quote::after{content:"";position:absolute;right:-32px;bottom:-24px;width:150px;height:80px;background:linear-gradient(168deg,transparent 43%,rgba(249,115,22,.62) 44%,rgba(255,210,164,.86) 45%,transparent 48%);opacity:.55;pointer-events:none}
.hero-ecosystem{position:relative;min-height:430px;display:grid;place-items:center;isolation:isolate}
.hero-v2-side .hero-ecosystem{min-height:186px}
.hero-ecosystem::before{content:"";position:absolute;width:360px;height:360px;border:1px solid rgba(255,255,255,.11);border-radius:50%;box-shadow:0 0 0 22px rgba(255,255,255,.018),0 0 0 44px rgba(249,115,22,.06);transform:rotate(-14deg)}
.hero-ecosystem::after{content:"";position:absolute;inset:12% 0 8% 4%;background:linear-gradient(145deg,transparent 47%,rgba(249,115,22,.68) 48%,rgba(255,209,160,.78) 49%,transparent 50%),linear-gradient(145deg,transparent 62%,rgba(255,255,255,.10) 63%,transparent 64%);pointer-events:none}
.hero-ecosystem-mark{position:relative;z-index:2;width:138px;height:auto;filter:drop-shadow(0 20px 25px rgba(0,0,0,.30))}
.hero-ecosystem-labels{position:absolute;inset:0;z-index:3;pointer-events:none}
.hero-ecosystem-label{position:absolute;display:inline-flex;align-items:center;gap:8px;color:#e7eef8;font-size:12px;font-weight:700;letter-spacing:.02em}
.hero-ecosystem-label::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--orange);box-shadow:0 0 11px rgba(249,115,22,.7)}
.hero-ecosystem-label:nth-child(1){top:10%;left:7%}.hero-ecosystem-label:nth-child(2){top:26%;right:2%}.hero-ecosystem-label:nth-child(3){bottom:21%;right:4%}.hero-ecosystem-label:nth-child(4){bottom:8%;left:10%}.hero-ecosystem-label:nth-child(5){top:49%;left:1%}
.products{background:var(--navy-2);padding:92px 0 100px;position:relative;overflow:hidden}
.products::after{content:"";position:absolute;inset:auto -8% 1% 40%;height:130px;background:linear-gradient(174deg,transparent 42%,rgba(249,115,22,.55) 43%,rgba(255,205,156,.72) 44%,transparent 47%);transform:skewX(-8deg);opacity:.65;pointer-events:none}
.products-head{display:flex;align-items:flex-end;justify-content:space-between;gap:34px;position:relative;z-index:1}.products-head h2{font-size:clamp(30px,3.6vw,44px);font-weight:800;line-height:1.15;letter-spacing:-.01em;margin-top:18px;max-width:660px}.products-intro{max-width:420px;color:var(--muted);font-size:15.5px;line-height:1.8}
.product-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:44px;position:relative;z-index:1}.product-card{min-height:392px;display:flex;flex-direction:column;overflow:hidden;border-radius:18px;border:1px solid var(--line);background:rgba(255,255,255,.035);transition:.25s}.product-card:hover{transform:translateY(-5px);border-color:rgba(249,115,22,.52);box-shadow:0 20px 40px rgba(0,0,0,.20)}.product-media{position:relative;height:210px;overflow:hidden;background:#0a1628;display:grid;place-items:center}.product-media::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 40%,rgba(249,115,22,.05) 44%,rgba(249,115,22,.38) 50%,rgba(255,205,156,.55) 52%,rgba(249,115,22,.07) 59%,transparent 65%);background-size:280% 100%;animation:productSweep 6.6s cubic-bezier(.45,.02,.2,1) infinite;mix-blend-mode:screen;pointer-events:none}.product-media.has-truck::after{display:none}@keyframes productSweep{0%,12%{background-position:145% 0;opacity:0}20%{opacity:.6}54%{opacity:.78}76%,100%{background-position:-55% 0;opacity:0}}
.product-art{position:absolute;inset:0;display:grid;place-items:center;color:#dbe6f4}.product-art::before{content:"";width:108px;height:108px;border:1px solid rgba(255,255,255,.20);border-radius:30% 70% 45% 55%/45% 45% 55% 55%;transform:rotate(18deg);box-shadow:inset 0 0 28px rgba(249,115,22,.14),0 0 30px rgba(249,115,22,.10)}.product-art span{position:absolute;font-family:'Plus Jakarta Sans';font-size:13px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.74)}.product-art-home{background:radial-gradient(circle at 50% 45%,rgba(53,106,136,.38),transparent 55%),linear-gradient(145deg,#0f2644,#0a1628)}.product-art-life{background:radial-gradient(circle at 50% 45%,rgba(249,115,22,.24),transparent 55%),linear-gradient(145deg,#162d47,#0a1628)}.product-art-future{background:radial-gradient(circle at 50% 45%,rgba(81,127,164,.34),transparent 55%),linear-gradient(145deg,#132842,#0a1628)}.product-art-special{background:radial-gradient(circle at 50% 45%,rgba(249,115,22,.18),transparent 55%),linear-gradient(145deg,#20283a,#0a1628)}
.product-card-body{padding:22px 20px 20px;display:flex;flex:1;flex-direction:column}.product-card h3{font-size:18px;font-weight:700}.product-card p{margin-top:10px;color:var(--muted);font-size:13.5px;line-height:1.65}.product-list{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:18px}.product-list span{font-size:11.5px;color:#dfe7f3;border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:5px 8px}.product-link{display:inline-flex;align-items:center;gap:7px;margin-top:18px;color:var(--orange-2);font-size:12px;font-weight:700}.product-link::after{content:"→";font-size:15px}
.product-media .truck-real,.product-media .truck-protection-pass{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 54%;z-index:2}.product-media .truck-protection-pass{z-index:4}.product-media .truck-glow,.product-media .product-glow{position:absolute;z-index:1;left:8%;right:8%;bottom:0;height:60px;background:radial-gradient(ellipse,rgba(249,115,22,.28),transparent 72%);filter:blur(16px)}
.auto-media .truck-real,.auto-media .truck-protection-pass{object-fit:contain;object-position:center 72%}.auto-media .truck-real{width:88%;left:7%;}.auto-media .truck-protection-pass{width:88%;left:7%}.auto-vehicle{position:absolute;z-index:3;object-fit:contain;filter:drop-shadow(0 13px 13px rgba(0,0,0,.38));pointer-events:none}.auto-vehicle-car{width:64%;right:-9%;bottom:2%;}.auto-vehicle-moto{width:45%;left:-6%;bottom:0;}.auto-vehicle-badges{position:absolute;z-index:5;left:16px;bottom:13px;display:flex;gap:5px}.auto-vehicle-badges span{font-size:10px;line-height:1;color:#fff;background:rgba(8,21,39,.76);border:1px solid rgba(255,255,255,.16);padding:5px 7px;border-radius:999px;backdrop-filter:blur(8px)}
.product-media .product-photo{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;object-position:center;filter:saturate(.9) contrast(1.04)}
@media(max-width:1080px){.hero-v2 .hero-inner{grid-template-columns:1fr;gap:30px}.hero-v2 .hero-copy{max-width:720px}.hero-v2-side{max-width:700px;width:100%}.hero-v2 .hero-quote{max-width:700px;width:100%}.hero-v2-side .hero-ecosystem{min-height:250px}.hero-ecosystem{min-height:300px;order:-1}.hero-ecosystem::before{width:260px;height:260px}.product-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.product-card{min-height:360px}}
@media(max-width:620px){.hero-v2 .hero-inner{padding:26px 0 34px;gap:22px}.hero-v2 .hero-copy p{font-size:15px}.hero-v2 .hero-actions .btn{min-height:54px}.hero-v2 .quote-form{padding:20px}.hero-v2 .hero-quote::before{inset:-10px -8px 10px 8px}.hero-v2-side{gap:14px}.hero-v2-side .hero-ecosystem{min-height:220px}.hero-ecosystem{min-height:220px;order:-1}.hero-ecosystem::before{width:194px;height:194px;box-shadow:0 0 0 14px rgba(255,255,255,.018),0 0 0 28px rgba(249,115,22,.05)}.hero-ecosystem-mark{width:86px}.hero-ecosystem-label{font-size:10px}.hero-ecosystem-label:nth-child(1){top:4%;left:0}.hero-ecosystem-label:nth-child(2){top:20%;right:0}.hero-ecosystem-label:nth-child(3){bottom:17%;right:0}.hero-ecosystem-label:nth-child(4){bottom:0;left:3%}.hero-ecosystem-label:nth-child(5){top:47%;left:0}.products{padding:72px 0 76px}.products-head{display:block}.products-intro{margin-top:18px}.product-grid{grid-template-columns:1fr 1fr;gap:12px;margin-top:30px}.product-card{min-height:348px}.product-media{height:150px}.product-card-body{padding:18px 15px 16px}.product-card h3{font-size:16px}.product-card p{font-size:13px}.product-list span{font-size:11px;padding:4px 7px}.product-link{font-size:11px}.product-media .truck-real,.product-media .truck-protection-pass{object-fit:cover;object-position:center center}}
@media(max-width:390px){.product-grid{grid-template-columns:1fr}.product-card{min-height:320px}}

/* Head quote card — compact, clear and aligned to the Grupo Nogueira system */
.hero-v2 .hero-quote{max-width:430px;margin-left:auto;padding-top:12px}
.hero-v2-side .hero-ecosystem{top:-34px;right:-42px;width:540px;min-height:390px;opacity:.72}
.hero-v2 .hero-quote::before,.hero-v2 .hero-quote::after{display:none}
.hero-v2 .quote-card{display:flex;flex-direction:column;gap:0;max-width:430px;padding:24px 24px 20px;border:1px solid rgba(243,239,231,.88);border-radius:26px;background:linear-gradient(180deg,#F3EFE7 0%,#EAE3D8 100%);color:#0B1F33;box-shadow:0 28px 70px rgba(0,0,0,.30),0 0 0 8px rgba(243,239,231,.05);backdrop-filter:none}
.quote-card-head{display:flex;align-items:center;gap:12px}.quote-card-mark{display:grid;place-items:center;width:42px;height:42px;flex:none;border-radius:12px;background:#E86F2C;box-shadow:0 10px 20px rgba(232,111,44,.25);padding:8px}.quote-card-mark img{display:block;width:100%;height:100%;object-fit:contain}.quote-card-head-copy strong{display:block;font-family:'Plus Jakarta Sans',Inter,sans-serif;font-size:17px;line-height:1.15;color:#0B1F33;letter-spacing:-.015em}.quote-card-head-copy span{display:block;margin-top:4px;color:#526575;font-size:11px;line-height:1.3}
.quote-card-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px}.quote-card-field{gap:6px}.quote-card-field-full{grid-column:1/-1}.quote-card .quote-field label{font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#26343E}.quote-card .quote-field label span{font-weight:600;color:#6A7882;text-transform:none;letter-spacing:0}.quote-card .quote-field input,.quote-card .quote-field select{min-height:43px;width:100%;padding:11px 14px;border:1px solid rgba(38,52,62,.42);border-radius:999px;background:rgba(255,255,255,.72);color:#0B1F33;font-size:12px;outline:none;box-shadow:inset 0 1px 2px rgba(11,31,51,.04);transition:border-color .2s,box-shadow .2s,background .2s}.quote-card .quote-field input::placeholder{color:#7C8891}.quote-card .quote-field input:focus,.quote-card .quote-field select:focus{border-color:#E86F2C;background:#fff;box-shadow:0 0 0 3px rgba(232,111,44,.18),inset 0 1px 2px rgba(11,31,51,.04)}.quote-card .quote-field select{appearance:none;cursor:pointer;background-image:linear-gradient(45deg,transparent 50%,#356A88 50%),linear-gradient(135deg,#356A88 50%,transparent 50%);background-position:calc(100% - 17px) 18px,calc(100% - 12px) 18px;background-size:5px 5px,5px 5px;background-repeat:no-repeat;padding-right:34px}.quote-card .quote-field select option{color:#0B1F33}
.quote-card-submit{width:100%;min-height:47px;margin-top:16px;border-radius:999px;padding:12px 18px;font-size:13px;background:#E86F2C;box-shadow:0 12px 24px rgba(232,111,44,.24)}.quote-card-submit:hover{background:#D15F21}.quote-card-submit span{font-size:17px;line-height:1;transition:transform .2s}.quote-card-submit:hover span{transform:translateX(3px)}.quote-card .quote-status{margin:11px 0 0!important;min-height:0!important;color:#356A88;font-size:10.5px!important;line-height:1.45;text-align:center}.quote-card .quote-status[data-state="error"]{color:#A34720}.quote-card .quote-status[data-state="ready"]{color:#23664D}.quote-card-foot{display:block;margin-top:8px;color:#78858D;font-size:10px;line-height:1.35;text-align:center}
@media(max-width:1080px){.hero-v2 .hero-quote{max-width:520px;padding-top:0}.hero-v2 .quote-card{max-width:520px}.hero-v2-side .hero-ecosystem{position:relative;top:auto;right:auto;width:auto;min-height:250px;opacity:1}}
@media(max-width:620px){.hero-v2 .quote-card{padding:21px 18px 18px;border-radius:22px}.quote-card-fields{grid-template-columns:1fr;gap:11px;margin-top:20px}.quote-card-field-full{grid-column:auto}.quote-card-submit{margin-top:14px}.hero-v2 .hero-quote{width:100%}}
</style>`;

const heroMarkup = `
<div class="hero-art reveal truck-hero" aria-hidden="true">
  <div class="truck-stage">
    <div class="truck-glow"></div>
    <svg class="truck-svg" viewBox="0 0 980 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="truckMetal" x1="210" y1="140" x2="720" y2="520" gradientUnits="userSpaceOnUse"><stop stop-color="#f9fbfd"/><stop offset=".32" stop-color="#cfd6dd"/><stop offset=".58" stop-color="#ffffff"/><stop offset="1" stop-color="#aab4bf"/></linearGradient>
        <linearGradient id="truckGlass" x1="310" y1="190" x2="470" y2="350" gradientUnits="userSpaceOnUse"><stop stop-color="#1f405f"/><stop offset=".55" stop-color="#0d1b2b"/><stop offset="1" stop-color="#050b12"/></linearGradient>
        <linearGradient id="truckChrome" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f7fbff"/><stop offset=".45" stop-color="#7b8793"/><stop offset=".62" stop-color="#eef5fb"/><stop offset="1" stop-color="#454f59"/></linearGradient>
        <filter id="whiteGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="orangeGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <!-- trailer -->
      <path class="metal" d="M486 215 L880 248 L938 427 L548 419 Z" stroke="#bdc7d0" stroke-width="3"/>
      <path d="M540 392 L930 402" stroke="#86919c" stroke-width="5"/>
      <path d="M555 404 L924 415" stroke="#f97316" stroke-width="3" stroke-dasharray="12 15" opacity=".78"/>
      <path class="dark" d="M526 420 L916 429 L896 474 L548 470 Z"/>
      <!-- cab body -->
      <path class="metal" d="M190 451 L187 301 Q191 258 231 238 L266 221 L302 144 Q312 119 343 116 L482 121 Q516 124 531 151 L571 236 L596 260 L604 433 Q604 454 581 461 L226 481 Q197 480 190 451Z" stroke="#d9e0e6" stroke-width="3"/>
      <path class="glass" d="M296 153 L468 156 Q491 158 501 178 L531 240 L273 226 Z" stroke="#53677d" stroke-width="3"/>
      <path d="M383 155 L390 229" stroke="#111923" stroke-width="9" opacity=".75"/>
      <path class="dark" d="M244 238 L542 250 L528 290 L230 279 Z"/>
      <path d="M242 293 L520 303 L509 366 Q503 391 474 397 L280 389 Q253 386 246 362 Z" fill="#202a33" stroke="#0a0f14" stroke-width="3"/>
      <path d="M274 315 L490 322 L478 361 Q474 373 459 376 L295 370 Q278 367 274 352 Z" fill="#0b1117"/>
      <path class="metal" d="M221 392 L545 403 L542 448 L215 461 Z" stroke="#bec7cf" stroke-width="2"/>
      <path class="dark" d="M245 416 L505 424 L499 443 L241 450 Z"/>
      <!-- side details -->
      <path d="M531 257 L577 272 L582 389 L538 386 Z" fill="#d9e0e6" stroke="#9ba6b1" stroke-width="2"/>
      <rect x="543" y="291" width="29" height="67" rx="5" fill="#17212b" transform="rotate(5 543 291)"/>
      <path d="M579 273 L606 254" stroke="#202a33" stroke-width="7" stroke-linecap="round"/>
      <rect x="600" y="237" width="18" height="45" rx="5" fill="#111923" transform="rotate(18 600 237)"/>
      <!-- lamps -->
      <path d="M205 348 L254 345 L252 379 L204 383 Z" fill="#1a2430"/>
      <circle class="headLamp" cx="224" cy="365" r="10"/><circle class="headLamp" cx="244" cy="363" r="8"/>
      <path d="M503 383 L545 386 L541 418 L500 415 Z" fill="#1a2430"/>
      <circle class="headLamp" cx="516" cy="400" r="9"/><circle class="headLamp" cx="535" cy="402" r="8"/>
      <rect class="orangeLamp" x="572" y="394" width="13" height="7" rx="2"/>
      <!-- wheels -->
      <g>
        <circle cx="337" cy="468" r="55" fill="#05080c"/><circle cx="337" cy="468" r="34" class="chrome"/><circle cx="337" cy="468" r="11" fill="#20262c"/>
        <circle cx="602" cy="460" r="48" fill="#05080c"/><circle cx="602" cy="460" r="29" class="chrome"/><circle cx="602" cy="460" r="9" fill="#20262c"/>
        <circle cx="690" cy="463" r="45" fill="#05080c"/><circle cx="690" cy="463" r="27" class="chrome"/><circle cx="690" cy="463" r="8" fill="#20262c"/>
        <circle cx="832" cy="469" r="40" fill="#05080c"/><circle cx="832" cy="469" r="24" class="chrome"/><circle cx="832" cy="469" r="7" fill="#20262c"/>
        <circle cx="894" cy="471" r="38" fill="#05080c"/><circle cx="894" cy="471" r="23" class="chrome"/><circle cx="894" cy="471" r="7" fill="#20262c"/>
      </g>
      <!-- reflected orange underglow -->
      <path d="M228 493 C430 512 672 506 932 491" stroke="#f97316" stroke-width="5" opacity=".55" filter="url(#orangeGlow)"/>
    </svg>
    <div class="protection-shell"></div>
    <div class="protection-sweep"></div>
    <div class="hero-points"><span class="hero-point"><i></i>Seguro para pesados</span><span class="hero-point"><i></i>Atendimento próximo</span><span class="hero-point"><i></i>Assistência na estrada</span></div>
  </div>
</div>`;

const heroV2Markup = `
<section class="hero hero-v2" id="inicio">
  <div class="container hero-inner">
    <div class="hero-copy reveal">
      <span class="eyebrow">Ecossistema de seguros</span>
      <h1 style="margin-top:24px">Seguros inteligentes para tudo que <span class="accent">move você.</span></h1>
      <p>Do auto aos pesados, da sua casa à sua família: soluções de seguro, assistência e orientação para acompanhar cada avanço.</p>
      <div class="hero-actions"><a href="#contato" class="btn btn-primary">Quero uma cotação</a><a href="#produtos" class="btn btn-ghost">Conhecer produtos</a></div>
    </div>
    <div class="hero-v2-side reveal">
      <div class="hero-ecosystem" aria-hidden="true">
        <img class="hero-ecosystem-mark" src="/escudo-oficial-web.png" alt="">
        <div class="hero-ecosystem-labels"><span class="hero-ecosystem-label">Mobilidade</span><span class="hero-ecosystem-label">Patrimônio</span><span class="hero-ecosystem-label">Vida &amp; Saúde</span><span class="hero-ecosystem-label">Projetos &amp; Futuro</span><span class="hero-ecosystem-label">Soluções especiais</span></div>
      </div>
      <div class="hero-quote" id="contato">
        <form class="quote-form quote-card" id="quoteForm" data-whatsapp="5532988842933" novalidate>
          <div class="quote-card-head"><span class="quote-card-mark" aria-hidden="true"><img src="/escudo-oficial-web.png" alt=""></span><div class="quote-card-head-copy"><strong>Solicite uma cotação</strong><span>Preencha e fale com nossa equipe.</span></div></div>
          <div class="quote-card-fields">
            <div class="quote-field quote-card-field"><label for="quoteName">Nome</label><input id="quoteName" name="name" autocomplete="name" placeholder="Nome completo" required></div>
            <div class="quote-field quote-card-field"><label for="quotePhone">WhatsApp</label><input id="quotePhone" name="phone" autocomplete="tel" inputmode="tel" placeholder="(00) 00000-0000" required></div>
            <div class="quote-field quote-card-field quote-card-field-full"><label for="quoteEmail">E-mail <span>(opcional)</span></label><input id="quoteEmail" name="email" autocomplete="email" type="email" placeholder="seu@email.com"></div>
            <div class="quote-field quote-card-field quote-card-field-full"><label for="quoteSolution">Seguro que você busca</label><select id="quoteSolution" name="solution" required><option value="" selected disabled>Selecione uma opção</option><option value="Mobilidade">Mobilidade — auto, moto e pesados</option><option value="Patrimônio">Patrimônio — residencial e empresarial</option><option value="Vida e Saúde">Vida &amp; Saúde</option><option value="Projetos e Futuro">Projetos &amp; Futuro</option><option value="Pet e Dispositivos">Pet &amp; Dispositivos</option><option value="Vacina Antifurto">Vacina Antifurto — codificação a laser</option></select></div>
          </div>
          <button class="btn btn-primary quote-card-submit" type="submit">Solicitar proposta <span aria-hidden="true">→</span></button>
          <p class="quote-status" id="quoteStatus" role="status" aria-live="polite">Preencha os dados e escolha um seguro.</p>
          <span class="quote-card-foot">Atendimento direto com a equipe Grupo Nogueira</span>
        </form>
      </div>
    </div>
  </div>
</section>`;

const productsMarkup = `
<section class="products" id="produtos">
  <div class="container">
    <div class="products-head reveal"><div><span class="eyebrow">Nossos produtos</span><h2>Um ecossistema completo para cada fase da sua vida.</h2></div><p class="products-intro">Conheça as frentes do Grupo Nogueira e encontre a combinação de seguros que faz sentido para o seu momento.</p></div>
    <div class="product-grid">
      <article class="product-card product-card-mobility reveal"><div class="product-media auto-media"><div class="product-glow"></div><svg class="truck-svg" viewBox="0 0 980 620" aria-hidden="true"></svg><img class="auto-vehicle auto-vehicle-car" src="/auto-car.webp" alt="Carro para seguro auto" loading="lazy"><img class="auto-vehicle auto-vehicle-moto" src="/auto-moto.webp" alt="Moto para seguro de moto" loading="lazy"><div class="auto-vehicle-badges"><span>Auto</span><span>Moto</span><span>Pesados</span></div></div><div class="product-card-body"><h3>Mobilidade</h3><p>Seguro para os veículos e as rotinas que não podem parar.</p><div class="product-list"><span>Auto</span><span>Moto</span><span>Caminhões</span></div><a class="product-link" href="#contato" data-solution="Mobilidade">Cotar mobilidade</a></div></article>
      <article class="product-card reveal"><div class="product-media"><img class="product-photo" src="/product-property-sm.webp" alt="Casa contemporânea ao anoitecer" loading="lazy"></div><div class="product-card-body"><h3>Patrimônio</h3><p>Seguro para sua casa, empresa e tudo que você construiu.</p><div class="product-list"><span>Residencial</span><span>Empresarial</span></div><a class="product-link" href="#contato" data-solution="Patrimônio">Cotar patrimônio</a></div></article>
      <article class="product-card reveal"><div class="product-media"><img class="product-photo" src="/product-life-sm.webp" alt="Família em atendimento consultivo" loading="lazy"></div><div class="product-card-body"><h3>Vida &amp; Saúde</h3><p>Cuidado contínuo para você, sua família e sua equipe.</p><div class="product-list"><span>Vida</span><span>Saúde</span></div><a class="product-link" href="#contato" data-solution="Vida e Saúde">Cotar vida e saúde</a></div></article>
      <article class="product-card reveal"><div class="product-media"><img class="product-photo" src="/product-future-sm.webp" alt="Mala, chaves e caderno de planejamento" loading="lazy"></div><div class="product-card-body"><h3>Projetos &amp; Futuro</h3><p>Planejamento para realizar seus próximos passos com tranquilidade.</p><div class="product-list"><span>Consórcio</span><span>Viagem</span></div><a class="product-link" href="#contato" data-solution="Projetos e Futuro">Cotar projeto</a></div></article>
      <article class="product-card reveal"><div class="product-media"><img class="product-photo" src="/product-special-sm.webp" alt="Cão ao lado de um smartphone" loading="lazy"></div><div class="product-card-body"><h3>Pet &amp; Dispositivos</h3><p>Seguros para os companheiros e tecnologias presentes na sua rotina.</p><div class="product-list"><span>Pet</span><span>Celular</span></div><a class="product-link" href="#contato" data-solution="Pet e Dispositivos">Cotar solução</a></div></article>
      <article class="product-card product-card-vaccine reveal"><div class="product-media"><img class="product-photo" src="/product-vaccine-sm.webp" alt="Codificação a laser em peça metálica de caminhão" loading="lazy"></div><div class="product-card-body"><h3>Vacina Antifurto</h3><p>Codificação a laser de peças de caminhão para dificultar o comércio irregular.</p><div class="product-list"><span>Laser</span><span>Pesados</span><span>Rastreabilidade</span></div><a class="product-link" href="#contato" data-solution="Vacina Antifurto">Conhecer a solução</a></div></article>
    </div>
  </div>
</section>`;

const solutionsMarkup = `
<section class="solutions" id="solucoes">
  <div class="container">
    <div class="solutions-head reveal">
      <div><span class="eyebrow">Ecossistema de seguros</span><h2>Uma estrutura completa para cuidar de <span class="accent">o que importa.</span></h2></div>
      <p class="solutions-intro">Do que move sua operação ao que sustenta sua vida, o Grupo Nogueira reúne orientação, seguro e assistência em um só lugar.</p>
    </div>
    <div class="solution-grid">
      <article class="solution-card reveal"><span class="solution-index">01</span><h3>Mobilidade</h3><p>Seguro para veículos e rotinas que não podem parar.</p><div class="solution-list"><span>Auto</span><span>Moto</span><span>Pesados</span></div><a class="solution-link" href="#contato" data-solution="Mobilidade">Cotar mobilidade</a></article>
      <article class="solution-card reveal"><span class="solution-index">02</span><h3>Patrimônio</h3><p>Segurança para sua casa, empresa e tudo que você construiu.</p><div class="solution-list"><span>Residencial</span><span>Empresarial</span></div><a class="solution-link" href="#contato" data-solution="Patrimônio">Cotar patrimônio</a></article>
      <article class="solution-card reveal"><span class="solution-index">03</span><h3>Vida &amp; Saúde</h3><p>Cuidado contínuo para você, sua família e sua equipe.</p><div class="solution-list"><span>Vida</span><span>Saúde</span></div><a class="solution-link" href="#contato" data-solution="Vida e Saúde">Cotar vida e saúde</a></article>
      <article class="solution-card reveal"><span class="solution-index">04</span><h3>Projetos &amp; Futuro</h3><p>Planejamento para realizar seus próximos passos com tranquilidade.</p><div class="solution-list"><span>Consórcio</span><span>Viagem</span></div><a class="solution-link" href="#contato" data-solution="Projetos e Futuro">Cotar projeto</a></article>
      <article class="solution-card reveal"><span class="solution-index">05</span><h3>Seguros especializados</h3><p>Recursos adicionais para riscos específicos e novas necessidades.</p><div class="solution-list"><span>Pet</span><span>Celular</span><span>Vacina Antifurto</span></div><a class="solution-link" href="#contato" data-solution="Seguros especializados">Cotar especialidade</a></article>
    </div>
  </div>
</section>`;

const quoteMarkup = `
<section class="quote" id="contato">
  <div class="container quote-inner">
    <div class="quote-copy reveal">
      <span class="eyebrow">Fale com a equipe</span>
      <h2>Vamos encontrar o seguro certo para o seu momento?</h2>
      <p>Conte um pouco sobre o que você precisa. A equipe do Grupo Nogueira poderá orientar o próximo passo com clareza e agilidade.</p>
      <span class="quote-note">Atendimento consultivo, do primeiro contato à contratação</span>
    </div>
    <form class="quote-form reveal" id="quoteForm" novalidate>
      <div class="quote-field"><label for="quoteName">Nome</label><input id="quoteName" name="name" autocomplete="name" placeholder="Como podemos chamar você?" required></div>
      <div class="quote-field"><label for="quotePhone">Telefone</label><input id="quotePhone" name="phone" autocomplete="tel" inputmode="tel" placeholder="(00) 00000-0000" required></div>
      <div class="quote-field full"><label for="quoteEmail">E-mail</label><input id="quoteEmail" name="email" autocomplete="email" type="email" placeholder="voce@exemplo.com" required></div>
      <div class="quote-field full"><label for="quoteSolution">O que você precisa?</label><select id="quoteSolution" name="solution" required><option value="" selected disabled>Selecione uma frente</option><option>Mobilidade</option><option>Patrimônio</option><option>Vida e Saúde</option><option>Projetos e Futuro</option><option>Seguros especializados</option></select></div>
      <div class="quote-field full"><label for="quoteMessage">Mensagem (opcional)</label><textarea id="quoteMessage" name="message" placeholder="Se quiser, conte mais sobre o seu momento."></textarea></div>
      <button class="btn btn-primary" type="submit">Enviar pedido de cotação</button>
      <p class="quote-status" id="quoteStatus" role="status" aria-live="polite">Os canais oficiais de atendimento serão conectados assim que os dados institucionais forem confirmados.</p>
    </form>
  </div>
</section>`;

const brandMarkup = '<a class="brand" href="#inicio" aria-label="Grupo Nogueira Corretora de Seguros"><img class="brand-lockup" src="/logo-oficial-web.png" alt="Grupo Nogueira Corretora de Seguros"></a>';

const autoplayScript = `
<script id="benefits-autoplay">
(() => {
  const track = document.getElementById('track');
  if (!track || track.dataset.autoplayReady === '1') return;
  track.dataset.autoplayReady = '1';
  const originals = [...track.querySelectorAll('.bcard')];
  if (!originals.length) return;
  originals.forEach(card => { const clone = card.cloneNode(true); clone.setAttribute('aria-hidden','true'); track.appendChild(clone); });
  let paused=false,last=performance.now(); const speed=34;
  const tick=(now)=>{const dt=Math.min((now-last)/1000,.05);last=now;if(!paused){track.scrollLeft+=speed*dt;const lp=track.scrollWidth/2;if(track.scrollLeft>=lp)track.scrollLeft-=lp;}requestAnimationFrame(tick)};
  const pause=()=>paused=true,play=()=>{paused=false;last=performance.now()};
  track.addEventListener('mouseenter',pause);track.addEventListener('mouseleave',play);track.addEventListener('focusin',pause);track.addEventListener('focusout',play);track.addEventListener('touchstart',pause,{passive:true});track.addEventListener('touchend',()=>setTimeout(play,900),{passive:true});document.addEventListener('visibilitychange',()=>document.hidden?pause():play());requestAnimationFrame(tick);
})();
</script>`;

const quoteScript = `
<script id="quote-form-behavior">
(() => {
  const form=document.getElementById('quoteForm');
  const status=document.getElementById('quoteStatus');
  if(!form||!status)return;
  const solution=document.getElementById('quoteSolution');
  const phone=document.getElementById('quotePhone');
  const setSolution=(value)=>{
    if(!solution||!value)return false;
    const option=[...solution.options].find(item=>item.value===value||item.textContent.trim().startsWith(value));
    if(!option)return false;
    solution.value=option.value;
    status.dataset.state='';
    status.textContent='Seguro selecionado. Agora é só enviar seus dados.';
    return true;
  };
  if(solution)solution.addEventListener('change',()=>{
    status.dataset.state='';
    status.textContent=solution.value?'Seguro selecionado. Agora é só enviar seus dados.':'Preencha os dados e escolha um seguro.';
  });
  if(phone)phone.addEventListener('input',()=>{
    const digits=phone.value.replace(/\\D/g,'').slice(0,11);
    if(digits.length<=10)phone.value=digits.replace(/(\\d{2})(\\d{4})(\\d{0,4})/,'($1) $2-$3').replace(/-$/,'');
    else phone.value=digits.replace(/(\\d{2})(\\d{5})(\\d{0,4})/,'($1) $2-$3').replace(/-$/,'');
  });
  document.querySelectorAll('a[data-solution]').forEach(link=>link.addEventListener('click',()=>{
    setSolution(link.dataset.solution);
  }));
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.checkValidity()){form.reportValidity();status.dataset.state='error';status.textContent='Confira nome, WhatsApp e seguro escolhido.';return;}
    const whatsapp=form.dataset.whatsapp;
    if(!whatsapp){status.dataset.state='ready';status.textContent='Seu pedido está pronto. O atendimento oficial será conectado assim que o canal for confirmado.';return;}
    const data=new FormData(form);const body=['Olá, quero uma cotação com o Grupo Nogueira.','Nome: '+data.get('name'),'WhatsApp: '+data.get('phone'),'E-mail: '+(data.get('email')||'-'),'Seguro: '+data.get('solution')].join('\\n');
    const url='https://wa.me/'+whatsapp+'?text='+encodeURIComponent(body);
    status.dataset.state='ready';status.textContent='Abrindo o WhatsApp com os dados da sua cotação.';
    const popup=window.open(url,'_blank','noopener,noreferrer');
    if(!popup)window.location.href=url;
  });
})();
</script>`;

let cleaned = source
  .replace('<span class="eyebrow">Grupo Nogueira Corretora de Seguros</span>', '<span class="eyebrow">Ecossistema de seguros</span>')
  .replace('<span class="eyebrow">Clube de Benefícios</span>', '')
  .replace('<span class="eyebrow">Como Funciona</span>', '')
  .replace('<span>Desenvolvido com <span class="heart">❤</span> por <strong>i5x</strong></span>', '')
  .replace('Clientes Grupo Nogueira terão acesso a uma rede de parceiros com condições especiais e descontos em diferentes categorias. Um clube de vantagens criado para gerar economia no dia a dia.', 'Tenha acesso a uma rede de parceiros com condições especiais e descontos em diferentes categorias. Um clube de vantagens reais, criado para você economizar no dia a dia.')
  .replace('Seu veículo protegido. Sua rotina com <span class="accent">mais vantagens.</span>', 'Seguros inteligentes para tudo que <span class="accent">move você.</span>')
  .replace('Soluções em seguro e proteção veicular com atendimento próximo, assistência quando você precisa e benefícios que continuam além da estrada.', 'Do auto aos pesados, da sua casa à sua família: soluções de seguro, assistência e orientação para acompanhar cada avanço.')
  .replace('Conhecer o clube', 'Explorar soluções')
  .replace('href="#beneficios" class="btn btn-ghost"', 'href="#solucoes" class="btn btn-ghost"')
  .replace('<title>Grupo Nogueira | Corretora de Seguros</title>', '<title>Grupo Nogueira | Ecossistema de Seguros</title>')
  .replace('<nav class="main-nav" id="mainNav"><a href="#inicio">Início</a><a href="#beneficios">Clube de benefícios</a><a href="#como-funciona">Como funciona</a></nav>', '<nav class="main-nav" id="mainNav"><a href="#inicio">Início</a><a href="#produtos">Produtos</a><a href="#beneficios">Clube de benefícios</a><a href="#como-funciona">Como funciona</a></nav>')
  .replace('oferecemos soluções em proteção veicular e benefícios que fazem a diferença no seu dia a dia.', 'reunimos soluções de seguro, assistência e benefícios para cuidar da sua mobilidade, patrimônio, vida e próximos projetos.')
  .replace('Proteção Veicular', 'Soluções em seguros')
  .replace('Proteção que <span class="accent">vai além do seu veículo.</span>', 'Seguros que <span class="accent">vão além do seu veículo.</span>')
  .replace('Escolha sua proteção', 'Escolha seu seguro')
  .replace('Vamos proteger o que move você?', 'Vamos cuidar do que move você?')
  .replace('<li><a href="#inicio">Soluções em seguros <span>›</span></a></li>', '<li><a href="#produtos">Nossos produtos <span>›</span></a></li>')
  .replace(/<a class="brand"[\s\S]*?<\/a>/, brandMarkup)
  .replace('<li>◉ (77) 99999-9999</li><li>☎ (77) 3421-9999</li><li>✉ contato@gruponogueira.com.br</li><li>⌖ Vitória da Conquista - BA</li>', '<li><a href="https://wa.me/5532988842933" target="_blank" rel="noreferrer">◉ (32) 98884-2933</a></li><li>◷ Assistência 24h / 7 dias</li><li>⌖ Rio-Bahia, 8.740 km, 700 — Bairro Universitário, Muriaé/MG</li><li>CEP 36888-230 · Anexo ao Posto Bela Vista</li>')
  .replace('Horário de Atendimento', 'Disponibilidade de atendimento')
  .replace('<p>Segunda a Sexta: 08h às 18h</p><p>Sábado: 08h às 12h</p>', '<p>Assistência 24h por dia, 7 dias por semana</p><p>Atendimento local via WhatsApp</p>')
  .replace('<a href="#" aria-label="Instagram">', '<a href="https://www.instagram.com/grupo.nnogueira/" target="_blank" rel="noreferrer" aria-label="Instagram">')
  .replace('<a href="#" aria-label="WhatsApp">', '<a href="https://wa.me/5532988842933" target="_blank" rel="noreferrer" aria-label="WhatsApp">')
  .replace(/<a href="#" aria-label="Facebook">[\s\S]*?<\/a>/, '')
  .replace(/<div class="f-logo"><svg[\s\S]*?<\/svg><\/div>/, '<div class="f-logo"><img src="/escudo-oficial-web.png" alt="Símbolo Grupo Nogueira" loading="lazy"></div>')
  .replace(/<div class="pills" id="tabs">[\s\S]*?<\/div>\s*<div class="carousel">/, '<div class="carousel">')
  .replace(/<span class="club-note">[\s\S]*?<\/span>/, '')
  .replace(/<div class="club-note">[\s\S]*?<\/div>/, '')
  .replace(/<section class="hero" id="inicio">[\s\S]*?<\/section>/, heroV2Markup)
  .replace('<section class="club" id="beneficios">', productsMarkup + '\n<section class="club" id="beneficios">')
  .replace('<footer id="contato">', '<footer id="rodape">')
  .replace('</head>', productionStyles + '\n' + v2Styles + '\n</head>')
  .replace('</body>', autoplayScript + '\n' + quoteScript + '\n</body>');

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), cleaned, 'utf8');
fs.copyFileSync(path.join(__dirname, 'logo-oficial-web.png'), path.join(__dirname, 'dist', 'logo-oficial-web.png'));
fs.copyFileSync(path.join(__dirname, 'escudo-oficial-web.png'), path.join(__dirname, 'dist', 'escudo-oficial-web.png'));
['auto-moto.webp','auto-car.webp','product-property-sm.webp','product-life-sm.webp','product-future-sm.webp','product-special-sm.webp','product-vaccine-sm.webp'].forEach(file => fs.copyFileSync(path.join(__dirname, file), path.join(__dirname, 'dist', file)));

