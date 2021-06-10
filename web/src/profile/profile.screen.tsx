import { observer } from 'mobx-react'
import { ReactElement, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'

import { formatResourceUrl } from '../core/format-resource-url'
import { RoutesEnum } from '../core/routes.enum'
import { useStore } from '../stores/store-context'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import { MyTracksTable } from './ui/my-tracks.table'
import { Tabs } from './ui/tabs'
import { UploadTrack } from './ui/upload-track'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 40px 30px 30px;
`

const Avatar = styled.img`
  object-fit: cover;
  width: 160px;
  height: 160px;
  border-radius: 80px;
`

export const ProfileScreen = observer((): ReactElement => {
  const store = useStore()

  const user = store?.userStore.user
  const myTracks = store?.myTracksStore.myTracks

  useEffect(() => {
    store?.userStore.getMeAsync()
  }, [store?.userStore])

  const imageUrl = user?.avatarUri
    ? formatResourceUrl(user?.avatarUri)
    : 'https://images.unsplash.com/photo-1598908314941-ddc4ef84509e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

  return (
    <Container>
      <Box display="flex" mb="28px">
        <Avatar src={imageUrl} />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
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
              Количество треков: {myTracks?.length ?? 0}
            </Text>
          </Box>

          <UploadTrack />
        </Box>
      </Box>

      <Tabs />

      <Switch>
        <Route path={RoutesEnum.MyTracks} component={MyTracksTable} />
        <Route path={RoutesEnum.Favorites} />
      </Switch>
    </Container>
  )
})
