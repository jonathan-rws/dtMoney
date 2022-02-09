import logoImg from "../../assets/logo.svg"
import { Button, Container, Content } from "./styles"

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <Button>Nova transação</Button>
            </Content>
        </Container>
    )
}