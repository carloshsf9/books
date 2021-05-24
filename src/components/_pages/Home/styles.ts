import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;

    .books-container {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      padding: 3rem 2rem;
    }

    .not-found {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h1 {
        margin-bottom: 2rem;
        max-width: 500px;
        text-align: center;
        font-size: 2rem;
      }
    }

    @media screen and (max-width: 1024px) {
      .books-container {
        padding: 3rem 1rem;
        justify-content: center;
      }
      flex-direction: column;
    }
  `}
`