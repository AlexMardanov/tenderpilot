/**
 *
 * Footer
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'

import LocaleToggle from 'containers/LocaleToggle'
import messages from './messages'
import { Wrapper, Container } from './styled'

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <FormattedMessage {...messages.header} />
        <LocaleToggle />
      </Container>
    </Wrapper>
  )
}

export default Footer
