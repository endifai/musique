import { ReactElement } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import { theme } from '../theme/theme'
import { Box } from './box'
import { INavItem } from './sidebar'
import { Text } from './text'

const Container = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  :hover {
    cursor: pointer;
    opacity: 0.85;
    transition: opacity 0.3s ease;
  }
`

type Props = INavItem & {
  isActive: boolean
}

export const NavItem = ({
  label,
  Icon,
  route,
  isActive,
}: Props): ReactElement => {
  const history = useHistory()

  const handleClick = () => history.push(route)

  return (
    <Container onClick={handleClick}>
      <Box
        width="20px"
        height="20px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr="10px">
        <Icon
          fill={isActive ? theme('colors.primary') : theme('colors.greys.0')}
        />
      </Box>
      <Text
        my={0}
        lineHeight="20px"
        color={isActive ? theme('colors.primary') : theme('colors.greys.0')}
        fontWeight={isActive ? 600 : 400}
        cursor="pointer">
        {label}
      </Text>
    </Container>
  )
}
