import { ReactElement } from 'react'

import { SvgAllTracks } from '../icons/all-tracks'
import { SvgFavorites } from '../icons/favorites'
import { SvgMyTracks } from '../icons/my-tracks'
import { SvgSingers } from '../icons/singers'
import { Box } from './box'
import { Logo } from './logo'
import { Text } from './text'

const routes = [
  {
    label: 'Все треки',
    route: '/',
    Icon: SvgAllTracks,
  },
  {
    label: 'Исполнители',
    route: '/singers',
    Icon: SvgSingers,
  },
  {
    label: 'Мои треки',
    route: '/my-tracks',
    Icon: SvgMyTracks,
  },
  {
    label: 'Любимые треки',
    route: '/favorites',
    Icon: SvgFavorites,
  },
]

export const SideBar = (): ReactElement => {
  return (
    <Box display="flex" flexDirection="column" flexBasis="300px" p="12px 24px">
      <Logo />

      <Box mt="34px">
        {routes.map(({ label, Icon }) => (
          <Box key={label} display="flex" alignItems="center" mb="12px">
            <Box
              width="20px"
              height="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mr="10px">
              <Icon />
            </Box>
            <Text my={0} lineHeight="20px">
              {label}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
