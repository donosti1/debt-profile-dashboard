import React from "react";
import {List, Stack} from "@chakra-ui/react";

import {AppContext} from "../../context/AppContext";

import ExpenseItem from "./ExpenseItem";

const ExpenseList: React.FC = () => {
  const {state} = React.useContext(AppContext);
  const {expenses, search} = {...state};

  const filteredExpenses = expenses.filter((expense: any) => expense.name.includes(search));

  return (
    <List height={48} overflowY="auto" spacing={3}>
      {expenses.length > 0 ? (
        filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              cost={expense.cost}
              id={"" + expense.id}
              name={expense.name}
            />
          ))
        ) : (
          <div>No hay gastos que coincidan con el criterio</div>
        )
      ) : (
        <div>No hay gastos</div>
      )}
    </List>
  );
};

export default ExpenseList;
