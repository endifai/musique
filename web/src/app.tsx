import React from 'react'

import { Routes } from './core/routes'
import { StoreProvider } from './stores/store-context'
import { GlobalStyle } from './theme/theme'

const App = () => {
  return (
    <React.Fragment>
      <StoreProvider>
        <GlobalStyle />

        <Routes />
      </StoreProvider>
    </React.Fragment>
  )
}

export default App
