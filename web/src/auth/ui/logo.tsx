import { ReactElement } from 'react'
import styled from 'styled-components'

import { SvgLogo } from '../../icons/logo'
import { Box } from '../../ui/box'

const Container = styled(Box)`
  position: absolute;
  top: 26px;
  left: 26px;
`

export const Logo = (): ReactElement => (
  <Container>
    <SvgLogo />
  </Container>
)
