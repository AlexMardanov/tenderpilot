/**
 *
 * Header
 *
 */

import React from 'react'
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import messages from './messages'

import logo from './logo.png'

const Wrapper = styled.header`
  background: #e4dbbf;
  padding: 0.5rem 1rem;
`

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export function Header() {
  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="logo" />
        <FormattedMessage {...messages.header} />
      </Container>
    </Wrapper>
  )
}

Header.propTypes = {}

export default Header
