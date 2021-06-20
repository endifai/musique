import { debounce } from 'lodash'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { ChangeEvent, ReactElement, useMemo } from 'react'
import styled from 'styled-components'

import { SvgSearch } from '../icons/search'
import { useStore } from '../stores/store-context'
import { theme } from '../theme/theme'
import { Box } from './box'

const StyledInput = styled.input`
  font-size: 16px;
  margin-left: 14px;
  width: 270px;
  border: none;
  outline: none;

  ::placeholder {
    color: ${theme('colors.greys.0')};
  }
`

interface Props {
  setIsOpen: (value: boolean) => void
}

export const Search = observer(({ setIsOpen }: Props): ReactElement => {
  const store = useStore()
  const searchQuery = store?.searchStore.searchQuery ?? ''

  const handleSearch = useMemo(
    () => debounce(() => store?.searchStore.searchAsync(), 500),
    [store?.searchStore],
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    runInAction(() => {
      if (store) {
        store.searchStore.searchQuery = value

        value.length >= 2
          ? handleSearch()
          : (store.searchStore.searchResults = {
              tracks: [],
              singers: [],
            })
      }
    })
  }

  const handleFocus = () => setIsOpen(true)

  return (
    <Box display="flex" alignItems="center" position="relative">
      <SvgSearch />

      <StyledInput
        placeholder="Введите трек или исполнителя"
        value={searchQuery}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </Box>
  )
})
