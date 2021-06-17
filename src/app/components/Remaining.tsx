import React from "react";
import {Stack, Text} from "@chakra-ui/react";

import {AppContext} from "../../context/AppContext";

const Remaining: React.FC = () => {
  const {state} = React.useContext(AppContext);
  const {expenses, budget} = {...state};
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  let remainingStyle = {background: "", fontWeight: "normal"};

  totalExpenses > budget
    ? ((remainingStyle["background"] = "red.300"), (remainingStyle["fontWeight"] = "700"))
    : ((remainingStyle["background"] = "green.300"), (remainingStyle["fontWeight"] = "normal"));

  return (
    <Stack
      backgroundColor={remainingStyle.background}
      flex="1"
      fontWeight={remainingStyle.fontWeight}
      justifyContent="center"
    >
      <Text>Disponible: ${budget - totalExpenses}</Text>
    </Stack>
  );
};

export default Remaining;
