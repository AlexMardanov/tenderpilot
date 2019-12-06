/**
 *
 * Footer
 *
 */

import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import LocaleToggle from 'containers/LocaleToggle'
import messages from './messages'
import { theme } from '../../theme/theme'

const Wrapper = styled.footer`
  background: ${theme.colors.baseColor};
  color: #eee;
  padding: 1rem 0;
`

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

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
