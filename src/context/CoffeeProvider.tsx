import { Coffee, coffeeReducer } from "../reducers/coffes/reducer.ts";
import { createContext, ReactNode, useReducer } from "react";
import { addNewCoffeeAction } from "../reducers/coffes/action.ts";

interface CoffeeContextType {
  cart: Coffee[];
  addCoffee: (coffee: Coffee) => void;
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
        quantity: quantityOfAllCoffees(),
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
