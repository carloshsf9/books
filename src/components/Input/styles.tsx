import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: #2b2b2b;
    border-radius: 0.5rem;
    height: 2.5rem;
    color: white;
    position: relative;

    .input {
      width: 100%;
      height: 100%;
      background: none;
      border: none;
      padding: 0 1rem;
    }

    .icon {
      position: absolute;
      right: 1rem;
    }
  `}
`
