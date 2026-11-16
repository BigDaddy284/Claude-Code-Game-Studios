# Game Brief: Night Shift

## In your words
I like the night shift idea but protecting something valuable being held there
So I meant at the mechanics garge
No guns, weapons yes, I'm picturing a pencil drawing style first person hand to hand combat, with combos, perries etc with a strong emphasis and detail put into the martial arts.
1. The valuable thing: A stolen classic sports car
2. Mood: tense action
3. How hard: Tense: one health bar, no lives *(provisional)*

**Pitch:** You're the last man on the night shift at a back-alley mechanic's garage, and until dawn you defend a stolen classic sports car from waves of robbers with nothing but your fists, your feet and a tyre iron.

**Genre:** first-person martial-arts brawler (character action, duel style) *(inferred (strong))*

**Controls:** J jab · K cross · L kick · Space guard (tap just before a hit lands to parry) · A / D slip left / right · S turn round to face the car · E grab the tyre iron at the workbench · Esc pause · M mute. Mouse: left click jab, right click cross. *(guessed)*

**Question:** Does first-person martial arts, with parries and combo strings, feel sharp and tense enough to hold a whole night shift?

**Hooks:** First-person kung fu in a sketchbook: you see your own fists and feet in pencil, parry a crowbar on the beat and punish with a three-hit string, while one ear listens for a thief hotwiring the motor behind you.

**Intent:**

## Look and references
- Look: a graphite pencil drawing on off-white paper, as if the whole night is sketched in a notebook; loose, slightly wobbling lines redrawn a few times a second (line boil), cross-hatching for every shadow, heavy smudged darks in the corners; one accent colour only, a red pencil for hits, blood and the off licence's neon sign. A bare bulb swinging over the ramp throws a circle of light where the hatching thins. Every figure drawn, no emoji, no plain circles.
- References: Sifu for martial-arts depth (parry timing, guard breaks, strings; values only) *(guessed)*.
- View: first person, 2.5D (drawn perspective) · Camera: fixed eye height, facing the shutter onto the alley; one key turns you 180° to face the car on its ramp. Your own arms and legs drawn in the foreground.

## First minute
11 PM. The shutter is half up; across the alley the off licence sign buzzes red. One lone hoodie walks in under the shutter. On-screen hints teach by doing: jab him (J), then he winds up a slow haymaker with a clear flash, and the hint says "tap SPACE as it lands": the parry staggers him with a crack, and the follow-up "J J K" lands a red-lined one-two-hook that drops him. Ten seconds later two more arrive and one slips past you toward the car; the HOTWIRE bar starts filling and "S" turns you round to drag him off the motor. That turn, with the other robber at your back, is the hook paying off.

## Challenge
First real trouble at wave 2 (around minute 2): a crowbar brute who blocks jabs plus a knife lad whose fast stabs punish mashing, while a car thief sneaks in. Health is one bar with no lives: lose it, or let the car be driven off, and the night restarts from 11 PM. Waves grow by the hour; 4 AM brings two armed at once, and 5 AM brings the gang's boss, the Gaffer, with a bat and feints. Survive to 6 AM dawn to win.

## Core loop
- Read the robber's guard and wind-up → jab, string a combo, or parry and punish.
- A clean parry breaks their guard → a counter string does double damage and earns a grade.
- Keep half an eye on the HOTWIRE bar → turn round, stop the thief, turn back before you're hit from behind.
- Clear the hour's wave → a short breather and a little health back → the next, harder hour until dawn.

## Goal & fail state
- Win: keep the car on the ramp until 6 AM (seven hours, 11 PM to 5 AM, each a wave, the last with the boss).
- Lose: your health hits zero, or a thief finishes hotwiring and drives the car out. Restart from 11 PM.

## Features
- [x] First-person fists and feet drawn on screen, each move with its own pose: jab, cross, hook, elbow, front kick, spinning back kick, guard, parry
- [x] Combo strings (J J K, J K K, K K L ...) listed on the pause screen
- [x] Guard to block (chip damage) and a timed parry that staggers and opens a counter window
- [x] Slip left/right dodges
- [x] 5 enemy kinds, each attacking differently: hoodie thug, crowbar brute, knife lad, car thief, the Gaffer (boss)
- [x] The car on the ramp, a HOTWIRE bar, and turning round to defend it
- [x] Tyre iron from the workbench: heavier hits, breaks after a few swings
- [x] Night clock 11 PM to 6 AM, a wave an hour, combo grade per hit string
- [ ] Pencil look with line boil, hatching, red accent; sound through Web Audio

## Your systems
- protecting the car · in the slice
- melee weapons · thin stand-in *(guessed)*
- combos and parries · in the slice

## Keep
-

## Avoid
- guns
- copying Sifu's name, art, characters or moves as it does them

## Out of scope
- Upgrades that add new moves: add it as a feature
- Weapons switched in the middle of a combo: add it as a feature
- Cutscenes and dramatic camera moments: grow it
- Music that grows with the fight: change it after play

## Build order
1. One night, 11 PM to dawn: first-person combat with combos, guard, parry and slips, five enemy kinds over six waves, the car and its hotwire bar, win at 6 AM, lose on zero health or a stolen car.

---
**Kill condition:** if parrying in first person still feels like guesswork after two tuning rounds.

**Who it's for / what they feel:** players who like learning a fighting system; tense, scrappy, in control when it clicks.

**Games you love / don't:**
