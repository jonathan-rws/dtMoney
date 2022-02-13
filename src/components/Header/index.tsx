import logoImg from "../../assets/logo.svg"
import { Button, Container, Content } from "./styles"

interface HeaderProps {
    onOpenNewTransactionModal : ()=> void
        
    }


export function Header({onOpenNewTransactionModal}: HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <Button onClick={onOpenNewTransactionModal} >Nova transação</Button>
            </Content>
        </Container>
    )
}