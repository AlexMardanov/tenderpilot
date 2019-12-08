/**
 *
 * Layout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Wrapper } from './styled'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
