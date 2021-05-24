import { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router'

import { Text } from '../ui/text'

export const MainScreen = (): ReactElement => {
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (!token) {
      history.push('sign-in')
    }
  }, [history])

  return <Text>Main</Text>
}
