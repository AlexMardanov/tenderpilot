import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../../theme/theme'

export const MenuLink = styled(Link)`
  color: ${theme.colors.text};
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 20px;
`

export default MenuLink
