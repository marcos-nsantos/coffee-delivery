import { ActionTypes } from "./action.ts";
import { produce } from "immer";

export interface Coffee {
  id: string;
  nome: string;
  imagem: string;
  quantity: number;
}

interface CartState {
  coffees: Coffee[];
}

export function coffeeReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return produce(state, (draft) => {
        const coffeeToAdd = action.payload.newCoffee;
        const coffeeFound = draft.coffees.find((coffee) => {
          return coffee.id === coffeeToAdd.id;
        });

        if (coffeeFound) {
          coffeeFound.quantity += coffeeToAdd.quantity;
        } else {
          draft.coffees.push(coffeeToAdd);
        }
      });

    default:
      return state;
  }
}
