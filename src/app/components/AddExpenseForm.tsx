import React, {useState, useContext} from "react";
import {Button, Input, Stack, Text} from "@chakra-ui/react";

import {AppContext} from "../../context/AppContext";

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };

  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}
const AddExpenseForm: React.FC = () => {
  const {dispatch} = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const onSubmit = (event: any) => {
    event.preventDefault();

    const expense = {
      id: guidGenerator(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    let storedExpenses = localStorage.getItem("expenses");

    if (storedExpenses != null) {
      let expenses = JSON.parse(storedExpenses);

      expenses.push(expense);
      localStorage.setItem("expenses", JSON.stringify(expenses));
    } else {
      localStorage.setItem("expenses", JSON.stringify([expense]));
    }

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <Stack>
          <Text>Name</Text>
          <Input
            id="name"
            placeholder=""
            required={true}
            value={name}
            onChange={(event: any) => setName(event.target.value)}
          />
        </Stack>
        <Stack>
          <Text>Cost</Text>
          <Input
            id="cost"
            placeholder=""
            required={true}
            value={cost}
            onChange={(event: any) => setCost(event.target.value)}
          />
        </Stack>
        <Stack>
          <Button colorScheme="blue">Agregar</Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default AddExpenseForm;
