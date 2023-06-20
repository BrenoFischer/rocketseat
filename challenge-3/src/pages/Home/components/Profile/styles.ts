import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 864px;

  padding: 2rem 2.5rem;

  margin: 0 auto;

  margin-top: -5.5rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  gap: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.5rem;

    h2 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-title']};
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;

      font-weight: 700;
      font-size: 12px;
      line-height: 160%;

      text-transform: uppercase;

      text-decoration: none;

      color: ${(props) => props.theme.blue};
    }
  }

  p {
    line-height: 160%;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 160%;
    }
  }
`
