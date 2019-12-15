/**
 *
 * Title
 *
 */

import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { theme } from 'theme'

const useStyles = makeStyles({
  wrapper: {
    marginBottom: 20,
    padding: '5px 20px 21px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.baseColor,
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.titleSize,
    margin: 0,
    fontWeight: 500,
    marginTop: '16px',
  },
  input: {
    width: '200px',
  },
})

export function Title({ searchLabel, handleSearch }) {
  const classes = useStyles()

  return (
    <Paper className={classes.wrapper} id="standard-basic">
      <h1 className={classes.title}>Products</h1>
      <TextField label={searchLabel} className={classes.input} onChange={handleSearch} />
    </Paper>
  )
}

Title.propTypes = {
  searchLabel: PropTypes.node,
  handleSearch: PropTypes.func,
}

export default Title
