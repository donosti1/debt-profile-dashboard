import React from "react";
import {Icon, Stack, Tag, Text} from "@chakra-ui/react";
import {TiDelete} from "react-icons/ti";

import {AppContext} from "../../context/AppContext";

interface ExpenseProps {
  id: string;
  name: string;
  cost: number;
}
const ExpenseItem: React.FC<ExpenseProps> = (props) => {
  const {dispatch} = React.useContext(AppContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Text>{props.name}</Text>
      <Stack alignItems="center" direction="row">
        <Tag colorScheme="blue" marginX={4}>
          ${props.cost}
        </Tag>
        <Icon as={TiDelete} onClick={handleDeleteExpense} />
      </Stack>
    </Stack>
  );
};

export default ExpenseItem;
