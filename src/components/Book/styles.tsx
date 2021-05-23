import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-radius: 0.5rem;
    width: 270px;
    height: 300px;
    background-color: black;

    flex-direction: column;
    position: relative;

    .book-header {
      height: 68px;
      margin-bottom: 0.5rem;
    }

    .book-content {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 120px;
    }

    .book-picture {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    .book-overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.85);
      z-index: 5;
      border-radius: 0.5rem;
      color: white;
      padding: 1rem;
      opacity: 0;
      transition: 140ms ease;
    }

    &:hover {
      .book-overlay {
        opacity: 1;
        transition: 140ms ease;
        cursor: pointer;
      }
    }
  `}
`
