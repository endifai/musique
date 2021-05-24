import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { SignInScreen } from './auth/sign-in.screen'
import { SignUpScreen } from './auth/sign-up.screen'
import { MainScreen } from './main/main.screen'
import { StoreProvider } from './stores/store-context'
import { GlobalStyle } from './theme/theme'

const App = () => {
  return (
    <React.Fragment>
      <StoreProvider>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/sign-up" component={SignUpScreen} exact />
            <Route path="/sign-in" component={SignInScreen} exact />

            <Route path="/" component={MainScreen} />
          </Switch>
        </Router>
      </StoreProvider>
    </React.Fragment>
  )
}

export default App
