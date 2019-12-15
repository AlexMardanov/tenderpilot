import styled from 'styled-components'
import { theme } from 'theme'

export const Table = styled.table`
  width: 100%;

  td {
    border: 1px solid #555;
    padding: 2px 10px;
  }

  tr:hover {
    background: rgba(228, 219, 191, 0.4);
  }
`
export const ShowButton = styled.button`
  width: 100%;
  margin: 3px 0;
  background: ${theme.colors.baseColor};
  border: none;
  color: ${theme.colors.white};
  padding: 2px 0;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    opacity: 0.9;
  }
`

export const RemoveButton = styled.button`
  width: 100%;
  margin: 3px 0;
  background: #b10f0f;
  border: none;
  color: ${theme.colors.white};
  padding: 2px 0;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    opacity: 0.9;
  }
`
