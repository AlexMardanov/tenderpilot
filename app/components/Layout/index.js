/**
 *
 * Layout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Sidebar } from 'components/Sidebar'

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    padding: '10px 20px',
    fontSize: '0.9rem',
  },
  item: {
    maxWidth: 240,
  },
})

export function Layout({ children }) {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Grid container className={classes.container} justify="space-between" spacing={3}>
        <Grid item sm className={classes.item}>
          <Hidden smDown>
            <Sidebar />
          </Hidden>
        </Grid>
        <Grid item sm={12} md>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
