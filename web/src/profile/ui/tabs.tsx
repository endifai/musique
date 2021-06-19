import { ReactElement } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { RoutesEnum } from '../../core/routes.enum'
import { Box } from '../../ui/box'
import { Tab } from '../../ui/tab'

export const Tabs = (): ReactElement => {
  const { pathname } = useLocation()
  const history = useHistory()

  return (
    <Box display="flex">
      <Tab
        isActive={pathname === RoutesEnum.MyTracks}
        onClick={() => history.push(RoutesEnum.MyTracks)}>
        Мои треки
      </Tab>
      <Tab
        isActive={pathname === RoutesEnum.Favorites}
        onClick={() => history.push(RoutesEnum.Favorites)}>
        Любимые треки
      </Tab>
    </Box>
  )
}
