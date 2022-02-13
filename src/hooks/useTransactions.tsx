import { ReactNode, createContext, useEffect, useState, useContext } from "react";
import { api } from "../services/axios";

interface Transactions{
    id: number
    name: string
    amount: number
    type: string
    category: string
    createdAt: string
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsProviderProps{
    children: ReactNode
}

interface TransactionContextProps{
    transactions: Transactions[]
    createTransaction: (transactions:TransactionInput) => Promise<void>
}


const TransactionsContext = createContext<TransactionContextProps>(
    {} as TransactionContextProps
)

export function TransactionsProvider({children}:TransactionsProviderProps){

    const [transactions , setTransactions] = useState<Transactions[]>([])

    useEffect(()=>{
        api.get("transactions")
        .then(response=> setTransactions(response.data.transactions))
    },[])

     async function createTransaction(transaction: TransactionInput){
        await api.post('/transactions', transaction)
        .then(({data}) => {
            setTransactions([data.transaction, ...transactions])
        })
    
    }


    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)
    return context
}