import { styled } from 'styled-components'

export const IssuePageContainer = styled.div`
  width: 100%;
  max-width: 864px;

  margin: 0 auto;
`

export const IssueInformationContainer = styled.div`
  margin-top: -5.5rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.25rem;

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

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }
`

export const IssueInformationIconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: 0.8rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    span {
      color: ${(props) => props.theme['base-label']};
      line-height: 160%;
    }
  }
`

export const IssueBody = styled.div`
  padding: 2.5rem 2rem;
`
