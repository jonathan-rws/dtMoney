import { Container } from "./styles";
import githubImg from "../../assets/github.svg"
import linkedinImg from "../../assets/linkedin.svg"

export function Footer(){
    return(
        <Container>
            <span>Aplicação desenvoldida por </span><span>Jonathan Martins</span>
            <div>
                <a href="https://github.com/jonathan-rws/dtMoney">
                    <img src= {githubImg} alt="Acessar github" />
                </a>
                <a href="https://www.linkedin.com/in/jonathan-rws/">
                    <img src= {linkedinImg} alt="Acessar github" />
                </a>
            </div>
            <h3>Trilha ReactJS | Rocketseat</h3>
        </Container>
    )
}