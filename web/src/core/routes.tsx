import { ReactElement, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { SignInScreen } from '../auth/sign-in.screen'
import { SignUpScreen } from '../auth/sign-up.screen'
import { MainScreen } from '../main/main.screen'
import { useStore } from '../stores/store-context'

export const Routes = (): ReactElement => {
  const store = useStore()

  useEffect(() => {
    store?.userStore.getMeAsync()
  }, [store?.userStore])

  return (
    <Router>
      <Switch>
        <Route path="/sign-up" component={SignUpScreen} exact />
        <Route path="/sign-in" component={SignInScreen} exact />

        <Route path="/" component={MainScreen} />
      </Switch>
    </Router>
  )
}
