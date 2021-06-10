import get from 'lodash/get'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { colors } from './colors'
import { fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}

  html, body, #root {
    font-size: 16px;
    width: 100%;
    height: 100%;
    font-family: Montserrat;
    color:  #5F5F57;
    overflow: hidden;
  }
`

export const AppTheme = {
  breakpoints: ['40em', '52em', '58em', '64em', '76em', '86em'],
  fontSizes: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],

  colors,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const theme = (path: string): any => get(AppTheme, path, null)
