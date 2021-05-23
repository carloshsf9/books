import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: white;
    position: relative;

    .goBack-button {
      position: absolute;
      left: 2rem;
      top: 2rem;
      transition: 140ms ease;

      &:hover {
        cursor: pointer;
        opacity: 0.5;
        transition: 140ms ease;
      }
    }

    .title-container {
      display: flex;
      gap: 2.5rem;
      align-items: center;
    }

    .favorite {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .content {
      max-width: ${theme.grid.container};
      padding: 4rem 1rem;
      margin-top: 1rem;
    }

    .header {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
    }

    .book-description {
      margin-top: 2rem;
      line-height: 2rem;
      max-width: 800px;
      text-align: justify;
    }

    .publishDate {
      font-size: 0.75rem;
      color: gray;
      margin-top: 1rem;
    }

    .cover {
      width: 290px;
      height: 320px;
      object-fit: cover;
    }

    @media screen and (max-width: 1024px) {
      .header {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      h1 {
        font-size: 1.5rem;
      }
    }
  `}
`