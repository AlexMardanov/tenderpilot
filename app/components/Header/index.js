/**
 *
 * Header
 *
 */

import React from 'react'
// import { FormattedMessage } from 'react-intl'

import { Button } from 'components/Button'

import { Container, Wrapper, Logo, MenuLink, StyledButton } from './styled'
import logo from './images/logo.png'

// import messages from './messages'

export function Header() {
  return (
    <Wrapper>
      <Container maxWidth="md">
        <Logo src={logo} />
        <div>
          <MenuLink to="/">HOME</MenuLink>
          <MenuLink to="/about">ABOUT US</MenuLink>
          <MenuLink to="/products">PRODUCTS</MenuLink>
          <StyledButton color="outline" to="/">
            REQUEST FOR REGISTRATION
          </StyledButton>
          <Button color="primary" to="/login">
            LOGIN
          </Button>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Header
