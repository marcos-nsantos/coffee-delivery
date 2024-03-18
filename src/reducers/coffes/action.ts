import { Coffee } from "./reducer.ts";

export enum ActionTypes {
  ADD_COFFEE = "ADD_COFFEE",
}

export function addNewCoffeeAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      newCoffee,
    },
  };
}
