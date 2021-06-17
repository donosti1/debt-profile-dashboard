import React, {useState, useContext} from "react";
import {Button, Icon, Input, Stack, Text} from "@chakra-ui/react";
import {TiDelete} from "react-icons/ti";

import {AppContext} from "../../context/AppContext";

const ExpenseFilter: React.FC = () => {
  const {state, dispatch} = useContext(AppContext);
  const {expenses} = {...state};
  const [search, setSearch] = useState("");
  const handleOnChange = (event: any) => {
    event.preventDefault();

    dispatch({
      type: "FILTER_EXPENSE",
      payload: event.target.value,
    });
  };

  return expenses.length > 0 ? (
    <Stack alignItems="center" direction="row" flex="1">
      <Text fontSize="xs" width={20}>
        Filtrar gastos:
      </Text>
      <Stack direction="row" flex="1">
        <Input
          value={search}
          onChange={(event: any) => (setSearch(event.target.value), handleOnChange(event))}
        />
        {search != "" && (
          <Button onClick={(event: any) => (setSearch(""), handleOnChange(event))}>X</Button>
        )}
      </Stack>
    </Stack>
  ) : (
    <Stack alignItems="center" direction="row" flex="1" />
  );
};

export default ExpenseFilter;
