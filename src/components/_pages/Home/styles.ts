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
  `}
`
