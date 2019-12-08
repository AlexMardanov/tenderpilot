import styled from 'styled-components'
import { Button } from 'components/Button'
import { Link } from 'react-router-dom'
import { theme } from '../../theme/theme'

export const StyledButton = styled(Button)`
  margin-right: 20px;
`

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  align-items: center;
`

export const Logo = styled.img`
  max-width: 170px;
`

export const Wrapper = styled.header`
  background: #e4dbbf;
  padding: 0.5rem 1rem;
`
export const MenuLink = styled(Link)`
  color: ${theme.colors.text};
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 20px;
`
