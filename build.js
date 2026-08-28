const fs = require('fs');
const path = require('path');

const source = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const productionStyles = `
<style id="production-refinements">
/* Clube de benefícios: visual mais editorial, sem filtros e com cards maiores */
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
@media(max-width:1080px){.club-inner{grid-template-columns:1fr;gap:34px}.club-side{max-width:650px}.carousel{margin-left:-4px;margin-right:-4px}}
@media(max-width:620px){.club{padding:72px 0 62px}.club-inner{gap:30px}.bcard{flex-basis:244px;min-height:286px;padding:25px 22px 22px}.blogo{height:108px}.track{gap:16px;padding-inline:2px}}
</style>`;

const autoplayScript = `
<script id="benefits-autoplay">
(() => {
  const track = document.getElementById('track');
  if (!track || track.dataset.autoplayReady === '1') return;
  track.dataset.autoplayReady = '1';

  const originals = [...track.querySelectorAll('.bcard')];
  if (!originals.length) return;

  originals.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  let paused = false;
  let raf = null;
  let last = performance.now();
  const speed = 34;

  const tick = (now) => {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!paused) {
      track.scrollLeft += speed * dt;
      const loopPoint = track.scrollWidth / 2;
      if (track.scrollLeft >= loopPoint) track.scrollLeft -= loopPoint;
    }
    raf = requestAnimationFrame(tick);
  };

  const pause = () => { paused = true; };
  const play = () => { paused = false; last = performance.now(); };

  track.addEventListener('mouseenter', pause);
  track.addEventListener('mouseleave', play);
  track.addEventListener('focusin', pause);
  track.addEventListener('focusout', play);
  track.addEventListener('touchstart', pause, {passive:true});
  track.addEventListener('touchend', () => setTimeout(play, 900), {passive:true});
  document.addEventListener('visibilitychange', () => document.hidden ? pause() : play());

  raf = requestAnimationFrame(tick);
})();
</script>`;

let cleaned = source
  .replace('<span class="eyebrow">Grupo Nogueira Corretora de Seguros</span>', '')
  .replace('<span class="eyebrow">Clube de Benefícios</span>', '')
  .replace('<span class="eyebrow">Como Funciona</span>', '')
  .replace('<span>Desenvolvido com <span class="heart">❤</span> por <strong>i5x</strong></span>', '')
  .replace('Clientes Grupo Nogueira terão acesso a uma rede de parceiros com condições especiais e descontos em diferentes categorias. Um clube de vantagens criado para gerar economia no dia a dia.', 'Tenha acesso a uma rede de parceiros com condições especiais e descontos em diferentes categorias. Um clube de vantagens reais, criado para você economizar no dia a dia.')
  .replace(/<div class="pills" id="tabs">[\s\S]*?<\/div>\s*<div class="carousel">/, '<div class="carousel">')
  .replace(/<span class="club-note">[\s\S]*?<\/span>/, '')
  .replace(/<div class="club-note">[\s\S]*?<\/div>/, '')
  .replace('</head>', productionStyles + '\n</head>')
  .replace('</body>', autoplayScript + '\n</body>');

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), cleaned, 'utf8');
