import { ReactElement } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

import { RoutesEnum } from '../../core/routes.enum'
import { theme } from '../../theme/theme'
import { Box } from '../../ui/box'
import { Text } from '../../ui/text'

const Tab = styled(Text)<{ isActive: boolean }>`
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  margin-right: 21px;
  margin-top: 0px;
  margin-bottom: 0px;

  ${ifProp(
    'isActive',
    css`
      color: ${theme('colors.primary')};
      text-decoration: underline;
    `,
  )}

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

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
