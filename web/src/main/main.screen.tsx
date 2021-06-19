import { observer } from 'mobx-react'
import { ReactElement, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router'
import styled from 'styled-components'

import { RoutesEnum } from '../core/routes.enum'
import { ProfileScreen } from '../profile/profile.screen'
import { SingersScreen } from '../singers/singers.screen'
import { useStore } from '../stores/store-context'
import { Box } from '../ui/box'
import { Header } from '../ui/header'
import { SideBar } from '../ui/sidebar'
import { MainView } from './main.view'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 40px 30px 30px;
  overflow: auto;
`

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

        <Container>
          <Switch>
            <Route path={RoutesEnum.Singers} component={SingersScreen} />
            <Route path={RoutesEnum.Profile} component={ProfileScreen} />
            <Route path={RoutesEnum.Root} component={MainView} />
          </Switch>
        </Container>
      </Box>
    </Box>
  )
})
