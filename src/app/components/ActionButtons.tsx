import React from "react";
import {Button} from "@chakra-ui/react";

import {AppContext} from "../../context/AppContext";

const ActionButtons: React.FC = () => {
  const {state, dispatch} = React.useContext(AppContext);

  const {expenses} = {...state};

  const handleOnClickClear = () => {
    dispatch({
      type: "CLEAR_EXPENSES",
    });
    localStorage.removeItem("expenses");
  };

  return expenses.length > 0 ? <Button onClick={handleOnClickClear}>Limpiar gastos</Button> : null;
};

export default ActionButtons;
