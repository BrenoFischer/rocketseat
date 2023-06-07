import { useEffect, useState, useContext } from 'react'
import { CoffeeCard } from '../CoffeeCard'
import { CatalogContainer, CoffeeCardList } from './styles'
import { CATALOG_DATA, CatalogDataItem } from '../../../../catalog'
import { CartContext } from '../../../../contexts/CartContext'

export function Catalog() {
  const [catalog, setCatalog] = useState<CatalogDataItem[]>([])
  const { coffees } = useContext(CartContext)

  useEffect(() => {
    setCatalog(CATALOG_DATA)
  }, [])

  function showCoffees() {
    console.log(coffees)
  }

  return (
    <CatalogContainer>
      <h1>Our coffees</h1>
      <CoffeeCardList>
        {catalog.map((coffee) => {
          const { id, img, tags, title, text, price } = coffee
          const newCoffee = {
            img,
            tags,
            title,
            text,
            price,
          }

          return <CoffeeCard key={id} coffee={newCoffee} />
        })}
      </CoffeeCardList>
      <button onClick={showCoffees}>Show Coffess</button>
    </CatalogContainer>
  )
}
