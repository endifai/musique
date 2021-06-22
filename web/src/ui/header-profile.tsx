import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { ReactElement } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import { formatResourceUrl } from '../core/format-resource-url'
import { SvgLogout } from '../icons/logout'
import { useStore } from '../stores/store-context'
import { Box } from './box'
import { Text } from './text'

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  object-fit: cover;
`

const Nickname = styled(Text)`
  text-transform: uppercase;
  margin: 0 16px;
  color: #191919;
  font-weight: 700;

  :hover {
    opacity: 0.6;
    cursor: pointer;
    transition: 0.3s opacity ease;
  }
`

export const HeaderProfile = observer((): ReactElement => {
  const { userStore, playerStore } = useStore()
  const history = useHistory()

  const avatarUrl = userStore.user?.avatarUri

  const imageSrc = avatarUrl
    ? formatResourceUrl(avatarUrl)
    : 'https://images.unsplash.com/photo-1598908314941-ddc4ef84509e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

  const handleLogout = () => {
    runInAction(() => {
      playerStore.pause()
      playerStore.setQueue([])
      playerStore.currentIndex = 0
    })

    userStore.logout()
  }

  const handleClick = () => history.push('/profile/my-tracks')

  return (
    <Box display="flex" alignItems="center">
      <Avatar src={imageSrc} />

      <Nickname my={0} onClick={handleClick}>
        {userStore.user?.nickname}
      </Nickname>

      <Box onClick={handleLogout}>
        <SvgLogout />
      </Box>
    </Box>
  )
})
