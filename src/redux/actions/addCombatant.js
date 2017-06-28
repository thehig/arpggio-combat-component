import {
  ADD_COMBATANT,
} from '../constants';

export function addCombatant(combatant) {
  return {
    type: ADD_COMBATANT,
    payload: combatant,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ADD_COMBATANT:
      return state;
    default:
      return state;
  }
}