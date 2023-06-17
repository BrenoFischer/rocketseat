import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return(
        <div>
            <Header />
            <Summary />


            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Site Development</td>
                            <td>
                                <PriceHighlight variant="income">
                                    $12,000.00
                                </PriceHighlight>
                            </td>
                            <td>Sale</td>
                            <td>17/06/1992</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburger</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - $59.00
                                </PriceHighlight>
                            </td>
                            <td>Food</td>
                            <td>10/06/1992</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}