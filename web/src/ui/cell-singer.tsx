import { memo, ReactElement } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import { formatResourceUrl } from '../core/format-resource-url'
import { RoutesEnum } from '../core/routes.enum'
import { IUser } from '../types'
import { Box } from './box'
import { Text } from './text'

const Container = styled(Box)`
  display: flex;
  align-items: center;
  transition: 0.3s opacity ease;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

const AvatarImage = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 14px;
  object-fit: cover;
  margin-right: 10px;
`

interface Props {
  user: IUser
}

export const CellSinger = memo(({ user }: Props): ReactElement => {
  const avatarUri = formatResourceUrl(user.avatarUri)
  const history = useHistory()

  const handleClick = () => history.push(`${RoutesEnum.Singer}?id=${user.id}`)

  return (
    <Container onClick={handleClick}>
      <AvatarImage src={avatarUri} />

      <Text
        my={0}
        lineHeight="18px"
        fontSize="16px"
        color="#000000"
        userSelect="none">
        {user.nickname}
      </Text>
    </Container>
  )
})
