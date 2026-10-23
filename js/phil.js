/* Phil: a man who is always doing something dumb. All art is inline SVG. */
(function () {
  function body(extra, cls) {
    return `
<svg class="phil ${cls || ''}" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" aria-label="Phil, doing something dumb">
  <g class="run">
    <path d="M42 86 L38 112 M58 86 L62 112" stroke="#3a2a20" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M33 113 h12 M57 113 h12" stroke="#1d1410" stroke-width="5" stroke-linecap="round"/>
    <path d="M38 52 h24 l4 36 h-32 z" fill="#6b2a2a" stroke="#3a1414" stroke-width="2"/>
    <path d="M50 52 v36" stroke="#8a3a3a" stroke-width="2"/>
    <g class="arm-l"><path d="M38 56 L24 78" stroke="#6b2a2a" stroke-width="7" stroke-linecap="round" fill="none"/><circle cx="23" cy="80" r="4.5" fill="#e8b89a"/></g>
    <g class="arm-r hand"><path d="M62 56 L76 78" stroke="#6b2a2a" stroke-width="7" stroke-linecap="round" fill="none"/><circle cx="77" cy="80" r="4.5" fill="#e8b89a"/></g>
    <circle cx="50" cy="36" r="16" fill="#e8b89a" stroke="#8a6248" stroke-width="1.5"/>
    <path d="M34 32 q16 -14 32 0 q-2 -10 -16 -12 q-14 2 -16 12 z" fill="#3a2a20"/>
    <path d="M38 42 q12 14 24 0 q-2 10 -12 11 q-10 -1 -12 -11 z" fill="#4a3528" opacity=".9"/>
    <path d="M42 36 h6 M52 36 h6" stroke="#2a1a10" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M41 33 h8 M51 33 h8" stroke="#3a2a20" stroke-width="1.5"/>
    <path d="M45 46 h10" stroke="#5a3a2a" stroke-width="1.8" stroke-linecap="round"/>
  </g>
  ${extra}
</svg>`;
  }

  const flames = `
<g class="fire" transform="translate(0,4)">
  <path class="flame f1" d="M28 118 q4 -18 12 -22 q-2 10 6 14 q2 -8 8 -12 q4 12 -4 20 z" fill="#ff7a1a"/>
  <path class="flame f2" d="M50 118 q2 -16 10 -20 q0 10 8 12 q0 -8 6 -10 q6 12 -6 18 z" fill="#ffb21a"/>
  <path class="flame f3" d="M36 118 q4 -10 8 -12 q0 6 6 8 q4 -6 6 -8 q2 8 -4 12 z" fill="#ffe25a"/>
</g>`;

  const bubble = (text, w) => `
<g transform="translate(60,0)">
  <rect x="0" y="0" width="${w || 54}" height="22" rx="6" fill="#f3d680" stroke="#8a6520"/>
  <path d="M8 22 l-4 8 l10 -8 z" fill="#f3d680" stroke="#8a6520"/>
  <text class="bubble-text" x="${(w || 54) / 2}" y="15" text-anchor="middle" font-family="Cinzel, serif" font-size="9" font-weight="700" fill="#2b1b0e">${text}</text>
</g>`;

  const V = {
    fire: () => body(flames, 'phil-fire'),

    banner: () => body(`
<g class="banner" transform="translate(76,30)">
  <path d="M0 50 V-10" stroke="#8a6520" stroke-width="3"/>
  <g transform="translate(0,-10) rotate(180 0 0) translate(0,-30)">
    <path d="M0 0 h-30 v30 l15 -8 l15 8 z" fill="#9b1c1c" stroke="#5d0f0f"/>
    <path d="M-15 8 v12 M-21 14 h12" stroke="#f3d680" stroke-width="3" stroke-linecap="round"/>
  </g>
</g>`, 'phil-banner'),

    lick: () => body(`
<path class="tongue" d="M46 46 q4 10 8 0 z" fill="#d9646e"/>
<g transform="translate(2,60)">
  <rect x="-2" y="0" width="30" height="36" rx="2" fill="#11101f" stroke="#8a5a20"/>
  <text x="13" y="11" text-anchor="middle" font-family="Verdana" font-size="6" font-weight="700" fill="#ff8000">Lauren</text>
  <path d="M3 17 h20 M3 22 h16 M3 27 h18 M3 32 h12" stroke="#1eff00" stroke-width="1.5"/>
</g>`, 'phil-lick'),

    lift: () => body(`
<g class="cab">
  <rect x="26" y="8" width="48" height="4" fill="#8a6520"/>
  <path d="M28 12 v8 M72 12 v8" stroke="#8a6520" stroke-width="2"/>
</g>
<rect x="20" y="20" width="60" height="100" fill="none" stroke="#8a6520" stroke-width="2" stroke-dasharray="4 3"/>
${bubble('up?', 34)}`, 'phil-lift'),

    boar: () => body(`
<g class="boar" transform="translate(72,86)">
  <ellipse cx="12" cy="18" rx="16" ry="10" fill="#5a3a28"/>
  <circle cx="-4" cy="14" r="7" fill="#5a3a28"/>
  <path d="M-10 12 l-5 -3 M-9 17 l-5 2" stroke="#f4e7c5" stroke-width="2" stroke-linecap="round"/>
  <circle cx="-6" cy="12" r="1.2" fill="#ff4040"/>
  <path d="M2 27 v6 M12 27 v6 M20 27 v6" stroke="#3a2418" stroke-width="3"/>
</g>
<text x="4" y="14" font-family="Cinzel" font-size="8" font-weight="700" fill="#8a6520">Lv 6</text>`, 'phil-boar'),

    horse: () => body(`
<g class="horse" transform="translate(70,70)">
  <path d="M0 30 q0 -22 14 -22 h12 q8 0 8 10 v12" fill="#7a4a2a" stroke="#4a2a14" stroke-width="2"/>
  <path d="M26 8 l6 -14 l6 6 l-2 8" fill="#7a4a2a" stroke="#4a2a14" stroke-width="2"/>
  <path d="M30 -6 q6 -6 10 0" stroke="#3a2a20" stroke-width="3" fill="none"/>
  <path d="M4 30 v14 M12 30 v14 M24 30 v14 M32 30 v14" stroke="#4a2a14" stroke-width="3"/>
  <circle cx="34" cy="-2" r="1.5" fill="#000"/>
</g>
${bubble('mine?', 40)}`, 'phil-horse'),

    dummy: () => body(`
<g class="arrow" transform="translate(44,66)">
  <path d="M-30 0 h40" stroke="#4a2a14" stroke-width="2.5"/>
  <path d="M10 0 l-6 -3 v6 z" fill="#aaa"/>
  <path d="M-30 0 l-6 -4 M-30 0 l-6 4" stroke="#9b1c1c" stroke-width="2"/>
</g>
<circle cx="50" cy="70" r="12" fill="none" stroke="#9b1c1c" stroke-width="2" opacity=".6"/>
<circle cx="50" cy="70" r="5" fill="none" stroke="#9b1c1c" stroke-width="2" opacity=".6"/>`, 'phil-dummy'),

    german: () => body(bubble('LAUTER!', 58), 'phil-german'),

    cow: () => body(`
<g class="horns" transform="translate(50,22)">
  <path d="M-16 0 q-10 -4 -14 -14 q6 2 10 10 M16 0 q10 -4 14 -14 q-6 2 -10 10" fill="#d9c7a0" stroke="#8a6520" stroke-width="2" stroke-linejoin="round"/>
  <path d="M-14 2 h28" stroke="#8a6520" stroke-width="2" stroke-dasharray="3 2"/>
</g>
${bubble('moo?', 36)}`, 'phil-cow'),

    cook: () => body(`
<g transform="translate(84,66)">
  <path d="M-8 14 L10 -14" stroke="#4a2a14" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M6 -22 h10 v8 l6 6 h-14 z" fill="#1d1410" stroke="#000"/>
</g>
<g transform="translate(60,28) scale(.55)">${flames}</g>`, 'phil-cook'),

    rain: () => body(`
<g class="drop" ><path d="M12 10 v6" stroke="#8fb8e8" stroke-width="2" stroke-linecap="round"/></g>
<g class="drop d2"><path d="M30 6 v6" stroke="#8fb8e8" stroke-width="2" stroke-linecap="round"/></g>
<g class="drop d3"><path d="M88 8 v6" stroke="#8fb8e8" stroke-width="2" stroke-linecap="round"/></g>
<g class="drop d4"><path d="M70 4 v6" stroke="#8fb8e8" stroke-width="2" stroke-linecap="round"/></g>
<g class="drop d5"><path d="M50 2 v6" stroke="#8fb8e8" stroke-width="2" stroke-linecap="round"/></g>
<g transform="translate(78,40)">
  <path d="M0 0 v30" stroke="#2b1b0e" stroke-width="2"/>
  <path d="M-16 0 q16 18 32 0 z" fill="#9b1c1c" stroke="#5d0f0f"/>
  <path class="water" d="M-13 2 q13 12 26 0 z" fill="#8fb8e8" opacity=".85"/>
</g>`, 'phil-rain'),

    scroll: () => body(`
<g class="scroll" transform="translate(16,70) rotate(180)">
  <rect x="-14" y="-10" width="28" height="22" fill="#f3d680" stroke="#8a6520"/>
  <path d="M-10 -5 h20 M-10 0 h16 M-10 5 h18" stroke="#2b1b0e" stroke-width="1.5"/>
</g>
${bubble('huh.', 34)}`, 'phil-scroll'),

    button: () => body(`
<g transform="translate(80,74)">
  <rect x="0" y="0" width="18" height="10" rx="3" fill="#9b1c1c" stroke="#c89b3c"/>
  <path d="M-4 -6 l4 -4 M9 -8 v-5 M22 -6 l-4 -4" stroke="#f3d680" stroke-width="1.5" stroke-linecap="round"/>
</g>`, 'phil-button')
  };

  window.Phil = { render(variant) { return (V[variant] || V.fire)(); } };
})();
