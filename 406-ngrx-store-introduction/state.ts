import { Action, combineReducers } from '@ngrx/store';

export const PICK_BERRY = 'PICK_BERRY';
export const PICK_APPLE = 'PICK_APPLE';
export const PICK_APPLES = 'PICK_APPLES';
export const EMPTY_CART = 'EMPTY_CART';

export interface AppState {
  berryCounter: number;
  appleCounter: number;
}

const berryCounterReducer =
  (value: number = 0, action: Action): number => {
    switch (action.type) {
      case PICK_BERRY:
        return value + 1;

      case EMPTY_CART:
        return 0;

      default:
        return value;
    }
  };

const appleCounterReducer = (value: number = 0, action: Action): number => {
  switch (action.type) {
    // If you have too many apples, they spill and you lose them all.
    case PICK_APPLE:
      const x = value + 1;
      return x > 10 ? 0 : x;

    case PICK_APPLES:
      const y = value + action.payload;
      return y > 10 ? 0 : y;

    case EMPTY_CART:
      return 0;

    default:
      return value;
  }
};

export function appReducer(state: AppState, action: Action): AppState {
  const reducer = combineReducers({
    berryCounter: berryCounterReducer,
    appleCounter: appleCounterReducer
  });
  return reducer(state, action);
}
