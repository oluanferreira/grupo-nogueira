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
@media(max-width:620px){.solutions{padding:72px 0 70px}.solutions-head{display:block}.solutions-intro{margin-top:18px}.solution-grid{grid-template-columns:1fr 1fr;gap:12px;margin-top:30px}.solution-card{min-height:230px;padding:20px 16px}.solution-card h3{font-size:16px}.solution-card p{font-size:13px}.solution-list span{font-size:11px;padding:4px 7px}}

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
  document.querySelectorAll('[data-solution]').forEach(link=>link.addEventListener('click',()=>{
    const select=document.getElementById('quoteSolution');
    if(select){select.value=link.dataset.solution;}
  }));
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.checkValidity()){form.reportValidity();status.dataset.state='error';status.textContent='Confira os campos obrigatórios para continuar.';return;}
    const recipient=form.dataset.recipient;
    if(!recipient){status.dataset.state='ready';status.textContent='Seu pedido está pronto. Assim que os canais oficiais forem confirmados, o envio será conectado ao atendimento do Grupo Nogueira.';return;}
    const data=new FormData(form);const subject='Pedido de cotação — Grupo Nogueira';const body=['Nome: '+data.get('name'),'Telefone: '+data.get('phone'),'E-mail: '+data.get('email'),'Frente: '+data.get('solution'),'Mensagem: '+(data.get('message')||'-')].join('\\n');
    window.location.href='mailto:'+encodeURIComponent(recipient)+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
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
  .replace('<nav class="main-nav" id="mainNav"><a href="#inicio">Início</a><a href="#beneficios">Clube de benefícios</a><a href="#como-funciona">Como funciona</a></nav>', '<nav class="main-nav" id="mainNav"><a href="#inicio">Início</a><a href="#solucoes">Soluções</a><a href="#beneficios">Clube de benefícios</a><a href="#como-funciona">Como funciona</a></nav>')
  .replace('oferecemos soluções em proteção veicular e benefícios que fazem a diferença no seu dia a dia.', 'reunimos soluções de seguro, assistência e benefícios para cuidar da sua mobilidade, patrimônio, vida e próximos projetos.')
  .replace('Proteção Veicular', 'Soluções em seguros')
  .replace('Proteção que <span class="accent">vai além do seu veículo.</span>', 'Seguros que <span class="accent">vão além do seu veículo.</span>')
  .replace('Escolha sua proteção', 'Escolha seu seguro')
  .replace('Vamos proteger o que move você?', 'Vamos cuidar do que move você?')
  .replace(/<a class="brand"[\s\S]*?<\/a>/, brandMarkup)
  .replace(/<div class="pills" id="tabs">[\s\S]*?<\/div>\s*<div class="carousel">/, '<div class="carousel">')
  .replace(/<span class="club-note">[\s\S]*?<\/span>/, '')
  .replace(/<div class="club-note">[\s\S]*?<\/div>/, '')
  .replace(/<div class="hero-art reveal" aria-hidden="true">[\s\S]*?<\/svg>\s*<\/div>/, heroMarkup)
  .replace('<section class="club" id="beneficios">', solutionsMarkup + '\n<section class="club" id="beneficios">')
  .replace('<section class="cta-wrap">', quoteMarkup + '\n<section class="cta-wrap">')
  .replace('<footer id="contato">', '<footer id="rodape">')
  .replace('</head>', productionStyles + '\n</head>')
  .replace('</body>', autoplayScript + '\n' + quoteScript + '\n</body>');

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), cleaned, 'utf8');
fs.copyFileSync(path.join(__dirname, 'logo-oficial-web.png'), path.join(__dirname, 'dist', 'logo-oficial-web.png'));

