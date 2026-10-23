/* Synthesized WebAudio sound effects. No external assets. */
(function () {
  const KEY = 'hdp-muted';
  let ctx = null;
  let muted = localStorage.getItem(KEY) === '1';

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function env(gain, t, a, d, peak) {
    gain.gain.cancelScheduledValues(t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(peak, t + a);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }

  function tone(freq, type, a, d, peak, when, detune) {
    const c = ensure(); if (!c || muted) return;
    const t = c.currentTime + (when || 0);
    const o = c.createOscillator(); const g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (detune) o.detune.setValueAtTime(detune, t);
    env(g, t, a, d, peak);
    o.connect(g).connect(c.destination);
    o.start(t); o.stop(t + a + d + 0.05);
  }

  function noise(dur, filterFreq, peak, when, q) {
    const c = ensure(); if (!c || muted) return;
    const t = c.currentTime + (when || 0);
    const len = Math.floor(c.sampleRate * dur);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource(); src.buffer = buf;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = filterFreq; f.Q.value = q || 0.8;
    const g = c.createGain();
    env(g, t, 0.01, dur, peak);
    src.connect(f).connect(g).connect(c.destination);
    src.start(t); src.stop(t + dur + 0.05);
  }

  /* Sad scene: a looping violin lament and synthesized sobbing. Everything hangs off one gain node so it can be cut at once. */
  let sadBus = null, sadTimers = [];
  function violinNote(freq, when, dur, peak) {
    const c = ctx; const t = when;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + Math.min(0.35, dur * 0.4));
    g.gain.setValueAtTime(peak, t + dur - 0.2);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.25);
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1900; lp.Q.value = 1.2;
    const lfo = c.createOscillator(); lfo.frequency.value = 5.2;
    const lfoGain = c.createGain(); lfoGain.gain.setValueAtTime(0, t); lfoGain.gain.linearRampToValueAtTime(freq * 0.012, t + 0.5);
    lfo.connect(lfoGain);
    [-6, 5].forEach(det => {
      const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(freq, t); o.detune.value = det;
      lfoGain.connect(o.frequency);
      o.connect(lp); o.start(t); o.stop(t + dur + 0.3);
    });
    lp.connect(g).connect(sadBus);
    lfo.start(t); lfo.stop(t + dur + 0.3);
  }
  function sob(when) {
    const c = ctx; const t = when;
    const n = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) {
      const at = t + i * (0.16 + Math.random() * 0.08);
      const len = Math.floor(c.sampleRate * 0.12);
      const buf = c.createBuffer(1, len, c.sampleRate); const d = buf.getChannelData(0);
      for (let j = 0; j < len; j++) d[j] = Math.random() * 2 - 1;
      const src = c.createBufferSource(); src.buffer = buf;
      const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 700 + Math.random() * 500; f.Q.value = 1.5;
      const g = c.createGain(); env(g, at, 0.01, 0.1, 0.07);
      src.connect(f).connect(g).connect(sadBus); src.start(at); src.stop(at + 0.2);
      const o = c.createOscillator(); o.type = 'triangle';
      o.frequency.setValueAtTime(520 + Math.random() * 120, at); o.frequency.exponentialRampToValueAtTime(330, at + 0.14);
      const og = c.createGain(); env(og, at, 0.02, 0.12, 0.05);
      o.connect(og).connect(sadBus); o.start(at); o.stop(at + 0.2);
    }
    /* the wail */
    const w = t + n * 0.2;
    const o = c.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(440, w); o.frequency.exponentialRampToValueAtTime(260, w + 1.1);
    const v = c.createOscillator(); v.frequency.value = 6.5; const vg = c.createGain(); vg.gain.value = 14; v.connect(vg).connect(o.frequency);
    const og = c.createGain(); og.gain.setValueAtTime(0.0001, w); og.gain.exponentialRampToValueAtTime(0.06, w + 0.12); og.gain.exponentialRampToValueAtTime(0.0001, w + 1.2);
    o.connect(og).connect(sadBus); o.start(w); o.stop(w + 1.3); v.start(w); v.stop(w + 1.3);
  }
  /* An original lament in D minor. Frequencies in Hz, durations in seconds. */
  const LAMENT = [[440, 1.2], [349.23, 0.9], [293.66, 1.8], [329.63, 0.7], [349.23, 0.7], [329.63, 0.9], [293.66, 1.0], [277.18, 1.2], [293.66, 2.4], [0, 0.6],
    [523.25, 1.0], [466.16, 0.8], [440, 1.4], [349.23, 0.8], [392, 0.8], [349.23, 1.2], [329.63, 1.6], [293.66, 2.8], [0, 0.8]];
  function sadLoop() {
    if (!sadBus) return;
    let t = ctx.currentTime + 0.1;
    for (const [f, d] of LAMENT) { if (f) violinNote(f, t, d, 0.09); t += d; }
    const total = t - ctx.currentTime;
    let st = 0.9;
    while (st < total - 1.5) { sob(ctx.currentTime + st); st += 1.8 + Math.random() * 1.6; }
    sadTimers.push(setTimeout(sadLoop, (total - 0.3) * 1000));
  }
  function sadStart() {
    const c = ensure(); if (!c || muted || sadBus) return;
    sadBus = c.createGain(); sadBus.gain.setValueAtTime(0.0001, c.currentTime); sadBus.gain.exponentialRampToValueAtTime(1, c.currentTime + 2.5);
    sadBus.connect(c.destination);
    sadLoop();
  }
  function sadStop() {
    sadTimers.forEach(clearTimeout); sadTimers = [];
    if (!sadBus) return;
    const b = sadBus, t = ctx.currentTime; sadBus = null;
    b.gain.cancelScheduledValues(t); b.gain.setValueAtTime(Math.max(b.gain.value, 0.0001), t); b.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
    setTimeout(() => b.disconnect(), 700);
  }

  const SFX = {
    unlock() { ensure(); },
    get muted() { return muted; },
    setMuted(v) { muted = !!v; localStorage.setItem(KEY, muted ? '1' : '0'); if (muted) sadStop(); },
    sadStart, sadStop,
    toggle() { SFX.setMuted(!muted); return muted; },

    page() { noise(0.22, 1800, 0.12, 0, 0.5); noise(0.12, 900, 0.08, 0.08, 0.7); },
    click() { tone(880, 'square', 0.005, 0.06, 0.08); },
    heal() { tone(660, 'sine', 0.01, 0.18, 0.12); tone(990, 'sine', 0.01, 0.22, 0.09, 0.05); },
    bigHeal() { [523, 659, 784].forEach((f, i) => tone(f, 'triangle', 0.01, 0.3, 0.1, i * 0.05)); },
    hit() { noise(0.08, 300, 0.1, 0, 0.6); tone(120, 'sawtooth', 0.005, 0.08, 0.08); },
    death() { tone(220, 'sawtooth', 0.01, 0.5, 0.12); tone(110, 'sawtooth', 0.01, 0.7, 0.1, 0.05); noise(0.5, 200, 0.08, 0, 0.5); },
    wrong() { tone(160, 'square', 0.005, 0.15, 0.08); tone(120, 'square', 0.005, 0.2, 0.08, 0.1); },
    tame() { tone(740, 'triangle', 0.01, 0.12, 0.1); tone(1108, 'triangle', 0.01, 0.2, 0.08, 0.08); },
    shift() { noise(0.18, 600, 0.1, 0, 0.4); tone(300, 'triangle', 0.02, 0.2, 0.06); },
    tick() { tone(1400, 'sine', 0.002, 0.03, 0.03); },
    accept() { tone(440, 'triangle', 0.01, 0.2, 0.1); tone(554, 'triangle', 0.01, 0.2, 0.1, 0.1); },
    levelup() {
      const seq = [523, 659, 784, 1046, 1318, 1568];
      seq.forEach((f, i) => { tone(f, 'triangle', 0.01, 0.35, 0.12, i * 0.09); tone(f * 2, 'sine', 0.01, 0.3, 0.04, i * 0.09); });
      tone(1046, 'sawtooth', 0.02, 1.4, 0.06, 0.55, 4);
      tone(1318, 'sawtooth', 0.02, 1.4, 0.05, 0.55, -4);
      noise(0.6, 4000, 0.05, 0.5, 0.3);
    }
  };

  window.SFX = SFX;
})();
