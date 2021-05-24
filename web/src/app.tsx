import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { SignInScreen } from './auth/sign-in.screen'
import { SignUpScreen } from './auth/sign-up.screen'
import { GlobalStyle } from './theme/theme'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/sign-up" component={SignUpScreen} exact />
          <Route path="/sign-in" component={SignInScreen} exact />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
