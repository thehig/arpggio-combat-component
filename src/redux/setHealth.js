import {
  SET_HEALTH,
} from './constants';

export function setHealth(player, hp) {
  return {
    type: SET_HEALTH,
    payload: {
      player,
      hp,
    },
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SET_HEALTH:
      return state.set('hp', action.payload.hp);
    default:
      return state;
  }
}

export function getHealth(state) {
  return state.get('hp');
}
