import Difficulty from '@civ-clone/core-difficulty/Difficulty';
import Deity from '../Deity';
import { expect } from 'chai';

describe('Deity', (): void => {
  it('is a difficulty at level 5', (): void => {
    expect(Object.prototype.isPrototypeOf.call(Difficulty, Deity)).true;
    expect(Deity.level()).equal(5);
    expect(Deity.name).equal('Deity');
  });
});
