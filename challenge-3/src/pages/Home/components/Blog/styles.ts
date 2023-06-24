import { styled } from 'styled-components'

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 864px;

  margin: 0 auto;
  margin-top: 4.5rem;
  margin-bottom: 5rem;

  header {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;

      h3 {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 160%;

        color: ${(props) => props.theme['base-subtitle']};
      }

      span {
        font-size: 0.875rem;

        color: ${(props) => props.theme['base-span']};
      }
    }

    input {
      width: 100%;
      padding: 0.75rem 1rem;

      background: ${(props) => props.theme['base-input']};

      border: 1px solid ${(props) => props.theme['base-border']};
      border-radius: 6px;

      color: ${(props) => props.theme['base-label']};
      font-size: 16px;
      line-height: 160%;

      &:focus {
        border: 1px solid ${(props) => props.theme.blue};
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`

export const CardsContainer = styled.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  list-style: none;

  a {
    all: unset;
  }

  li {
    height: 16.25rem;
    padding: 2rem;

    background: ${(props) => props.theme['base-post']};
    border-radius: 10px;
    border: 2px solid transparent;
    cursor: pointer;

    header {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      margin-bottom: 1.25rem;

      h3 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 160%;

        color: ${(props) => props.theme['base-title']};
      }

      span {
        font-size: 0.8rem;
        line-height: 160%;

        margin-top: 0.35rem;

        color: ${(props) => props.theme['base-span']};

        flex-shrink: 0;
      }
    }

    p {
      line-height: 160%;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &:hover {
      border: 2px solid ${(props) => props.theme['base-label']};
    }
  }
`
