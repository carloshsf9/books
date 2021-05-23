import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: white;

    .title-container {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .favorite {
      cursor: pointer;
    }

    .content {
      max-width: ${theme.grid.container};
      padding: 4rem 1rem;
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
  `}
`