import React from 'react'
import styled from 'styled-components'

import logo from '../images/logo.png'

export const Image = styled.img`
  max-width: 170px;
`

export function Logo() {
  return <Image src={logo} alt="logo" />
}

export default Logo
