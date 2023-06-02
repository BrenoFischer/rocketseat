import Mocaccino from './assets/coffees/mocaccino.png'
import Irish from './assets/coffees/irish.png'
import Espresso from './assets/coffees/espresso.png'
import EspressoAmerican from './assets/coffees/espresso-american.png'
import EspressoCream from './assets/coffees/espresso-cream.png'
import Ice from './assets/coffees/ice.png'
import WithMilk from './assets/coffees/with-milk.png'
import Latte from './assets/coffees/latte.png'
import Capuccino from './assets/coffees/capuccino.png'
import Macchiato from './assets/coffees/macchiato.png'
import HotChocolate from './assets/coffees/hot-chocolate.png'
import Cuban from './assets/coffees/cuban.png'
import Hawaiin from './assets/coffees/hawaiin.png'
import Arabic from './assets/coffees/arabic.png'

export interface CatalogDataItem {
  id: number
  img: string
  tags: string[]
  title: string
  text: string
  price: string
}

export const CATALOG_DATA = [
  {
    id: 1,
    img: Mocaccino,
    tags: ['Traditional', '+ Milk'],
    title: 'Mocaccino',
    text: 'Espresso coffee with chocolate, a little milk and foam',
    price: '9,90',
  },
  {
    id: 2,
    img: Irish,
    tags: ['Special', '+ Alchool'],
    title: 'Irish',
    text: 'Drink based on coffee, Irish whiskey, sugar and whipped cream',
    price: '9,90',
  },
  {
    id: 3,
    img: Espresso,
    tags: ['Traditional'],
    title: 'Espresso',
    text: 'The traditional coffee made with hot water and coffee grains',
    price: '9,90',
  },
  {
    id: 4,
    img: EspressoAmerican,
    tags: ['Traditional'],
    title: 'American Espresso',
    text: 'Diluted espresso, less intense than the traditional one',
    price: '9,90',
  },
  {
    id: 5,
    img: EspressoCream,
    tags: ['Traditional'],
    title: 'Cream Espresso',
    text: 'Traditional espresso with creamy foam',
    price: '9,90',
  },
  {
    id: 6,
    img: Ice,
    tags: ['Traditional', '+ Ice'],
    title: 'Ice Coffee',
    text: 'Drink prepared with espresso coffee and ice cubes',
    price: '9,90',
  },
  {
    id: 7,
    img: WithMilk,
    tags: ['Traditional', '+ Milk'],
    title: 'Coffee and Milk',
    text: 'Half and half traditional espresso with steamed milk',
    price: '9,90',
  },
  {
    id: 8,
    img: Latte,
    tags: ['Traditional', '+ Milk'],
    title: 'Latte',
    text: 'A shot of espresso with twice as much milk and creamy foam',
    price: '9,90',
  },
  {
    id: 9,
    img: Capuccino,
    tags: ['Traditional', '+ Milk'],
    title: 'Capuccino',
    text: 'Cinnamon drink made from equal doses of coffee, milk and foam',
    price: '9,90',
  },
  {
    id: 10,
    img: Macchiato,
    tags: ['Traditional', '+ Milk'],
    title: 'Macchiato',
    text: 'Espresso coffee mixed with a little of hot milk and foam',
    price: '9,90',
  },
  {
    id: 11,
    img: HotChocolate,
    tags: ['Special', '+ Milk'],
    title: 'Hot Chocolate',
    text: 'Drink made with chocolate dissolved in hot milk and coffee',
    price: '9,90',
  },

  {
    id: 12,
    img: Cuban,
    tags: ['Special', '+ Alcohool', '+ Ice'],
    title: 'Cuban',
    text: 'Iced espresso drink with rum, cream and mint',
    price: '9,90',
  },
  {
    id: 13,
    img: Hawaiin,
    tags: ['Special'],
    title: 'Hawaiin',
    text: 'Sweet drink prepared with coffee and coconut milk',
    price: '9,90',
  },
  {
    id: 14,
    img: Arabic,
    tags: ['Special'],
    title: 'Arabic',
    text: 'Drink prepared with Arabic coffee beans and spices',
    price: '9,90',
  },
]
