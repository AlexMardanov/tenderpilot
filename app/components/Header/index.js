/**
 *
 * Header
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Button } from 'components/Button'
import { Container } from './components/Container'
import { Wrapper } from './components/Wrapper'
import { Logo } from './components/Logo'

import messages from './messages'

export function Header() {
  return (
    <Wrapper>
      <Container maxWidth="md">
        <Logo />
        <Button>
          <FormattedMessage {...messages.header} />
        </Button>
      </Container>
    </Wrapper>
  )
}

export default Header
