/**
 *
 * Footer
 *
 */

import React from 'react'
// import PropTypes from 'prop-types';
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import LocaleToggle from 'containers/LocaleToggle'
import messages from './messages'

const Wrapper = styled.footer`
  background: #008eb3;
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

Footer.propTypes = {}

export default Footer
