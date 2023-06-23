import { useEffect, useState } from 'react'

import { Blog } from './components/Blog'
import { Profile } from './components/Profile'
import { api } from '../../lib/axios'

import Avatar from '../../assets/avatar.png'
import { IssuesProvider } from '../../contexts/IssuesContext'

export interface User {
  name: string
  img: string
  bio: string
  username: string
  followers: number
  url: string
}

const defaultUserState = {
  name: 'Breno Perricone',
  img: Avatar,
  bio: 'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.',
  username: 'BrenoFischer',
  url: 'https://github.com/BrenoFischer',
  followers: 23,
}

export function Home() {
  const [user, setUser] = useState(defaultUserState as User)

  async function fetchUser(username = 'BrenoFischer') {
    const response = await api.get(`users/${username}`)

    setUser({
      name: response.data.name,
      username: response.data.login,
      img: response.data.avatar_url,
      bio: response.data.bio,
      followers: response.data.followers,
      url: response.data.html_url,
    })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      <Profile user={user} />
      <IssuesProvider>
        <Blog />
      </IssuesProvider>
    </div>
  )
}
