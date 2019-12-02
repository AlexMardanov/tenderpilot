/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import messages from './messages'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const ErrorNumber = styled.span`
  border-right: 2px solid;
  font-size: 26px;
  padding: 0 15px 0 15px;
  text-align: center;
`

const Text = styled.span`
  padding: 10px;
  font-size: 18px;
`

const BackLink = styled(Link)`
  color: #008eb3;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

export default function NotFound() {
  return (
    <Wrapper>
      <ErrorNumber>404</ErrorNumber>
      <Text>
        <FormattedMessage {...messages.title} />{' '}
        <BackLink to="/">
          <FormattedMessage {...messages.back} />
        </BackLink>
      </Text>
    </Wrapper>
  )
}
