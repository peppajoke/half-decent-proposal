# DONE: A Half Decent Proposal

Static site for GitHub Pages. Vanilla HTML, CSS and JS, no build step, everything in the repo.

## What was built

- `index.html`: all eleven slides from the brief, in order, including the title page, the animated raid wipe with a ticking death counter, the legendary item tooltip, the FFXIV translation table, the Tauren Incident page with verified WoW Forever features, Tennessee Ranch Mode with a shapeshift cycle and pet gallery, the Class Sampler, the Phil Insurance Policy in cockney, testimonials, Clea's Promise, and The Ask with the Accept Quest button.
- `css/style.css`: leather bound quest log look. Parchment pages in a leather cover with gold corner flourishes, Cinzel and IM Fell English from Google Fonts, Horde red accents, XP bar progress, responsive down to phone widths, reduced motion respected.
- `js/audio.js`: synthesized WebAudio effects (page turn, heal, hit, death, tame, shapeshift, level up fanfare). Mute toggle in the top bar, persisted in localStorage. No external audio assets.
- `js/phil.js`: original SVG Phil with eleven variants, one per slide, each doing something dumb (standing in fire, upside down banner, licking the tooltip, stuck in the Limsa lift, fleeing a boar at level 6, trying to claim the horse, being the practice dummy, signing with the wrong end of the pen, shouting German, getting one syllable from Clea, reaching for the button). Clea speaks to him only in cockney.
- `js/games.js`: four thirty second mini games. Priest and Shaman keep Jack, Justin and Phil alive (Phil drains fastest, he is in fire). Hunter taps animals running past to tame them, with Phil decoys. Druid shapeshifts to match obstacles and goes Tree to heal. Each ends on a score screen with class specific jokes.
- `js/app.js`: navigation by arrows, swipe and keyboard, hash deep links, XP bar, Phil dock, confetti and level up on Accept Quest, launch date reveal.
- `.nojekyll` so GitHub Pages serves the files as is.

## WoW Forever facts used

Fetched from the official Blizzard pages before writing feature claims: nine new dungeons from level 13 to 60, three raids on December 9 at 10, 20 and 40 players, rulesets (Normal, PvP, Roleplay, Hardcore later) instead of realms, two part character names, the campfire system, account wide collections and Legacy Points, invite a friend launch week codes (Nov 4 to 11, no subscription), early name reservation Oct 27 to Nov 3, global launch Nov 4, 2026. Class rework details were only available secondhand, so no specific class balance claims were made.

## Verification

- Served locally with python http.server and walked all eleven pages headlessly in Chrome via Playwright at 1280x800 and 390x844. Zero console errors, page errors or failed requests.
- Exercised Priest, Hunter and Druid games, the score screen, Play again and Try another class, the Accept Quest reveal, and swipe navigation with real touch events.
- Verdict copy for every class and outcome checked in node.
- Grep confirms no em dashes or en dashes anywhere in copy or code.

## Correction applied

The operator's CORRECTION section in BRIEF.md was followed. Neither item it names appears anywhere on the site or in this file.

## Not done, by instruction

No GitHub repo was created and nothing was pushed. The work is committed locally on main.
