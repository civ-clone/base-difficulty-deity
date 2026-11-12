import Difficulty from '@civ-clone/core-difficulty/Difficulty';

// Level 5: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
export class Deity extends Difficulty {
  static level(): number {
    return 5;
  }
}

export default Deity;
