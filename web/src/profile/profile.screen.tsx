import { observer } from 'mobx-react'
import { Fragment, ReactElement, useEffect } from 'react'
import { Route, Switch } from 'react-router'

import { formatResourceUrl } from '../core/format-resource-url'
import { RoutesEnum } from '../core/routes.enum'
import { useStore } from '../stores/store-context'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import { Avatar } from './ui/avatar'
import { FavoritesTracks } from './ui/favorites-tracks'
import { MyTracksTable } from './ui/my-tracks.table'
import { Tabs } from './ui/tabs'
import { UploadTrack } from './ui/upload-track'

export const ProfileScreen = observer((): ReactElement => {
  const store = useStore()

  const user = store?.userStore.user
  const myTracks = store?.myTracksStore.myTracks

  useEffect(() => {
    store?.userStore.getMeAsync()
  }, [store?.userStore])

  const imageUrl = user?.avatarUri ? formatResourceUrl(user.avatarUri) : ''

  return (
    <Fragment>
      <Box display="flex" mb="28px">
        <Avatar imageUrl={imageUrl} />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-start"
          ml="30px">
          <Box>
            <Text my={0} fontWeight="300" fontSize="18px" lineHeight="22px">
              Мой профиль
            </Text>

            <Text
              my={0}
              fontSize="36px"
              lineHeight="40px"
              fontWeight="600"
              color="black.0">
              {user?.nickname.toUpperCase()}
            </Text>

            <Text my={0} fontWeight="300" fontSize="18px" lineHeight="22px">
              Количество треков:{' '}
              <span style={{ fontWeight: 600 }}>{myTracks?.length ?? 0}</span>
            </Text>
          </Box>

          <UploadTrack />
        </Box>
      </Box>

      <Tabs />

      <Switch>
        <Route path={RoutesEnum.MyTracks} component={MyTracksTable} />
        <Route path={RoutesEnum.Favorites} component={FavoritesTracks} />
      </Switch>
    </Fragment>
  )
})
