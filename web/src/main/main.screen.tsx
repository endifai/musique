import { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router'

import { Box } from '../ui/box'
import { SideBar } from '../ui/sidebar'
import { Text } from '../ui/text'

export const MainScreen = (): ReactElement => {
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (!token) {
      history.push('sign-in')
    }
  }, [history])

  return (
    <Box display="flex" height="100%">
      <SideBar />
      <Text>Main</Text>
    </Box>
  )
}
