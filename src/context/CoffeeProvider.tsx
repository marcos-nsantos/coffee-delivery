import { Coffee, coffeeReducer } from "../reducers/coffes/reducer.ts";
import { createContext, ReactNode, useReducer } from "react";
import {
  addNewCoffeeAction,
  decrementCoffeeAction,
  incrementCoffeeAction,
  removeCoffeeAction,
} from "../reducers/coffes/action.ts";

interface CoffeeContextType {
  cart: Coffee[];
  addCoffee: (coffee: Coffee) => void;
  removeCoffee: (coffeeId: string) => void;
  incrementCoffee: (coffeeId: string) => void;
  decrementCoffee: (coffeeId: string) => void;
  quantity: number;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CarContextProviderProps {
  children: ReactNode;
}

export function CoffeeProvider({ children }: CarContextProviderProps) {
  const [state, dispatch] = useReducer(coffeeReducer, {
    coffees: [],
  });

  function addCoffee(coffee: Coffee) {
    dispatch(addNewCoffeeAction(coffee));
  }

  function removeCoffee(coffeeId: string) {
    dispatch(removeCoffeeAction(coffeeId));
  }

  function incrementCoffee(coffeeId: string) {
    dispatch(incrementCoffeeAction(coffeeId));
  }

  function decrementCoffee(coffeeId: string) {
    dispatch(decrementCoffeeAction(coffeeId));
  }

  function quantityOfAllCoffees() {
    return state.coffees.reduce((acc, coffee) => {
      return acc + coffee.quantity;
    }, 0);
  }

  return (
    <CoffeeContext.Provider
      value={{
        cart: state.coffees,
        addCoffee,
        removeCoffee,
        incrementCoffee,
        decrementCoffee,
        quantity: quantityOfAllCoffees(),
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
