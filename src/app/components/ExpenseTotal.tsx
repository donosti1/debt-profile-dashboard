import React from "react";
import {Stack, Text} from "@chakra-ui/react";

import {AppContext} from "../../context/AppContext";

const ExpenseTotal: React.FC = () => {
  const {state} = React.useContext(AppContext);
  const {expenses} = {...state};
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <Stack flex="1" justifyContent="center">
      <Text>A la fecha: ${totalExpenses}</Text>
    </Stack>
  );
};

export default ExpenseTotal;
