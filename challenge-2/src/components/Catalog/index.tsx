import { CoffeeCard } from '../CoffeeCard'
import { CatalogContainer, CoffeeCardList } from './styles'

export function Catalog() {
  return (
    <CatalogContainer>
      <h1>Our coffees</h1>
      <CoffeeCardList>
        <CoffeeCard />
      </CoffeeCardList>
    </CatalogContainer>
  )
}
