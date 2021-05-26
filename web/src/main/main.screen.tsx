import { observer } from 'mobx-react'
import { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router'

import { useStore } from '../stores/store-context'
import { Box } from '../ui/box'
import { Header } from '../ui/header'
import { SideBar } from '../ui/sidebar'
import { Text } from '../ui/text'

export const MainScreen = observer((): ReactElement => {
  const history = useHistory()
  const store = useStore()

  useEffect(() => {
    if (store && !store?.userStore.user && !store?.userStore.loading) {
      history.push('sign-in')
    }
  }, [history, store, store?.userStore.loading, store?.userStore.user])

  return (
    <Box display="flex" height="100%">
      <SideBar />

      <Box display="flex" flex="1" flexDirection="column">
        <Header />
        <Text>Main</Text>
      </Box>
    </Box>
  )
})
