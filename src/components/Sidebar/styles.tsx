import styled, { css } from 'styled-components'

interface ContainerProps {
  isActive?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ isActive }) => css`
    background-color: #1a1a1a;
    height: 100vh;
    width: ${isActive ? '100%' : '100px'};
    max-width: 38rem;
    padding: 3rem 1.5rem;
    position: sticky;
    top: 0;
    color: white;
    transition: 180ms ease;
    box-shadow: 5px 0px 30px 10px rgba(0, 0, 0, 0.35);

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      position: relative;

      h1 {
        display: ${isActive ? 'block' : 'none'};
      }
    }
    .toggle-button {
      position: absolute;
      right: -2rem;

      &:hover {
        opacity: 0.5;
        transition: 160ms ease;
        cursor: pointer;
      }
    }

    .search-list {
      padding: 1rem 1.5rem;
      line-height: 2rem;
      overflow-y: auto;
      height: 100%;
      margin-top: 1rem;
      padding-bottom: 5rem;

      li {
        opacity: 0.3;
        cursor: pointer;
        &:hover {
          transition: 140ms ease;
          opacity: 1;
        }
      }
    }

    .search-list::-webkit-scrollbar-track {
      background-color: #111111;
    }

    .search-list::-webkit-scrollbar {
      width: 10px;
      background-color: #1d1d1d;
    }

    .search-list::-webkit-scrollbar-thumb {
      background-color: #2b2b2b;
    }

    .search,
    .search-list {
      display: ${isActive ? 'block' : 'none'};
    }
  `}
`
