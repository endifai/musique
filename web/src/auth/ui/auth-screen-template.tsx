import { ReactElement, ReactNode } from 'react'

import { Box } from '../../ui/box'
import { Logo } from './logo'

interface Props {
  imageUri: string
  children: ReactNode
}

export const AuthScreenTemplate = ({
  imageUri,
  children,
}: Props): ReactElement => (
  <Box display="flex" height="100%">
    <Logo />
    {children}
    <Box
      display="flex"
      flex={4}
      backgroundImage={imageUri}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    />
  </Box>
)
