import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

import { theme } from '../theme/theme'
import { Text } from './text'

export const Tab = styled(Text)<{ isActive: boolean }>`
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  margin-right: 21px;
  margin-top: 0px;
  margin-bottom: 28px;

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
