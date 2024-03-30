import { ActionTypes } from "./action.ts";
import { produce } from "immer";

export interface Coffee {
  id: string;
  nome: string;
  imagem: string;
  quantity: number;
  price: number;
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

    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffees.findIndex((coffee) => {
          return coffee.id === action.payload.coffeeId;
        });

        if (coffeeIndex !== -1) {
          draft.coffees.splice(coffeeIndex, 1);
        }
      });

    case ActionTypes.INCREMENT_COFFEE:
      return produce(state, (draft) => {
        const coffeeToIncrement = draft.coffees.find((coffee) => {
          return coffee.id === action.payload.coffeeId;
        });

        if (coffeeToIncrement) {
          coffeeToIncrement.quantity += 1;
        }
      });

    case ActionTypes.DECREMENT_COFFEE:
      return produce(state, (draft) => {
        const coffeeToDecrement = draft.coffees.find((coffee) => {
          return coffee.id === action.payload.coffeeId;
        });

        if (coffeeToDecrement) {
          coffeeToDecrement.quantity -= 1;

          if (coffeeToDecrement.quantity === 0) {
            const coffeeIndex = draft.coffees.findIndex((coffee) => {
              return coffee.id === action.payload.coffeeId;
            });

            if (coffeeIndex !== -1) {
              draft.coffees.splice(coffeeIndex, 1);
            }
          }
        }
      });

    default:
      return state;
  }
}
