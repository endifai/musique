import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

import { theme } from '../theme/theme'

export const Link = styled(RouterLink)`
  font-weight: 600;
  color: ${theme('colors.greys.0')};
`
