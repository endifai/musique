import { ReactElement, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { SignInScreen } from '../auth/sign-in.screen'
import { SignUpScreen } from '../auth/sign-up.screen'
import { MainScreen } from '../main/main.screen'
import { useStore } from '../stores/store-context'
import { RoutesEnum } from './routes.enum'

export const Routes = (): ReactElement => {
  const store = useStore()

  useEffect(() => {
    store?.userStore.getMeAsync()
  }, [store?.userStore])

  return (
    <Router>
      <Switch>
        <Route path={RoutesEnum.SignUp} component={SignUpScreen} exact />
        <Route path={RoutesEnum.SignIn} component={SignInScreen} exact />

        <Route path={RoutesEnum.Root} component={MainScreen} />
      </Switch>
    </Router>
  )
}
