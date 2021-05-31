import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Routes } from './core/routes'
import { StoreProvider } from './stores/store-context'
import { AppTheme, GlobalStyle } from './theme/theme'

const App = () => {
  return (
    <React.Fragment>
      <StoreProvider>
        <ThemeProvider theme={AppTheme}>
          <GlobalStyle />

          <Routes />
        </ThemeProvider>
      </StoreProvider>
    </React.Fragment>
  )
}

export default App
