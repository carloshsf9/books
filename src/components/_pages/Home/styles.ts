import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;

    .books-container {
      display: flex;
      justify-content: center;
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
      padding: 0 1rem;

      & > h1 {
        margin-bottom: 2rem;
        max-width: 500px;
        text-align: center;
        font-size: 2rem;
      }
    }

    .pagination-container {
      position: sticky;
      bottom: 0;
      width: 100%;
      background-color: ${theme.colors.primary};
      z-index: 10;
      padding: 1.5rem 0;
    }

    .pagination {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .page {
      width: 100%;
      display: flex;
      margin-top: 0.5rem;
      justify-content: center;
    }

    .pagination-button:hover {
      opacity: 0.5;
      transition: 140ms ease;
      cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
      .books-container {
        padding: 3rem 1rem;
        justify-content: center;
      }
      flex-direction: column;
      .not-found > h1 {
        font-size: 1.5rem;
      }
    }
  `}
`
