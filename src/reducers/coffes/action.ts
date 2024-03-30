import { Coffee } from "./reducer.ts";

export enum ActionTypes {
  ADD_COFFEE = "ADD_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  INCREMENT_COFFEE = "INCREMENT_COFFEE",
  DECREMENT_COFFEE = "DECREMENT_COFFEE",
}

export function addNewCoffeeAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      newCoffee,
    },
  };
}

export function removeCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  };
}

export function incrementCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.INCREMENT_COFFEE,
    payload: {
      coffeeId,
    },
  };
}

export function decrementCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.DECREMENT_COFFEE,
    payload: {
      coffeeId,
    },
  };
}
