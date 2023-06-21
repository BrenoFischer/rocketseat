import { Header } from '../../components/Header'
import { Blog } from './components/Blog'
import { Profile } from './components/Profile'

export function Home() {
  return (
    <div>
      <Header />
      <Profile />
      <Blog />
    </div>
  )
}
