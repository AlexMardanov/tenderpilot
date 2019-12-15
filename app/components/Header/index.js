/**
 *
 * Header
 *
 */

import React from 'react'
// import { FormattedMessage } from 'react-intl'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

// import { Button } from 'components/Button'
import Button from '@material-ui/core/Button'

import { theme } from 'theme'
import logo from './images/logo.png'

// import messages from './messages'

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
  },
  link: {
    color: theme.colors.text,
    textTransform: 'uppercase',
    textDecoration: 'none',
    marginRight: 20,

    '&:hover': {
      color: theme.colors.baseColor,
    },
  },
  header: {
    background: '#e4dbbf',
    padding: '10px 20px',
    marginBottom: 10,
  },
  logo: {
    maxWidth: 170,
  },
  button: {
    marginRight: 10,
  },
})

export function Header() {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <Grid container spacing={3} justify="space-between" className={classes.container}>
        <Grid item>
          <img src={logo} alt="logo" className={classes.logo} />
        </Grid>
        <Grid item>
          <Button to="/" className={classes.link} component={Link}>
            HOME
          </Button>
          <Button to="/about" className={classes.link} component={Link}>
            ABOUT US
          </Button>
          <Button
            variant="outlined"
            color="primary"
            to="/registration"
            className={classes.button}
            component={Link}
          >
            REQUEST FOR REGISTRATION
          </Button>
          <Button variant="contained" color="primary" to="/login" component={Link}>
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header
