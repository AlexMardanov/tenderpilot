/**
 *
 * Button
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../../theme/theme'

const StyledButton = styled.button`
  background: ${props => props.bgColor};
  color: #fafafa;
  min-width: 120px;
  padding: 2px 15px;
  border-radius: 45px;
  border: solid 2px #008eb3;
  box-shadow: none;
  margin-top: 3px;
  transition: all 0.3s ease 0s;
  margin-top: 5px;
`

export function Button({ onClick, type, children, bgColor }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <StyledButton type={type} onClick={onClick} bgColor={bgColor}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  children: null,
  type: 'button',
  bgColor: colors.baseColor,
  onClick: () => {},
}

export default Button
