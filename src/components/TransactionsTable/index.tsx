import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="title">Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de sites</td>
                        <td className="deposit">R$1,247,00</td>
                        <td>Entrada</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$936,00</td>
                        <td>Saída</td>
                        <td>20/02/2021</td>
                    </tr>
                  
                </tbody>
            </table>
        </Container>
    )
}