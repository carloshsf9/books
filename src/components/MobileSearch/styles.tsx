import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;
    background-color: #1a1a1a;
    width: 100%;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 5;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

    .input-container {
      width: 100%;
      max-width: 580px;
    }

    @media screen and (max-width: 1024px) {
      display: flex;
    }
  `}
`
