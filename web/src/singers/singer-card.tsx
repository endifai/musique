import { useHistory } from 'react-router'
import styled from 'styled-components'

import { formatResourceUrl } from '../core/format-resource-url'
import { RoutesEnum } from '../core/routes.enum'
import { IUser } from '../types'
import { Box } from '../ui/box'
import { Text } from '../ui/text'

const Container = styled(Box)`
  margin: 0px 16px 30px;
  transition: 0.3s opacity ease;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const StyledImage = styled.img`
  width: 192px;
  height: 192px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 6px;
`

export const SingerCard = ({ id, avatarUri, nickname }: IUser) => {
  const history = useHistory()

  const handleClick = () => history.push(`${RoutesEnum.Singer}?id=${id}`)

  return (
    <Container onClick={handleClick}>
      <StyledImage src={formatResourceUrl(avatarUri)} />

      <Text
        textAlign="center"
        fontSize="22px"
        lineHeight="32px"
        color="black.0"
        fontWeight={600}
        my={0}
        cursor="pointer">
        {nickname}
      </Text>
    </Container>
  )
}
