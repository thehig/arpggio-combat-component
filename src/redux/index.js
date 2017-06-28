import { reducer as setHealth, getHealth } from './actions/setHealth';
import { reducer as addCombatant } from './actions/addCombatant';

// Reducers
export const reducers = [
  setHealth,
  addCombatant,
];

// Selectors
export const selectors = {
  getHealth,
};
