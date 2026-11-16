// PROTOTYPE - NOT FOR PRODUCTION
// Question: Does first-person martial arts, with parries and combo strings, feel sharp and tense enough to hold a whole night shift?
// Date: 2026-11-16
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // ---- You ----
  playerHp: { value: 100, min: 40, max: 250, step: 5 },        // health, one bar, no lives
  waveHeal: { value: 25, min: 0, max: 100, step: 5 },          // health back between hours
  hitStun: { value: 0.32, min: 0.1, max: 0.8, step: 0.02 },    // s you can't act after a hit
  behindMult: { value: 1.25, min: 1, max: 2, step: 0.05 },     // damage taken when hit from behind

  // ---- Defence ----
  parryWindow: { value: 0.16, min: 0.06, max: 0.4, step: 0.01 },  // s before impact a Space tap parries
  parryCooldown: { value: 0.3, min: 0, max: 0.8, step: 0.02 },    // s between taps for a tap to count (stops mashing)
  staggerTime: { value: 1.1, min: 0.4, max: 2.5, step: 0.05 },    // s an enemy is guard-broken after your parry
  staggerBonus: { value: 1.25, min: 1, max: 2, step: 0.05 },      // damage multiplier on a staggered enemy
  counterTime: { value: 1.2, min: 0.3, max: 3, step: 0.1 },       // s the counter window lasts after a parry
  counterMult: { value: 2, min: 1, max: 3, step: 0.1 },           // damage multiplier in the counter window
  slipCounterMult: { value: 1.5, min: 1, max: 3, step: 0.1 },     // multiplier after a slip that dodged a blow
  guardChip: { value: 0.2, min: 0, max: 1, step: 0.05 },          // share of damage that gets through your guard
  slipTime: { value: 0.32, min: 0.15, max: 0.6, step: 0.01 },     // s a slip lasts (dodges most of it)
  slipCooldown: { value: 0.5, min: 0.1, max: 1.5, step: 0.05 },   // s before you can slip again

  // ---- Attacks (s for the whole move; the hit lands 42% in) ----
  jabTime: { value: 0.22, min: 0.12, max: 0.5, step: 0.01 },
  crossTime: { value: 0.32, min: 0.15, max: 0.6, step: 0.01 },
  kickTime: { value: 0.44, min: 0.2, max: 0.8, step: 0.01 },
  hookTime: { value: 0.38, min: 0.2, max: 0.7, step: 0.01 },
  elbowTime: { value: 0.32, min: 0.15, max: 0.6, step: 0.01 },
  spinTime: { value: 0.58, min: 0.3, max: 1, step: 0.01 },
  jabDmg: { value: 6, min: 1, max: 20, step: 1 },
  crossDmg: { value: 11, min: 2, max: 30, step: 1 },
  kickDmg: { value: 9, min: 2, max: 30, step: 1 },
  hookDmg: { value: 18, min: 5, max: 40, step: 1 },
  elbowDmg: { value: 16, min: 5, max: 40, step: 1 },
  spinDmg: { value: 26, min: 5, max: 60, step: 1 },
  kickPush: { value: 0.14, min: 0, max: 0.4, step: 0.01 },        // depth a kick shoves them back
  chainWindow: { value: 0.45, min: 0.15, max: 1, step: 0.05 },    // s after a move to carry on a combo string
  hitstop: { value: 0.06, min: 0, max: 0.2, step: 0.01 },         // s the world freezes on a hit
  ironMult: { value: 1.7, min: 1, max: 3, step: 0.1 },            // tyre iron damage multiplier
  ironUses: { value: 8, min: 1, max: 30, step: 1 },               // swings before the iron snaps

  // ---- The car ----
  hotwireRate: { value: 6.5, min: 1, max: 20, step: 0.5 },        // % a second each thief adds
  hotwireDecay: { value: 1.5, min: 0, max: 10, step: 0.5 },       // % a second it falls with no thief on it
  thiefNotice: { value: 0.35, min: 0, max: 1.5, step: 0.05 },     // s a thief takes to notice you've turned round
  turnTime: { value: 0.24, min: 0.1, max: 0.6, step: 0.02 },      // s to spin round

  // ---- Robbers ----
  walkSpeed: { value: 0.42, min: 0.1, max: 1.2, step: 0.02 },     // depth a second (0 = in your face, 1 = the shutter)
  spawnGap: { value: 2.4, min: 0.5, max: 8, step: 0.1 },          // s between arrivals
  breather: { value: 3.5, min: 1, max: 10, step: 0.5 },           // s between hours
  attackGapMin: { value: 1.1, min: 0.3, max: 4, step: 0.1 },      // s an enemy waits between attacks (min)
  attackGapMax: { value: 2.2, min: 0.5, max: 5, step: 0.1 },      // s (max)
  tutorialSlow: { value: 1.7, min: 1, max: 3, step: 0.1 },        // first hoodie's wind-up stretched by this
  thugHp: { value: 40, min: 5, max: 150, step: 5 },
  thugDmg: { value: 10, min: 1, max: 40, step: 1 },
  thugWindup: { value: 0.7, min: 0.25, max: 1.5, step: 0.05 },
  bruteHp: { value: 85, min: 10, max: 250, step: 5 },
  bruteDmg: { value: 20, min: 1, max: 60, step: 1 },
  bruteWindup: { value: 1.0, min: 0.3, max: 2, step: 0.05 },
  knifeHp: { value: 30, min: 5, max: 120, step: 5 },
  knifeDmg: { value: 6, min: 1, max: 30, step: 1 },
  knifeWindup: { value: 0.38, min: 0.15, max: 1, step: 0.02 },
  knifeDodge: { value: 0.4, min: 0, max: 1, step: 0.05 },         // chance the knife lad sways off a slow blow
  thiefHp: { value: 18, min: 5, max: 80, step: 1 },
  thiefDmg: { value: 5, min: 1, max: 30, step: 1 },
  gafferHp: { value: 170, min: 30, max: 400, step: 10 },
  gafferDmg: { value: 16, min: 1, max: 60, step: 1 },
  gafferWindup: { value: 0.75, min: 0.3, max: 1.6, step: 0.05 },
};
