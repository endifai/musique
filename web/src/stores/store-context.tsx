import React, { ReactNode, useContext } from 'react'

import { RootStore } from './root-store'

const StoreContext = React.createContext<RootStore>(new RootStore())

interface Props {
  children: ReactNode
}

export const StoreProvider = ({ children }: Props) => (
  <StoreContext.Provider value={new RootStore()}>
    {children}
  </StoreContext.Provider>
)

export const useStore = () => useContext(StoreContext)
