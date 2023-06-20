import { LinksContainer, ProfileContainer } from './styles'
import Avatar from '../../../../assets/avatar.png'

import { ArrowUpRight, GithubLogo, Users } from '@phosphor-icons/react'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={Avatar} alt="Github profile picture" />
      <div>
        <header>
          <h2>Breno Perricone</h2>
          <a
            href="https://github.com/BrenoFischer"
            target="_blank"
            rel="noreferrer"
          >
            <span>Github</span> <ArrowUpRight size={12} />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <LinksContainer>
          <div>
            <GithubLogo size={18} />
            <span>BrenoFischer</span>
          </div>
          <div>
            <Users size={18} />
            <span>32 Followers</span>
          </div>
        </LinksContainer>
      </div>
    </ProfileContainer>
  )
}
