/* Class Sampler: four thirty second games. DOM based, touch friendly. */
(function () {
  const ICON = {
    bear: '<svg viewBox="0 0 64 64" fill="currentColor"><circle cx="18" cy="18" r="7"/><circle cx="46" cy="18" r="7"/><path d="M32 12c-14 0-22 10-22 22 0 10 8 20 22 20s22-10 22-20c0-12-8-22-22-22z"/><circle cx="25" cy="30" r="2.5" fill="#2a120c"/><circle cx="39" cy="30" r="2.5" fill="#2a120c"/><ellipse cx="32" cy="40" rx="6" ry="4" fill="#2a120c"/></svg>',
    cat: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M12 12l10 10h20l10-10v16c0 14-9 24-20 24S12 42 12 28z"/><path d="M8 52c8-2 16 4 24 4s16-6 24-4" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M24 30l4 4M40 30l-4 4" stroke="#2a120c" stroke-width="3" stroke-linecap="round"/><path d="M29 40h6l-3 3z" fill="#2a120c"/></svg>',
    cheetah: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M4 40q6-14 20-14h22l12-6-6 12v10q0 8-8 8H30l-6 6-2-6H12z"/><circle cx="26" cy="34" r="2" fill="#2a120c"/><circle cx="36" cy="30" r="2" fill="#2a120c"/><circle cx="44" cy="36" r="2" fill="#2a120c"/><circle cx="30" cy="42" r="2" fill="#2a120c"/><path d="M18 50l-6 10M28 50l0 10M44 50l6 10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
    seal: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M6 44q4-18 22-18 12 0 18 6l12-8-4 14 4 14-12-8q-8 6-20 6H6z"/><circle cx="20" cy="36" r="2.5" fill="#2a120c"/><path d="M12 42q4 3 8 0" fill="none" stroke="#2a120c" stroke-width="2"/></svg>',
    moonkin: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M20 8l4 10M44 8l-4 10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M14 22q18-10 36 0v18q0 18-18 20-18-2-18-20z"/><circle cx="25" cy="32" r="6" fill="#f4e7c5"/><circle cx="39" cy="32" r="6" fill="#f4e7c5"/><circle cx="25" cy="32" r="2.5" fill="#2a120c"/><circle cx="39" cy="32" r="2.5" fill="#2a120c"/><path d="M32 38l-3 5h6z" fill="#2a120c"/><path d="M8 40l6 10M56 40l-6 10" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>',
    tauren: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M8 20q6-12 16 0M56 20q-6-12-16 0" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M20 20h24v14q0 12-12 14-12-2-12-14z"/><circle cx="27" cy="30" r="2.5" fill="#2a120c"/><circle cx="37" cy="30" r="2.5" fill="#2a120c"/><path d="M26 42h12" stroke="#2a120c" stroke-width="2"/><path d="M14 60q4-14 18-14t18 14z"/></svg>',
    heal: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M8 20q6-12 16 0M56 20q-6-12-16 0" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M20 20h24v14q0 12-12 14-12-2-12-14z"/><circle cx="27" cy="30" r="2.5" fill="#2a120c"/><circle cx="37" cy="30" r="2.5" fill="#2a120c"/><path d="M26 42h12" stroke="#2a120c" stroke-width="2"/><path d="M14 60q4-14 18-14t18 14z"/><path d="M50 44v12M44 50h12" stroke="#5df27a" stroke-width="4" stroke-linecap="round"/></svg>',
    wolf: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M14 10l10 12h16l10-12v18c0 12-8 20-18 20S14 40 14 28z"/><path d="M22 32l3 3M42 32l-3 3" stroke="#2a120c" stroke-width="3" stroke-linecap="round"/><path d="M28 44l4 6 4-6z" fill="#2a120c"/><path d="M8 58l8-8h32l8 8" fill="none" stroke="currentColor" stroke-width="4"/></svg>',
    boar: '<svg viewBox="0 0 64 64" fill="currentColor"><ellipse cx="36" cy="36" rx="22" ry="14"/><circle cx="14" cy="32" r="10"/><path d="M6 28l-4-3M6 36l-4 2" stroke="#f4e7c5" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="30" r="1.5" fill="#ff4040"/><path d="M26 48v10M34 48v10M44 48v10M52 48v10" stroke="currentColor" stroke-width="4"/></svg>',
    raptor: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M6 26q10-10 22-6l12 4 16-8-8 14 6 10-14-2-10 8-10-4-10 10 2-14z"/><circle cx="46" cy="22" r="2" fill="#2a120c"/><path d="M50 26l6 2-6 2z" fill="#2a120c"/><path d="M24 46l-4 12M32 44l2 12" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
    spider: '<svg viewBox="0 0 64 64" fill="currentColor"><circle cx="32" cy="36" r="12"/><circle cx="32" cy="20" r="7"/><path d="M22 30L6 18M22 36H4M22 42L6 54M42 30l16-12M42 36h18M42 42l16 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="29" cy="19" r="1.5" fill="#ff4040"/><circle cx="35" cy="19" r="1.5" fill="#ff4040"/></svg>',
    turtle: '<svg viewBox="0 0 64 64" fill="currentColor"><ellipse cx="32" cy="34" rx="20" ry="13"/><circle cx="54" cy="30" r="6"/><path d="M14 44l-6 8M22 46l-2 10M42 46l2 10M50 44l6 8" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M22 30h20M26 38h12" stroke="#2a120c" stroke-width="2"/></svg>',
    owl: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M16 14l8 6h16l8-6v26q0 16-16 18-16-2-16-18z"/><circle cx="25" cy="30" r="6" fill="#f4e7c5"/><circle cx="39" cy="30" r="6" fill="#f4e7c5"/><circle cx="25" cy="30" r="2.5" fill="#2a120c"/><circle cx="39" cy="30" r="2.5" fill="#2a120c"/><path d="M32 36l-3 5h6z" fill="#2a120c"/></svg>',
    fox: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M10 10l12 12h20l12-12v14q0 16-14 22l-8 2-8-2q-14-6-14-22z"/><path d="M26 30l2 2M38 30l-2 2" stroke="#2a120c" stroke-width="3" stroke-linecap="round"/><path d="M30 40h4l-2 3z" fill="#2a120c"/><path d="M44 46q14 2 12 14-10-2-12-14z"/></svg>',
    horse: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M8 48q0-22 16-22h14l8-14 6 6-2 10v14q0 6-6 6H8z"/><path d="M38 12q6-6 10 0" stroke="currentColor" stroke-width="3" fill="none"/><circle cx="46" cy="22" r="1.8" fill="#2a120c"/><path d="M14 48v12M22 48v12M34 48v12M44 48v12" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M24 26q-6 2-10 10" stroke="#2a120c" stroke-width="2" fill="none"/></svg>',
    boulder: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M10 48q-6-16 8-26t30-4q12 8 8 24-6 12-22 12-18 0-24-6z"/><path d="M22 28l10 6 12-8" fill="none" stroke="#2a120c" stroke-width="2"/></svg>',
    chasm: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M0 20h22l6 12 8-6 6 14h22v24H0z"/><path d="M26 32l-6 10M38 40l6 8" stroke="#2a120c" stroke-width="2"/></svg>',
    road: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M24 60L30 4h4l6 56z"/><path d="M32 10v6M32 22v8M32 36v10M32 52v6" stroke="#2a120c" stroke-width="2" stroke-dasharray="4 4"/></svg>',
    skull: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M32 6C18 6 10 16 10 28q0 10 8 14v10h28V42q8-4 8-14 0-12-22-22z"/><circle cx="24" cy="30" r="5" fill="#2a120c"/><circle cx="40" cy="30" r="5" fill="#2a120c"/><path d="M28 42h8l-4 6z" fill="#2a120c"/><path d="M24 52v6M32 52v6M40 52v6" stroke="#2a120c" stroke-width="3"/></svg>',
    fire: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M20 60q-12-14 0-30 2 10 10 12-4-16 10-30 0 14 10 20 4-6 4-14 14 16 2 36-6 10-18 10t-18-4z"/><path d="M28 58q-6-8 2-16 2 6 6 6 0-8 6-12 0 10 6 12 2 6-4 10-8 4-16 0z" fill="#2a120c" opacity=".35"/></svg>',
    phil: '<svg viewBox="0 0 64 64"><circle cx="32" cy="24" r="14" fill="#e8b89a" stroke="#8a6248" stroke-width="1.5"/><path d="M18 20q14-12 28 0q-2-9-14-10q-12 1-14 10z" fill="#3a2a20"/><path d="M22 30q10 12 20 0q-2 8-10 9q-8-1-10-9z" fill="#4a3528"/><path d="M25 24h5M34 24h5" stroke="#2a1a10" stroke-width="2" stroke-linecap="round"/><path d="M28 33h8" stroke="#5a3a2a" stroke-width="1.6"/><path d="M22 40h20l3 20H19z" fill="#6b2a2a" stroke="#3a1414"/></svg>'
  };
  window.Icons = ICON;

  const DURATION = 30;
  const NAMES = ['Jack', 'Justin', 'Phil'];
  const PHIL_BARKS = ['Phil: "it\'s a lighting effect"', 'Phil: "heals?"', 'Phil: "baka"', 'Phil: "LAUTER"', 'Phil: "I\'m fine"'];

  function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function floatText(parent, x, y, text, color) {
    const f = el(`<span class="float" style="left:${x}px;top:${y}px;color:${color}">${text}</span>`);
    parent.appendChild(f); setTimeout(() => f.remove(), 900);
  }

  /* Shared frame: HUD, timer, message line, loop */
  function frame(gameEl, title, onTick, onEnd) {
    const hud = el(`<div class="game-hud"><span>${title}</span><span class="timer">30.0s</span><button type="button">Quit</button></div>`);
    const msg = el('<p class="game-msg" aria-live="polite"></p>');
    gameEl.prepend(msg); gameEl.prepend(hud);
    const timerEl = hud.querySelector('.timer');
    let left = DURATION, last = null, raf = 0, alive = true, lastTick = 30, msgTimer = 0;
    function stop() { alive = false; cancelAnimationFrame(raf); clearTimeout(msgTimer); }
    function say(text) { msg.textContent = text; clearTimeout(msgTimer); msgTimer = setTimeout(() => { msg.textContent = ''; }, 2600); }
    function loop(ts) {
      if (!alive) return;
      if (last == null) last = ts;
      const dt = Math.min(0.05, (ts - last) / 1000); last = ts;
      left -= dt;
      if (left <= 0) { left = 0; timerEl.textContent = '0.0s'; stop(); onEnd(); return; }
      timerEl.textContent = left.toFixed(1) + 's';
      if (left < 5 && Math.floor(left) !== lastTick) { lastTick = Math.floor(left); SFX.tick(); }
      if (onTick(dt, DURATION - left) === false) { stop(); onEnd(); return; }
      raf = requestAnimationFrame(loop);
    }
    hud.querySelector('button').addEventListener('click', () => { SFX.click(); stop(); onEnd(true); });
    raf = requestAnimationFrame(loop);
    return { stop, say };
  }

  /* Healing games: Priest and Shaman share the arena. Damage persists until healed. */
  function healGame(cls, gameEl, done) {
    const isPriest = cls === 'priest';
    const hp = [100, 100, 100];
    const drain = [5.5, 6.5, 12.5];
    const dead = [false, false, false];
    let healing = 0, deaths = 0, gcd = 0, bigCd = 0, totem = 0, spike = 3, deathOrder = [], abandoned = false, philBonus = 0, philHeals = 0;
    const arena = el('<div class="arena arena-heal"></div>');
    const targets = NAMES.map((n, i) => {
      const t = el(`<div class="heal-target ${i === 2 ? 'infire' : ''}" role="button" tabindex="0" aria-label="Heal ${n}"><span class="rname">${n}</span><div class="hp"><div class="hpfill"></div></div></div>`);
      if (i === 2) t.appendChild(el('<button type="button" class="letgo" aria-pressed="false">Let him go</button>'));
      arena.appendChild(t); return t;
    });
    const spells = el(`<div class="spell-row">
      <button type="button" class="spell" data-s="big">${isPriest ? 'Prayer of Healing' : 'Healing Stream Totem'}<span class="cd"></span></button>
    </div>`);
    gameEl.appendChild(arena);
    arena.appendChild(spells);
    const bigBtn = spells.querySelector('[data-s="big"]');
    const bigCdBar = bigBtn.querySelector('.cd');
    const BIG_CD = isPriest ? 8 : 14;
    let f;

    function heal(i, amt, label, color) {
      if (dead[i]) return;
      if (i === 2 && abandoned) return;
      const before = hp[i]; hp[i] = Math.min(100, hp[i] + amt); healing += hp[i] - before;
      if (i === 2) philHeals++;
      const r = targets[i].getBoundingClientRect(), a = arena.getBoundingClientRect();
      floatText(arena, r.left - a.left + 80 + Math.random() * 60, r.top - a.top, label, color || '#5df27a');
      targets[i].classList.add('flash'); setTimeout(() => targets[i].classList.remove('flash'), 150);
    }
    function castSingle(i) {
      if (gcd > 0 || dead[i]) return;
      if (i === 2 && abandoned) { const r = targets[2].getBoundingClientRect(), a = arena.getBoundingClientRect(); floatText(arena, r.left - a.left + 80, r.top - a.top, 'You chose this', '#ffb21a'); return; }
      gcd = isPriest ? 0.55 : 0.9;
      if (isPriest) { heal(i, 34, '+34 Flash Heal'); SFX.heal(); }
      else {
        heal(i, 40, '+40 Chain Heal'); SFX.heal();
        [i - 1, i + 1].forEach(j => { if (j >= 0 && j < 3) heal(j, 20, '+20', '#9fe8ff'); });
      }
    }
    targets.forEach((t, i) => {
      t.addEventListener('pointerdown', e => { if (e.target.closest('.letgo')) return; e.preventDefault(); castSingle(i); });
      t.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.letgo')) { e.preventDefault(); castSingle(i); } });
    });
    const letgo = arena.querySelector('.letgo');
    letgo.addEventListener('click', e => {
      e.stopPropagation(); if (dead[2]) return;
      abandoned = !abandoned;
      letgo.classList.toggle('on', abandoned); letgo.setAttribute('aria-pressed', abandoned ? 'true' : 'false');
      letgo.textContent = abandoned ? 'Letting him go' : 'Let him go';
      targets[2].classList.toggle('abandoned', abandoned);
      SFX.click();
      f.say(abandoned ? 'Phil is on his own. The Coalition understands.' : 'Fine. Heal him. He will not learn.');
    });
    bigBtn.addEventListener('click', () => {
      if (bigCd > 0) return;
      bigCd = BIG_CD; bigBtn.disabled = true; SFX.bigHeal();
      if (isPriest) NAMES.forEach((_, i) => heal(i, 28, '+28', '#ffd166'));
      else { totem = 8; f.say('Healing Stream Totem is down. Phil will stand on it and still not be healed enough.'); }
    });

    f = frame(gameEl, isPriest ? 'Priest: keep them up' : 'Shaman: keep them up', (dt, t) => {
      gcd = Math.max(0, gcd - dt);
      if (bigCd > 0) { bigCd -= dt; bigCdBar.style.width = (100 - bigCd / BIG_CD * 100) + '%'; if (bigCd <= 0) { bigBtn.disabled = false; bigCdBar.style.width = '0'; } }
      if (totem > 0) { totem -= dt; NAMES.forEach((_, i) => { if (!dead[i] && !(i === 2 && abandoned)) { const b = hp[i]; hp[i] = Math.min(100, hp[i] + 7 * dt); healing += hp[i] - b; } }); }
      spike -= dt;
      if (spike <= 0) {
        spike = 2.5 + Math.random() * 3;
        const i = Math.random() < 0.45 ? 2 : Math.floor(Math.random() * 2);
        if (!dead[i]) {
          const dmg = Math.round(18 + Math.random() * 14);
          hp[i] = Math.max(0, hp[i] - dmg); SFX.hit();
          const r = targets[i].getBoundingClientRect(), a = arena.getBoundingClientRect();
          floatText(arena, r.left - a.left + 80, r.top - a.top, '-' + dmg, '#ff6b6b');
          if (i === 2 && Math.random() < 0.6) f.say(PHIL_BARKS[Math.floor(Math.random() * PHIL_BARKS.length)]);
        }
      }
      const ramp = 1 + t / 30;
      for (let i = 0; i < 3; i++) {
        if (dead[i]) continue;
        hp[i] -= drain[i] * ramp * dt;
        if (hp[i] <= 0) {
          hp[i] = 0; dead[i] = true; deaths++; deathOrder.push(NAMES[i]); targets[i].classList.add('dead'); SFX.death();
          if (i === 2) {
            letgo.disabled = true;
            if (abandoned) { philBonus = 500; const r = targets[2].getBoundingClientRect(), a = arena.getBoundingClientRect(); floatText(arena, r.left - a.left + 80, r.top - a.top, '+500 Phil bonus', '#ffd166'); SFX.accept(); f.say('Phil is down. Bonus awarded. Nobody is sad.'); }
            else f.say('Phil is down. It was the fire. It is always the fire.');
          }
        }
        targets[i].querySelector('.hpfill').style.width = hp[i] + '%';
      }
      if (deaths === 3) return false;
    }, quit => done({ cls, quit, deaths, healing: Math.round(healing), deathOrder, survived: 3 - deaths, abandoned, philBonus, philHeals }));
    return f;
  }

  /* Hunter: tap the animals. Not Phil. Not the horse. */
  function hunterGame(gameEl, done) {
    const SPECIES = ['wolf', 'bear', 'cat', 'boar', 'raptor', 'spider', 'turtle', 'owl', 'fox'];
    const arena = el('<div class="arena arena-hunt"><div class="hunt-bag">Tamed: 0</div></div>');
    gameEl.appendChild(arena);
    const bag = arena.querySelector('.hunt-bag');
    const critters = []; let tamed = 0, philTaps = 0, horseTaps = 0, spawn = 0.4; const unique = new Set();
    let f;
    function spawnOne(t) {
      const roll = Math.random();
      const kind = roll < 0.16 ? 'phil' : roll < 0.26 ? 'horse' : SPECIES[Math.floor(Math.random() * SPECIES.length)];
      const dir = Math.random() < 0.5 ? 1 : -1;
      const W = arena.clientWidth, y = 20 + Math.random() * (arena.clientHeight - 100);
      const c = el(`<div class="critter ${kind === 'phil' || kind === 'horse' ? kind : ''}" style="top:${y}px;transform:translateX(${dir === 1 ? -70 : W}px) scaleX(${dir})">${ICON[kind]}</div>`);
      const speed = (90 + Math.random() * 70 + t * 4) * dir;
      const o = { el: c, x: dir === 1 ? -70 : W, y, speed, dir, kind, live: true };
      c.addEventListener('pointerdown', e => {
        e.preventDefault(); if (!o.live) return; o.live = false; c.classList.add('tamed');
        if (kind === 'phil') { philTaps++; tamed = Math.max(0, tamed - 1); SFX.wrong(); floatText(arena, o.x, o.y - 10, 'That is Phil', '#ff6b6b'); }
        else if (kind === 'horse') { horseTaps++; SFX.wrong(); floatText(arena, o.x, o.y - 10, 'Horses say no', '#ffb21a'); f.say('Horses cannot be tamed. The horse knows this.'); }
        else { tamed++; unique.add(kind); SFX.tame(); floatText(arena, o.x, o.y - 10, kind === 'fox' ? 'Tamed. Foxes are new.' : 'Tamed', '#5df27a'); }
        bag.textContent = 'Tamed: ' + tamed;
        setTimeout(() => c.remove(), 450);
      });
      arena.appendChild(c); critters.push(o);
    }
    f = frame(gameEl, 'Hunter: tame the zoo', (dt, t) => {
      spawn -= dt;
      if (spawn <= 0) { spawn = Math.max(0.35, 1.1 - t * 0.02); spawnOne(t); }
      const W = arena.clientWidth;
      for (const o of critters) {
        if (!o.live) continue;
        o.x += o.speed * dt;
        o.el.style.transform = `translateX(${o.x}px) scaleX(${o.dir})`;
        if (o.x > W + 70 || o.x < -140) { o.live = false; o.el.remove(); }
      }
    }, quit => done({ cls: 'hunter', quit, tamed, philTaps, horseTaps, unique: unique.size }));
    return f;
  }

  /* Druid: shift to match the obstacle, drop form to heal the boys */
  function druidGame(gameEl, done) {
    const FORMS = [
      { k: 'bear', label: 'Bear' }, { k: 'cat', label: 'Cat' }, { k: 'cheetah', label: 'Travel' }, { k: 'heal', label: 'Heal' }
    ];
    const OBS = [
      { k: 'boulder', need: 'bear', label: 'Boulder' }, { k: 'chasm', need: 'cat', label: 'Chasm' },
      { k: 'road', need: 'cheetah', label: 'Long road' }, { k: 'skull', need: 'heal', label: 'Boys dying' },
      { k: 'fire', need: 'heal', label: 'Phil in fire' }
    ];
    const arena = el(`<div class="arena arena-druid"><div class="lives">Lives: 3</div><div class="lane"></div><div class="druid-hero">${ICON.tauren}</div></div>`);
    const row = el('<div class="form-row"></div>');
    FORMS.forEach(fm => row.appendChild(el(`<button type="button" class="form-btn" data-f="${fm.k}">${ICON[fm.k]}${fm.label}</button>`)));
    gameEl.appendChild(arena); arena.appendChild(row);
    const lane = arena.querySelector('.lane'), hero = arena.querySelector('.druid-hero'), livesEl = arena.querySelector('.lives');
    let form = null, lives = 3, score = 0, streak = 0, best = 0, spawn = 0.6, philSaves = 0; const obs = [];
    let f;
    function setForm(k) {
      if (form === k) return; form = k; SFX.shift();
      row.querySelectorAll('.form-btn').forEach(b => b.classList.toggle('active', b.dataset.f === k));
      hero.innerHTML = ICON[k];
    }
    row.querySelectorAll('.form-btn').forEach(b => b.addEventListener('pointerdown', e => { e.preventDefault(); setForm(b.dataset.f); }));
    f = frame(gameEl, 'Druid: shift to match', (dt, t) => {
      spawn -= dt;
      if (spawn <= 0) {
        spawn = Math.max(1.0, 2.2 - t * 0.04);
        const o = OBS[Math.floor(Math.random() * OBS.length)];
        const W = arena.clientWidth;
        const e = el(`<div class="obstacle" style="transform:translateX(${W}px)"><div>${ICON[o.k]}<div>${o.label}</div></div></div>`);
        lane.appendChild(e); obs.push({ el: e, x: W, o, live: true, speed: 110 + t * 3 });
      }
      for (const ob of obs) {
        if (!ob.live) continue;
        ob.x -= ob.speed * dt; ob.el.style.transform = `translateX(${ob.x}px)`;
        if (ob.x <= 70) {
          ob.live = false;
          if (form === ob.o.need) {
            score++; streak++; best = Math.max(best, streak); ob.el.classList.add('ok'); SFX.heal();
            if (ob.o.k === 'fire') { philSaves++; floatText(arena, 90, 60, 'Healed Phil. Again.', '#5df27a'); f.say(['Phil thanks you. Phil is still in the fire.', 'Phil: "I was fine."', 'Rejuvenation on Phil. A waste, but a kind one.'][philSaves % 3]); }
            else floatText(arena, 90, 60, ob.o.need === 'heal' ? 'Healed' : 'Nice', '#5df27a');
          }
          else {
            lives--; streak = 0; ob.el.classList.add('bad'); SFX.hit(); livesEl.textContent = 'Lives: ' + lives;
            floatText(arena, 90, 60, ob.o.k === 'fire' ? 'Phil went down' : 'Ouch', '#ff6b6b');
            if (ob.o.k === 'fire') f.say('Phil went down. Honestly, that one is on him.');
          }
          setTimeout(() => ob.el.remove(), 400);
          if (lives <= 0) return false;
        }
      }
    }, quit => done({ cls: 'druid', quit, score, best, lives, philSaves }));
    return f;
  }

  function verdict(r) {
    if (r.quit) return { title: 'Quit mid pull', big: 'Relatable', lines: ['Jack does this every Tuesday.'] };
    switch (r.cls) {
      case 'priest':
      case 'shaman': {
        const l = [];
        if (r.deaths === 0) l.push('Three men alive at the end. This has never happened to us. We checked the logs.');
        else if (r.deaths === 1 && r.deathOrder[0] === 'Phil') l.push('Jack and Justin alive, Phil down. That is the correct outcome.');
        else if (r.deaths === 1) l.push('One death. Statistically a miracle for this group.');
        else if (r.deaths === 2) l.push('Two down. Still our best run this year.');
        else l.push('Full wipe. Welcome to our Tuesday. The difference is you tried.');
        if (r.abandoned && r.philBonus) l.push('You let Phil go. Bonus 500. The Coalition approves, and the Coalition is two thirds of Phil\'s friends.');
        else if (r.abandoned) l.push('You said you\'d let Phil go and he still outlived the timer. The fire is slipping.');
        else if (!r.deathOrder.includes('Phil')) l.push('Phil survived. We have never seen this. Screenshot it.');
        else if (r.deathOrder[0] === 'Phil') l.push('Phil died first. Nobody blames you. Everybody blames Phil.');
        if (!r.abandoned && r.philHeals >= 10) l.push(`${r.philHeals} heals on Phil. Saint. Absolute saint.`);
        if (r.cls === 'shaman') l.push('Chain Heal bouncing onto Phil is the closest he has come to being loved.');
        const total = r.healing + (r.philBonus || 0);
        return { title: r.cls === 'priest' ? 'Priest trial complete' : 'Shaman trial complete', big: total.toLocaleString() + (r.philBonus ? ' pts' : ' healing'), lines: l };
      }
      case 'hunter': {
        const l = [];
        if (r.tamed >= 20) l.push('That is a ranch. A whole ranch. You brought Tennessee with you.');
        else if (r.tamed >= 10) l.push('A respectable barn. The boars have accepted you as one of their own.');
        else l.push('A modest start. Every zoo begins with one confused turtle.');
        if (r.unique === 9) l.push('Every species, including the new fox. Blizzard will want a word.');
        if (r.horseTaps > 0) l.push(`You tried to tame the horse ${r.horseTaps === 1 ? 'once' : r.horseTaps + ' times'}. Respect. Still no.`);
        if (r.philTaps > 0) l.push(`You tried to tame Phil ${r.philTaps === 1 ? 'once' : r.philTaps + ' times'}. He cannot be tamed. Many have tried.`);
        else l.push('You never once tapped Phil. Flawless judgment, as expected.');
        return { title: 'Hunter trial complete', big: r.tamed + ' tamed', lines: l };
      }
      case 'druid': {
        const l = [];
        if (r.lives <= 0) l.push('Out of lives, but so are the boys, every single night, so you fit right in.');
        else if (r.score >= 14) l.push('Bear, cat, travel, heal, never a wrong shape. The Barrens are yours.');
        else if (r.score >= 7) l.push('Solid shifting. The boulder did not stand a chance, and neither did Phil.');
        else l.push('Shapeshifting takes a minute. Phil has been trying to shift out of the fire for years.');
        if (r.philSaves >= 3) l.push(`You pulled Phil out of the fire ${r.philSaves} times. He went straight back in each time.`);
        if (r.best >= 5) l.push(`Best streak: ${r.best}. The men managed a streak of one, once.`);
        return { title: 'Druid trial complete', big: r.score + ' shifts', lines: l };
      }
    }
  }

  window.Games = {
    start(cls, gameEl, done) {
      if (cls === 'priest' || cls === 'shaman') return healGame(cls, gameEl, done);
      if (cls === 'hunter') return hunterGame(gameEl, done);
      return druidGame(gameEl, done);
    },
    verdict
  };
})();
