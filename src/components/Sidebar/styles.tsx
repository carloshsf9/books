import styled, { css } from 'styled-components'

interface ContainerProps {
  isActive?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isActive }) => css`
    background-color: #1a1a1a;
    height: 100vh;
    width: ${isActive ? '100%' : '100px'};
    max-width: 38rem;
    padding: 3rem 1.5rem;
    position: sticky;
    top: 0;
    bottom: 0;
    color: white;
    transition: 180ms ease;
    box-shadow: 5px 0px 30px 10px rgba(0, 0, 0, 0.35);

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      position: relative;
      padding-right: 1.5rem;

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

    .filter {
      display: ${isActive ? 'flex' : 'none'};
      align-items: center;
      gap: 1rem;
    }

    .search,
    .search-list {
      display: ${isActive ? 'block' : 'none'};
    }

    .results-length {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      opacity: 0.25;
    }
    @media screen and (max-width: 1024px) {
      display: none;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         '
    }
  `}
`

interface FilterButton {
  isActive?: boolean
}

export const FilterButton = styled.button<FilterButton>`
  ${({ theme, isActive }) => css`
    border: 1px solid ${isActive ? theme.colors.secondary : 'white'};
    border-radius: 0.5rem;
    background: none;
    padding: 0.25rem 1rem;
    color: white;
    cursor: pointer;
    transition: 140ms ease;
    background-color: ${isActive ? theme.colors.secondary : 'none'};

    display: flex;
    gap: 0.5rem;
    align-items: center;

    &:hover {
      border: 1px solid ${theme.colors.secondary};
      background-color: ${theme.colors.secondary};
    }
  `}
`
