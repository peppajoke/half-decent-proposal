/* Deck controller: navigation, XP bar, Phil dock, per slide effects. */
(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const total = slides.length;
  const xpfill = document.getElementById('xpfill');
  const xplevel = document.getElementById('xplevel');
  const xptext = document.getElementById('xptext');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const philart = document.getElementById('philart');
  const clealine = document.getElementById('clealine');
  const muteBtn = document.getElementById('mute');
  let cur = -1, busy = false;
  const hooks = {};

  function setMuteUI() {
    muteBtn.setAttribute('aria-pressed', SFX.muted ? 'true' : 'false');
    muteBtn.setAttribute('aria-label', SFX.muted ? 'Unmute sound' : 'Mute sound');
    muteBtn.title = SFX.muted ? 'Sound off' : 'Sound on';
  }
  muteBtn.addEventListener('click', () => { SFX.toggle(); setMuteUI(); if (!SFX.muted) SFX.click(); });
  setMuteUI();

  function go(i, silent) {
    i = Math.max(0, Math.min(total - 1, i));
    if (i === cur || busy) return;
    busy = true;
    const old = cur, s = slides[i];
    if (old >= 0) {
      const o = slides[old];
      o.classList.remove('active'); o.classList.add('leaving');
      setTimeout(() => o.classList.remove('leaving'), 320);
      if (hooks[old] && hooks[old].leave) hooks[old].leave();
    }
    cur = i;
    s.classList.add('active');
    s.querySelector('.page').scrollTop = 0;
    if (!silent) SFX.page();
    xpfill.style.width = ((i + 1) / total * 100) + '%';
    xplevel.textContent = 'Level ' + (i + 1);
    xptext.textContent = 'Page ' + (i + 1) + ' of ' + total;
    prevBtn.disabled = i === 0; nextBtn.disabled = i === total - 1;
    philart.innerHTML = Phil.render(s.dataset.phil);
    clealine.textContent = s.dataset.clea;
    clealine.style.animation = 'none'; void clealine.offsetWidth; clealine.style.animation = '';
    history.replaceState(null, '', '#' + (i + 1));
    if (hooks[i] && hooks[i].enter) hooks[i].enter();
    setTimeout(() => { busy = false; }, 350);
  }

  prevBtn.addEventListener('click', () => { SFX.unlock(); go(cur - 1); });
  nextBtn.addEventListener('click', () => { SFX.unlock(); go(cur + 1); });
  document.addEventListener('keydown', e => {
    if (e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || (e.key === ' ' && !e.target.matches('button'))) { e.preventDefault(); SFX.unlock(); go(cur + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); SFX.unlock(); go(cur - 1); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(total - 1);
  });
  let tx = 0, ty = 0, swiping = false;
  const pages = document.getElementById('pages');
  pages.addEventListener('touchstart', e => {
    if (e.target.closest('.arena, .class-btn, button')) { swiping = false; return; }
    tx = e.touches[0].clientX; ty = e.touches[0].clientY; swiping = true;
  }, { passive: true });
  pages.addEventListener('touchend', e => {
    if (!swiping) return; swiping = false;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) { SFX.unlock(); go(cur + (dx < 0 ? 1 : -1)); }
  }, { passive: true });
  document.addEventListener('pointerdown', () => SFX.unlock(), { once: true });

  /* Slide 2: the raid wipe */
  (function () {
    const wipe = document.getElementById('wipe');
    const raiders = Array.from(wipe.querySelectorAll('.raider'));
    const countEl = document.getElementById('deathcount');
    const base = Math.floor((Date.now() - Date.UTC(2026, 5, 1)) / 600000) + 1337;
    let count = base, timer = 0, raf = 0, running = false;
    countEl.textContent = count.toLocaleString();
    const rates = [9, 11, 24];
    function run() {
      let hp = [100, 100, 100], dead = [false, false, false], last = null, hold = 0;
      raiders.forEach(r => { r.querySelector('.status').textContent = ''; r.querySelector('.hpfill').style.width = '100%'; });
      wipe.classList.remove('dead');
      function step(ts) {
        if (!running) return;
        if (last == null) last = ts; const dt = Math.min(0.05, (ts - last) / 1000); last = ts;
        if (hold > 0) { hold -= dt; if (hold <= 0) { run(); return; } raf = requestAnimationFrame(step); return; }
        let allDead = true;
        for (let i = 0; i < 3; i++) {
          if (dead[i]) continue; allDead = false;
          hp[i] -= rates[i] * dt * (0.7 + Math.random() * 0.8);
          if (hp[i] <= 0) { hp[i] = 0; dead[i] = true; raiders[i].querySelector('.status').textContent = ['Dead (pulled)', 'Dead (spreadsheet)', 'Dead (fire)'][i]; SFX.death(); count++; countEl.textContent = count.toLocaleString(); }
          raiders[i].querySelector('.hpfill').style.width = hp[i] + '%';
        }
        if (allDead) { wipe.classList.add('dead'); hold = 1.8; }
        raf = requestAnimationFrame(step);
      }
      raf = requestAnimationFrame(step);
    }
    hooks[1] = {
      enter() { running = true; run(); timer = setInterval(() => { count++; countEl.textContent = count.toLocaleString(); }, 1400); },
      leave() { running = false; cancelAnimationFrame(raf); clearInterval(timer); }
    };
  })();

  /* Slide 6: shapeshift cycle and the zoo */
  (function () {
    const ss = document.getElementById('shapeshift');
    const forms = [['tauren', 'Tauren'], ['bear', 'Bear'], ['cat', 'Cat'], ['stag', 'Stag'], ['tree', 'Tree'], ['tauren', 'Tauren, healing']];
    ss.innerHTML = forms.map(([k, l], i) => `<div class="form ${i === 0 ? 'on' : ''}" data-i="${i}">${Icons[k]}</div>`).join('') + '<span class="form-label">Tauren</span>';
    const label = ss.querySelector('.form-label');
    const nodes = ss.querySelectorAll('.form');
    let idx = 0, t = 0;
    hooks[5] = {
      enter() { t = setInterval(() => { nodes[idx].classList.remove('on'); idx = (idx + 1) % forms.length; nodes[idx].classList.add('on'); label.textContent = forms[idx][1]; }, 1300); },
      leave() { clearInterval(t); }
    };
    const zoo = document.getElementById('zoo');
    const pets = [['wolf', 'Wolf'], ['bear', 'Bear'], ['cat', 'Cat'], ['boar', 'Boar'], ['raptor', 'Raptor'], ['spider', 'Gentle'], ['turtle', 'Turtle'], ['owl', 'Owl']];
    zoo.innerHTML = pets.map(([k, n]) => `<div class="pet" title="${n}">${Icons[k]}<span>${n}</span></div>`).join('');
  })();

  /* Slide 7: the sampler */
  (function () {
    const pick = document.getElementById('classpick'), gameEl = document.getElementById('game'), scoreEl = document.getElementById('score');
    let running = null;
    function showPick() { document.body.classList.remove('gaming'); pick.hidden = false; gameEl.hidden = true; scoreEl.hidden = true; gameEl.innerHTML = ''; }
    function start(cls) {
      SFX.click(); document.body.classList.add('gaming'); pick.hidden = true; scoreEl.hidden = true; gameEl.hidden = false; gameEl.innerHTML = '';
      running = Games.start(cls, gameEl, result => {
        running = null; document.body.classList.remove('gaming');
        const v = Games.verdict(result);
        gameEl.hidden = true; scoreEl.hidden = false;
        scoreEl.innerHTML = `<h3>${v.title}</h3><div class="big">${v.big}</div>${v.lines.map(l => `<p>${l}</p>`).join('')}
          <div class="row"><button type="button" class="btn" data-again="${cls}">Play again</button><button type="button" class="btn alt" data-pick="1">Try another class</button></div>`;
        if (!result.quit) SFX.accept();
        scoreEl.querySelector('[data-again]').addEventListener('click', () => start(cls));
        scoreEl.querySelector('[data-pick]').addEventListener('click', () => { SFX.click(); showPick(); });
      });
    }
    pick.querySelectorAll('.class-btn').forEach(b => b.addEventListener('click', () => start(b.dataset.class)));
    hooks[6] = { leave() { if (running) { running.stop(); running = null; } showPick(); } };
  })();

  /* Slide 11: accept quest */
  (function () {
    const btn = document.getElementById('accept'), reveal = document.getElementById('reveal');
    const canvas = document.getElementById('confetti'), ctx = canvas.getContext('2d');
    function confetti() {
      const W = canvas.width = innerWidth, H = canvas.height = innerHeight;
      const colors = ['#f3d680', '#c89b3c', '#9b1c1c', '#e9d8ad', '#ff7a1a', '#8e3fd6'];
      const ps = Array.from({ length: 180 }, () => ({
        x: W / 2 + (Math.random() - 0.5) * 200, y: H * 0.55, vx: (Math.random() - 0.5) * 14, vy: -8 - Math.random() * 12,
        w: 6 + Math.random() * 8, h: 4 + Math.random() * 6, r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3, c: colors[Math.floor(Math.random() * colors.length)]
      }));
      let t0 = null;
      function step(ts) {
        if (!t0) t0 = ts; const age = (ts - t0) / 1000;
        ctx.clearRect(0, 0, W, H);
        for (const p of ps) {
          p.vy += 0.35; p.x += p.vx; p.y += p.vy; p.vx *= 0.99; p.r += p.vr;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.globalAlpha = Math.max(0, 1 - age / 3.2);
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
        }
        if (age < 3.4) requestAnimationFrame(step); else ctx.clearRect(0, 0, W, H);
      }
      requestAnimationFrame(step);
    }
    btn.addEventListener('click', () => {
      if (btn.classList.contains('done')) return;
      SFX.unlock(); SFX.levelup();
      btn.classList.add('done'); btn.textContent = 'Quest Accepted';
      reveal.hidden = false; confetti();
      setTimeout(() => { const pg = btn.closest('.page'); pg.scrollTo({ top: pg.scrollHeight, behavior: 'smooth' }); }, 300);
    });
  })();

  const start = parseInt((location.hash || '#1').slice(1), 10);
  go(isNaN(start) ? 0 : start - 1, true);
})();
