import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const ErrorNumber = styled.span`
  border-right: 2px solid;
  font-size: 26px;
  padding: 0 15px 0 15px;
  text-align: center;
`

export const Text = styled.span`
  padding: 10px;
  font-size: 18px;
`

export const BackLink = styled(Link)`
  color: #008eb3;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`
