import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: #1a1a1a;
    height: 100vh;
    width: 100%;
    min-width: 280px;
    max-width: 38rem;
    padding: 3rem 1.5rem;
    position: sticky;
    top: 0;
  `}
`
