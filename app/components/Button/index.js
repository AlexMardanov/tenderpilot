/**
 *
 * Button
 *
 */

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { theme } from 'theme'

export const Button = styled(Link)`
  background: ${props => (props.color === 'primary' ? theme.colors.baseColor : 'none')};
  color: ${props => (props.color === 'outline' ? theme.colors.baseColor : theme.colors.white)};
  padding: 4px 15px;
  border-radius: 45px;
  border: 1px solid ${theme.colors.baseColor};
  box-shadow: none;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${props => (props.color === 'primary' ? 'none' : theme.colors.baseColor)};
    color: ${props => (props.color === 'outline' ? theme.colors.white : theme.colors.baseColor)};
  }
`

export default Button
