/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import LoginPage from 'containers/LoginPage/Loadable'
import BooksPageList from 'containers/BooksPage/List/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import GlobalStyle from '../../global-styles'

export default function App() {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={LoginPage} />
        <Route path="/books" component={BooksPageList} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </>
  )
}
