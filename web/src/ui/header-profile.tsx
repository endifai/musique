import { observer } from 'mobx-react'
import { ReactElement } from 'react'
import styled from 'styled-components'

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
`

export const HeaderProfile = observer((): ReactElement => {
  const store = useStore()

  const imageSrc =
    store?.userStore.user?.avatarUri ??
    'https://images.unsplash.com/photo-1598908314941-ddc4ef84509e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

  const handleLogout = () => {
    store?.userStore.logout()
  }

  return (
    <Box display="flex" alignItems="center">
      <Avatar src={imageSrc} />

      <Nickname my={0}>{store?.userStore.user?.nickname}</Nickname>

      <Box onClick={handleLogout}>
        <SvgLogout />
      </Box>
    </Box>
  )
})
