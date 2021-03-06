import { ReactElement } from 'react'
import { useLocation } from 'react-router'

import { RoutesEnum } from '../core/routes.enum'
import { SvgAllTracks } from '../icons/all-tracks'
import { SvgFavorites } from '../icons/favorites'
import { SvgMyTracks } from '../icons/my-tracks'
import { SvgSingers } from '../icons/singers'
import { Box } from './box'
import { Logo } from './logo'
import { NavItem } from './nav-item'

export interface INavItem {
  label: string
  route: string
  Icon: ({ fill }: { fill?: string }) => ReactElement
}

const routes: INavItem[] = [
  {
    label: 'Все треки',
    route: RoutesEnum.Root,
    Icon: SvgAllTracks,
  },
  {
    label: 'Исполнители',
    route: RoutesEnum.Singers,
    Icon: SvgSingers,
  },
  {
    label: 'Мои треки',
    route: RoutesEnum.MyTracks,
    Icon: SvgMyTracks,
  },
  {
    label: 'Любимые треки',
    route: RoutesEnum.Favorites,
    Icon: SvgFavorites,
  },
]

export const SideBar = (): ReactElement => {
  const { pathname } = useLocation()

  return (
    <Box
      display="flex"
      flexDirection="column"
      flexBasis="300px"
      p="12px 24px"
      borderRight="1px solid #d1d1ce">
      <Logo />

      <Box mt="34px">
        {routes.map(item => (
          <NavItem
            key={item.route}
            isActive={pathname === item.route}
            {...item}
          />
        ))}
      </Box>
    </Box>
  )
}
