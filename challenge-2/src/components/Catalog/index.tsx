import { useEffect, useState } from 'react'
import { CoffeeCard } from '../CoffeeCard'
import { CatalogContainer, CoffeeCardList } from './styles'
import { CATALOG_DATA, CatalogDataItem } from '../../catalog'

export function Catalog() {
  const [catalog, setCatalog] = useState<CatalogDataItem[]>([])

  useEffect(() => {
    setCatalog(CATALOG_DATA)
  }, [])

  return (
    <CatalogContainer>
      <h1>Our coffees</h1>
      <CoffeeCardList>
        {catalog.map((coffee) => {
          const { id, img, tags, title, text, price } = coffee
          return (
            <CoffeeCard
              key={id}
              img={img}
              tags={tags}
              title={title}
              text={text}
              price={price}
            />
          )
        })}
      </CoffeeCardList>
    </CatalogContainer>
  )
}
