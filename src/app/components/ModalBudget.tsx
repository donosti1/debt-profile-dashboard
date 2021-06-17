import React, {useState, useContext} from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  Input,
} from "@chakra-ui/react";

import {AppContext} from "../../context/AppContext";
interface PropsRecibidas {
  isOpen: boolean;
  onClose: () => void;
}
const ModalBudget: React.FC<PropsRecibidas> = (props) => {
  const {dispatch} = useContext(AppContext);
  const {state} = React.useContext(AppContext);
  const {budget} = {...state};
  const [newBudget, setNewBudget] = useState(budget);
  const initialRef = React.useRef<HTMLInputElement>(null);
  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch({
      type: "EDIT_BUDGET",
      payload: newBudget,
    });

    localStorage.setItem("budget", newBudget.toString());
    props.onClose();
  };

  return (
    <Modal initialFocusRef={initialRef} isOpen={props.isOpen} size="xs" onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar presupuesto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={(e: any) => onSubmit(e)}>
            <Stack>
              <Stack>
                <Text>Monto</Text>
                <Input
                  ref={initialRef}
                  id="budget"
                  placeholder=""
                  required={true}
                  value={newBudget}
                  onChange={(event: any) => setNewBudget(event.target.value)}
                />
              </Stack>
            </Stack>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={(e: any) => onSubmit(e)}>
            Actualizar presupuesto
          </Button>
          <Button variant="ghost" onClick={props.onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBudget;
