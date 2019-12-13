/**
 *
 * Loader
 *
 */

import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import { makeStyles } from '@material-ui/core/styles'
import { theme } from 'theme/theme'

const useStyles = makeStyles({
  overlay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, .2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    color: theme.colors.baseColor,
  },
})

export function Loader() {
  const classes = useStyles()

  return (
    <div className={classes.overlay}>
      <CircularProgress size={50} />
    </div>
  )
}

export default Loader
