import { ReactElement } from 'react'

import { SvgSearch } from '../icons/search'
import { Box } from './box'
import { Text } from './text'

export const Search = (): ReactElement => (
  <Box display="flex" alignItems="center">
    <SvgSearch />
    <Text my={0} ml="14px">
      Введите трек или исполнителя
    </Text>
  </Box>
)
