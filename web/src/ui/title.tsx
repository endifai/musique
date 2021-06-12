import styled from 'styled-components'

import { theme } from '../theme/theme'
import { Text } from './text'

export const Title = styled(Text)`
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  color: ${theme('colors.black.0')};
`
