/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'

import messages from './messages'
import { Wrapper, Text, BackLink, ErrorNumber } from './styled'

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
