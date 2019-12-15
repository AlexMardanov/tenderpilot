/**
 *
 * Link
 *
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Domain from '@material-ui/icons/Domain'
import Dashboard from '@material-ui/icons/Dashboard'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Settings from '@material-ui/icons/Settings'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import AssignmentInd from '@material-ui/icons/AssignmentInd'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import Gavel from '@material-ui/icons/Gavel'
import Receipt from '@material-ui/icons/Receipt'
import Category from '@material-ui/icons/Category'

// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import { theme } from 'theme'

const StyledLink = styled(NavLink)`
  color: ${theme.colors.text};
  text-decoration: none;
  padding: 10px 15px 10px 25px;
  display: flex;
  text-transform: uppercase;
  width: 100%;
  align-items: center;

  &:hover {
    color: ${theme.colors.baseColor};
  }

  &.active {
    font-weight: bold;
    color: ${theme.colors.baseColor};
  }

  svg {
    font-size: 25px;
    margin-right: 5px;
  }
`

export function Link(props) {
  const { children, ...rest } = props

  let icon = null

  switch (props.to) {
    case '/dashboard':
      icon = <Dashboard />
      break
    case '/buyers':
      icon = <ShoppingCart />
      break
    case '/suppliers':
      icon = <BusinessCenter />
      break
    case '/categories':
      icon = <Category />
      break
    case '/products':
      icon = <Domain />
      break
    case '/tenders':
      icon = <Gavel />
      break
    case '/quotations':
      icon = <Receipt />
      break
    case '/contracts':
      icon = <AssignmentInd />
      break
    case '/orders':
      icon = <AddShoppingCart />
      break
    case '/settings':
      icon = <Settings />
      break

    default:
      break
  }

  return (
    <StyledLink {...rest}>
      {icon} {children}
    </StyledLink>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
}

export default Link
