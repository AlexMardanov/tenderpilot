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
import ProductCreate from 'pages/ProductCreate/Loadable'
import NotFound from 'pages/NotFound/Loadable'

import { Layout } from 'components/Layout'

import GlobalStyle from 'global-styles'

export default function App() {
  return (
    <Layout>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} exact />
        <Route path="/about" component={About} exact />
        <Route path="/products/create" component={ProductCreate} exact />
        <Route path="/products/:productId/edit" component={ProductEdit} exact />
        <Route path="/products/:productId" component={ProductShow} exact />
        <Route path="/products" component={ProductsList} exact />
        <Route component={NotFound} exact />
      </Switch>
      <GlobalStyle />
    </Layout>
  )
}
