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

    box-shadow: 5px 0px 30px 10px rgba(0, 0, 0, 0.2);

    .book-header {
      height: 68px;
      margin-bottom: 0.5rem;
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .book-content {
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 132px;
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
      background: ${theme.colors.secondary};
      z-index: 5;
      border-radius: 0.5rem;
      color: white;
      padding: 1rem;
      opacity: 0;
      transition: 140ms ease;
    }

    .book-bottom {
      position: absolute;
      bottom: 1rem;
    }

    &:hover {
      .book-overlay {
        opacity: 1;
        transition: 140ms ease;
        cursor: pointer;
      }
    }

    .cover-replace {
      background-color: ${theme.colors.secondary};
      height: 100%;
      width: 100%;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 600;
    }

    @media screen and (max-width: 1024px) {
      .book-overlay {
        background-color: #0000009d;
        opacity: 1;
      }
      .cover-replace {
        display: none;
      }
    }
  `}
`
