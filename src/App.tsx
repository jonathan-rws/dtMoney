import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { NewTansactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {

const [isNewTranasctionModalOpen, setIsNewTransactionModalOpen] = useState(false)

function openNewTransactionModal(){
  setIsNewTransactionModalOpen(true)
}

function closeNewTransactionModal(){
  setIsNewTransactionModalOpen(false)
}


  return (
  
      <TransactionsProvider>
        <GlobalStyle/>
        <Header onOpenNewTransactionModal={openNewTransactionModal}/>
        <NewTansactionModal
          isOpen={isNewTranasctionModalOpen}
          onRequestClose={closeNewTransactionModal}
        />
        <Dashboard/>
      </TransactionsProvider>
      
  
  
  );
}

export default App;
