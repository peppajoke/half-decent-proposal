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

  const SFX = {
    unlock() { ensure(); },
    get muted() { return muted; },
    setMuted(v) { muted = !!v; localStorage.setItem(KEY, muted ? '1' : '0'); },
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
