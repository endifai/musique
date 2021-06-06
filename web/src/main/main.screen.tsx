import { observer } from 'mobx-react'
import { ReactElement, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router'

import { RoutesEnum } from '../core/routes.enum'
import { ProfileScreen } from '../profile/profile.screen'
import { useStore } from '../stores/store-context'
import { Box } from '../ui/box'
import { Header } from '../ui/header'
import { SideBar } from '../ui/sidebar'

export const MainScreen = observer((): ReactElement => {
  const history = useHistory()
  const store = useStore()

  useEffect(() => {
    if (store && !store?.userStore.user && !store?.userStore.loading) {
      history.push(RoutesEnum.SignIn)
    }
  }, [history, store, store?.userStore.loading, store?.userStore.user])

  return (
    <Box display="flex" height="100%">
      <SideBar />

      <Box display="flex" flex="1" flexDirection="column">
        <Header />

        <Switch>
          <Route path={RoutesEnum.Profile} component={ProfileScreen} />
        </Switch>
      </Box>
    </Box>
  )
})
