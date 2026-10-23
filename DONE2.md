# DONE2: Feedback rounds 1 and 2 applied

All nineteen items in FEEDBACK.md are applied. Every slide was rebuilt, re-verified headlessly in Chrome at 1280x800 and 390x844, and every game claim was checked against official Blizzard pages (worldofwarcraft.blizzard.com news, news.blizzard.com, and Blizzard staff posts on us.forums.blizzard.com).

## Item by item

1. **Facts.** Classic era only. The Burning Crusade line is gone. Tree of Life form (TBC) and the stag travel form are gone; Travel Form is called a cheetah. Every remaining claim traces to an official page: nine new dungeons from level 13 (dungeon overview, Oct 20), three raids on Dec 9 at 10, 20 and 40 players (raid overview, Oct 20), realmless rulesets with PvP limited to one faction (ruleset article, updated Oct 22), campfires and the full profession list with camp items (campfire article, Oct 21), the Horde race and class table (races and classes article, pulled from the HTML table directly), Skyborne Windshaper classes and the ten second glide (Skyborne article), Druid Revive at level 12 and the new fox pet family (Hunter and Druid deep dive, Sept 30), Tauren Cultivation as a herb ability (Kaivax beta notes), name reservation Oct 27 to Nov 3 and launch Nov 4 (names article and pre-purchase article), invite codes Nov 4 to 11 with no subscription (pre-purchase article). Anything I could not source was cut.
2. **Causes of death removed.** Statuses now read only "Dead". Damage in the healer games shows a plain number.
3. **Health bars never reset.** Confirmed in code: HP only moves down from damage and up from heals. The Problem slide wipe now runs once and stays wiped instead of looping.
4. **Party, not raid.** "Party Wiped" everywhere.
5. **Format.** Rebuilt mobile first. Base type is 17 to 21px, headings up to 48px, one idea per slide, grids fill the width, official screenshots head most slides. Every desktop slide fits without scrolling; on phones only the grid slides (races, roster, professions) scroll.
6. "Don't stand in the orange" removed.
7. "Same word, same job" and the Overwatch line removed. Translation table cut to three sharper lines.
8. Transmog is not mentioned anywhere. No official WoW Forever page I could reach describes it, so it was cut rather than explained.
9. **Tauren Incident** now says she played with Jack and Justin, and is three lines long.
10. Phil Insurance Policy slide removed.
11. Clea's Promise slide removed. Clea remains only as the cockney line to Phil in the corner dock, as the brief requires.
12. Copy cut roughly in half. No em or en dashes anywhere (grep verified).
13. **Persuasion.** The deck now makes real arguments: realmless rulesets mean no server coordination, campfires make the party gather at her fire, Druid Revive at 12, dual class paths for animals plus healing, launch week invite code, and a concrete timeline.
14. **Professions slide** added: all nine primary (three gathering, six crafting) and three secondary, each graded for her with a joke and the official camp item where relevant. Skinning is a hard no because she loves animals.
15. **Races slide** added: Orc, Tauren, Troll, Undead and Windshaper Skyborne, with the exact class list for each from Blizzard's table, Tauren and Troll marked as picks.
16. **Class roster** added: all nine classes in one compact grid with healers flagged, including Undead Paladin as the only Horde Paladin. Playable games remain Druid, Hunter, Priest, Shaman.
17. **More Phil in the games.** Healer games have a "Let him go" toggle on Phil's row; letting Phil die awards a 500 point bonus and a verdict line. Phil barks when hit. Tapping an abandoned Phil says "You chose this". The Druid game has a "Phil in fire" obstacle. The Hunter game adds a horse decoy that cannot be tamed.
18. **Weather and world slide** added. Official support: Kaivax (Blizzard staff) posted "Coming soon to the Beta" with Blizzard's video "Increased weather effects are coming to WoW: Forever Beta Zones" (Sept 23), and the beta notes list "Improved rain visibility". The slide says rain is confirmed and that storms and snow are player reports Blizzard has not listed.
19. **Official images.** Sixteen screenshots downloaded from Blizzard's own article CDN (bnetcmsus-a.akamaihd.net, linked from the official dungeon, raid, ruleset, Skyborne, and races articles), compressed to JPEG in `assets/` (2.6 MB total), each credited on the slide.

## Verification

- Served with python http.server and driven with Playwright against installed Chrome at desktop and phone sizes.
- Zero console errors, page errors, failed requests, or 4xx responses across all 13 slides.
- Played Priest (with Let him go, bonus awarded), Hunter, Druid (heal form) and Shaman; verified score screens, Play again and Try another class.
- Accept Quest reveal, confetti and dates verified.
- Grep: no em or en dashes; none of GregTheSilent, leaderboard, Burning Crusade, orange, "same word", dressup, transmog, Tree of Life, stag, insurance, or Clea self introduction.

## Slide order

Title, The Problem, The Solution, Hard Part, Tauren Incident, Pick a Face (races), Tennessee Ranch Mode, Every Class Briefly, Class Sampler, Professions, Weather and World, Testimonials, The Ask.

## Notes

- The `task-observer` skill named in CLAUDE.md is not installed in this environment and could not be invoked.
- Committed and pushed to origin main as instructed.
