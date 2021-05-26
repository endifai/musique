import styled from 'styled-components'

import { Box } from './box'
import { HeaderProfile } from './header-profile'
import { Search } from './search'

const Container = styled(Box)`
  flex-basis: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 40px;
  border-bottom: 1px solid #d1d1ce;
`

export const Header = () => (
  <Container>
    <Search />

    <HeaderProfile />
  </Container>
)
