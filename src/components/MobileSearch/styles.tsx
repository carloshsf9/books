import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;
    background-color: #1a1a1a;
    width: 100%;
    min-height: 80px;
    position: sticky;
    top: 0;
    z-index: 10;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    transition: height 180ms ease;

    flex-direction: column;

    .input-container {
      width: 100%;
      margin-top: 1rem;
      max-width: 580px;
    }

    .results-container {
      padding: 0 1rem;
      padding-top: 1rem;
      max-width: 540px;
      width: 100%;
      line-height: 2rem;
    }

    @media screen and (max-width: 1024px) {
      display: flex;
    }
  `}
`
