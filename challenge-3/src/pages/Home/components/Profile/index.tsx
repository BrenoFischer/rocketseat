import { LinksContainer, ProfileContainer } from './styles'

import { ArrowUpRight, GithubLogo, Users } from '@phosphor-icons/react'
import { User } from '../..'

interface ProfileProps {
  user: User
}

export function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={user.img} alt="Github profile picture" />
      <div>
        <header>
          <h2>{user.name}</h2>
          <a href={user.url} target="_blank" rel="noreferrer">
            <span>Github</span> <ArrowUpRight size={12} />
          </a>
        </header>
        <p>{user.bio}</p>
        <LinksContainer>
          <div>
            <GithubLogo size={18} />
            <span>{user.username}</span>
          </div>
          <div>
            <Users size={18} />
            <span>{user.followers.toString()} Followers</span>
          </div>
        </LinksContainer>
      </div>
    </ProfileContainer>
  )
}
