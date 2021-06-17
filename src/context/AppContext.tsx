import React, {useContext, Dispatch} from "react";

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((expense: any) => expense.id !== action.payload),
      };
    case "CLEAR_EXPENSES":
      return {
        ...state,
        expenses: [],
      };
    case "EDIT_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "FILTER_EXPENSE":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

interface ExpenseType {
  id: string;
  name: string;
  cost: number;
}
interface InitialStateType {
  budget: number;
  search: string;
  expenses: ExpenseType[];
}

let storedBudget = localStorage.getItem("budget");
let initialBudget = 0;

storedBudget != null ? (initialBudget = parseFloat(storedBudget)) : null;

let storedExpenses = localStorage.getItem("expenses");
let initialExpenses: never[] = [];

storedExpenses != null ? (initialExpenses = JSON.parse(storedExpenses)) : null;

//console.log(storedExpenses);

const initialState = {
  budget: initialBudget,
  search: "",
  expenses: initialExpenses,
};

export const AppContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({state: initialState, dispatch: () => null});

export const AppProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state: {budget: state.budget, search: state.search, expenses: state.expenses},
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
