import { SearchFormContainer } from "./styles";

import { MagnifyingGlass } from '@phosphor-icons/react'

export function SearchForm() {
    return(
        <SearchFormContainer>
            <input type="text" placeholder="Search for Transaction" />

            <button type="submit">
                <MagnifyingGlass size={20} />
                Search    
            </button>
        </SearchFormContainer>
    )
}