import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useTransactions } from '../../hooks/useTransactions'


import {Container , TrasanctionTypeContainer, SelectBox} from "./styles"

interface NewTransactionModalProps {
    onRequestClose : () => void
    isOpen : boolean
}


Modal.setAppElement('#root')

export function NewTansactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const {createTransaction} = useTransactions()

  async function  handleCreacteNewTransaction(e : FormEvent){
        e.preventDefault()
       
        await createTransaction(
           {
            name,
            amount,
            type,
            category
        }
        )
      onRequestClose()
      setAmount(0)
      setName('')
      setCategory('')
      setType('deposit')
  }

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit')
    const [category, setCategory] = useState('')

    return(
        <Modal
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
        onRequestClose={onRequestClose}
        isOpen={isOpen}
        
        >
        <Container>
            <h2>Cadastrar Transação</h2>
            <input 
                type="text" 
                placeholder='Nome' 
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <input 
                type="number" 
                placeholder='Preço' 
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount ? amount : ''}
            />
            <TrasanctionTypeContainer>
                <SelectBox 
                    type='button'
                    onClick={ () => setType('deposit')}
                    isActive = {type === 'deposit'}
                    activeColor = "green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </SelectBox>
                <SelectBox 
                    type='button'
                    onClick={ () => setType('withdraw')}
                    isActive = {type === 'withdraw'}
                    activeColor = "red"
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </SelectBox>
            </TrasanctionTypeContainer>
            <input 
                type="text" 
                placeholder='Categoria' 
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />
            <button 
                type="submit"
                onClick={handleCreacteNewTransaction}
                >
                Cadastrar
            </button>
            <button type='button' className='close-modal' onClick={onRequestClose}>
                <img src={closeImg} alt="Fechar nova transação" />
            </button>
        </Container>
       


      </Modal>
    )
}