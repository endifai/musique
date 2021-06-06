import { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

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

  return (
    <Box display="flex">
      <Tab isActive={false}>Мои треки</Tab>
      <Tab isActive={true}>Любимые треки</Tab>
    </Box>
  )
}
