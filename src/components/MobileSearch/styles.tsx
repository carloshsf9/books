import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;
    background-color: #1a1a1a;
    width: 100%;
    min-height: 80px;
    top: 0;
    z-index: 10;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    transition: height 180ms ease;

    flex-direction: column;
    .input {
      width: 100%;
    }
    .filter-button {
      cursor: pointer;
    }
    .input-container {
      width: 100%;
      margin-top: 1rem;
      max-width: 580px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .results-container {
      padding: 0 1rem;
      padding-top: 1rem;
      max-width: 540px;
      width: 100%;
      line-height: 2rem;
    }

    .result {
      max-height: 72px;
      white-space: pre-wrap;
      overflow: hidden;
      list-style: none;
      border-bottom: 1px solid #ffffff1d;
      margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 1024px) {
      display: flex;
    }
  `}
`
