/**
 *
 * Sidebar
 *
 */

import React from 'react'
import Paper from '@material-ui/core/Paper'
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'

// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import { Link } from './components/Link'

const useStyles = makeStyles({
  wrapper: {
    padding: '10px 0',
  },
})

export function Sidebar() {
  const classes = useStyles()

  return (
    <Paper className={classes.wrapper}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/buyers">Buyers</Link>
      <Link to="/suppliers">Suppliers</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/products">Products</Link>
      <Link to="/tenders">Tenders</Link>
      <Link to="/quotations">Quotations</Link>
      <Link to="/contracts">Contracts</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/settings">Settings</Link>
    </Paper>
  )
}

Sidebar.propTypes = {}

export default Sidebar
