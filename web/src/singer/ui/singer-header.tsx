import { runInAction } from 'mobx'

import { formatResourceUrl } from '../../core/format-resource-url'
import { SvgPlay } from '../../icons/play'
import { useStore } from '../../stores/store-context'
import { IUser } from '../../types'
import { AvatarImage } from '../../ui/avatar-image'
import { Box } from '../../ui/box'
import { Button } from '../../ui/button'
import { Text } from '../../ui/text'

interface Props {
  user: IUser
}

export const SingerHeader = ({ user }: Props) => {
  const { playerStore } = useStore()
  const imageUrl = user?.avatarUri ? formatResourceUrl(user.avatarUri) : ''

  const handleClick = () => {
    runInAction(() => {
      playerStore.setQueue(
        user.tracks?.map(track => ({ ...track, user })) ?? [],
      )
      playerStore.currentIndex = 0
    })
  }

  return (
    <Box display="flex" mb="28px">
      <AvatarImage src={imageUrl} />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        ml="30px">
        <Box>
          <Text my={0} fontWeight="300" fontSize="18px" lineHeight="22px">
            Исполнитель
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
            <span style={{ fontWeight: 600 }}>{user.tracks?.length ?? 0}</span>
          </Text>
        </Box>

        <Button
          text="Cлушать"
          icon={
            <Box display="flex" mr="8px">
              <SvgPlay />
            </Box>
          }
          onClick={handleClick}
        />
      </Box>
    </Box>
  )
}
