import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'

const LoadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

export default (
  <Router>
    <Route path="/" getComponent={LoadHomePage} />
  </Router>
)
