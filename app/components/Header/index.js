/**
 *
 * Header
 *
 */

import React from 'react'
// import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import { Button } from 'components/Button'
import { Container } from './components/Container'
import { Wrapper } from './components/Wrapper'
import { Logo } from './components/Logo'
import { MenuLink } from './components/MenuLink'

const MtStyledButton = styled(Button)`
  margin-right: 20px;
`

// import messages from './messages'

export function Header() {
  return (
    <Wrapper>
      <Container maxWidth="md">
        <Logo />
        <div>
          <MenuLink to="/">HOME</MenuLink>
          <MenuLink to="/about">ABOUT US</MenuLink>
          <MtStyledButton color="outline" to="/">
            REQUEST FOR REGISTRATION
          </MtStyledButton>
          <Button color="primary" to="/login">
            LOGIN
          </Button>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Header
