import React from "react";
import {Button, Container, Input, Stack, Text, useDisclosure} from "@chakra-ui/react";

import {AppProvider} from "../context/AppContext";

import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import ModalBudget from "./components/ModalBudget";
import ExpenseFilter from "./components/ExpenseFilter";
import ActionButtons from "./components/ActionButtons";

const App: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <AppProvider>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Stack>
          <Stack alignItems="center" direction="row" height={12} marginTop={2}>
            <Text fontSize="2xl">Perfil de deudas</Text>
            <ActionButtons />
          </Stack>
          <Stack direction="row" textAlign="center">
            <Budget accionBotonEdit={onOpen} />
            <Remaining />
            <ExpenseTotal />
            <ExpenseFilter />
          </Stack>
          <Stack>
            <Text fontSize="2xl">Gastos</Text>
            <ExpenseList />
          </Stack>
          <Stack width={72}>
            <Text fontSize="2xl">Agregar gastos</Text>
            <AddExpenseForm />
          </Stack>
        </Stack>
      </Container>
      <ModalBudget isOpen={isOpen} onClose={onClose} />
    </AppProvider>
  );
};

export default App;
