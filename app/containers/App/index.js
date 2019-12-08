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

import Login from 'pages/Login/Loadable'
import About from 'pages/About/Loadable'
import ProductsList from 'pages/ProductsList/Loadable'
import ProductEdit from 'pages/ProductEdit/Loadable'
import ProductShow from 'pages/ProductShow/Loadable'
import NotFound from 'pages/NotFound/Loadable'

import GlobalStyle from '../../global-styles'

export default function App() {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/products/:productId/edit" component={ProductEdit} />
        <Route path="/products/:productId" component={ProductShow} />
        <Route path="/products" component={ProductsList} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </>
  )
}
