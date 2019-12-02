/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Layout } from 'components/Layout'
import messages from './messages'

export default function LoginPage() {
  return (
    <Layout>
      <FormattedMessage {...messages.header} />
    </Layout>
  )
}
