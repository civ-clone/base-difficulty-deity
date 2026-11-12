"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deity = void 0;
const Difficulty_1 = require("@civ-clone/core-difficulty/Difficulty");
// Level 5: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
class Deity extends Difficulty_1.default {
    static level() {
        return 5;
    }
}
exports.Deity = Deity;
exports.default = Deity;
//# sourceMappingURL=Deity.js.map