/**
 *
 * Layout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

const Wrapper = styled.main`
  flex-grow: 1;
`

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
  children: PropTypes.object,
}

export default Layout
