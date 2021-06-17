import React from "react";
import {Button, Icon, Stack, Text} from "@chakra-ui/react";
import {TiEdit} from "react-icons/ti";

import {AppContext} from "../../context/AppContext";
interface PropsRecibidas {
  accionBotonEdit: (e: any) => void;
}
const Budget: React.FC<PropsRecibidas> = (props) => {
  const {state} = React.useContext(AppContext);
  const {budget} = {...state};

  return (
    <Stack alignItems="center" direction="row" flex="1" justifyContent="center">
      <Text>Presupuesto: ${budget}</Text>
      <Button onClick={props.accionBotonEdit}>
        <Icon as={TiEdit} />
      </Button>
    </Stack>
  );
};

export default Budget;
