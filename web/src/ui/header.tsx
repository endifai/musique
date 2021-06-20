import { observer } from 'mobx-react'
import { Fragment, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import { formatResourceUrl } from '../core/format-resource-url'
import { RoutesEnum } from '../core/routes.enum'
import { useOutsideClick } from '../hooks/use-outside-click'
import { useStore } from '../stores/store-context'
import { Box } from './box'
import { HeaderProfile } from './header-profile'
import { Search } from './search'
import { Text } from './text'

const Container = styled(Box)`
  flex-basis: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 40px;
  border-bottom: 1px solid #d1d1ce;
  position: relative;
`

const StyledImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 16px;
  object-fit: cover;
  border-radius: 18px;
`

export const Header = observer(() => {
  const store = useStore()
  const history = useHistory()
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useOutsideClick(ref, () => setIsOpen(false))

  const searchQuery = store?.searchStore.searchQuery ?? ''

  const searchResults = store?.searchStore.searchResults ?? {
    tracks: [],
    singers: [],
  }

  const handleSingerClick = (id: string) =>
    history.push(`${RoutesEnum.Singer}?id=${id}`)

  return (
    <Container>
      <Search setIsOpen={setIsOpen} />

      <HeaderProfile />

      {searchQuery && isOpen && (
        <Box
          ref={ref}
          position="absolute"
          padding="16px 30px"
          backgroundColor="white"
          left="0"
          top="60px"
          width="400px"
          maxHeight="650px"
          overflow="auto"
          border="1px red solid">
          <Text my={0} mb="12px">
            Результаты поиска по &quot;
            <span style={{ fontWeight: 600 }}>{searchQuery}</span>&quot;
          </Text>

          {searchResults.singers.length > 0 && (
            <Fragment>
              <Text mt={0} mb="10px">
                ИСПОЛНИТЕЛИ
              </Text>

              {searchResults.singers.map(singer => (
                <Box
                  display="flex"
                  alignItems="center"
                  mb="12px"
                  key={singer.id}
                  onClick={() => handleSingerClick(singer.id)}>
                  <StyledImage src={formatResourceUrl(singer.avatarUri)} />

                  <Text my={0} color="black.0" fontWeight={600}>
                    {singer.nickname}
                  </Text>
                </Box>
              ))}
            </Fragment>
          )}

          {searchResults.tracks.length > 0 && (
            <Fragment>
              <Text mt={0} mb="10px">
                ТРЕКИ
              </Text>

              {searchResults.tracks.map(track => (
                <Box key={track.id} mb="12px">
                  <Text my={0} color="black.0" fontWeight={600}>
                    {track.title}
                  </Text>
                  <Text my={0} fontSize="14px">
                    {track.user.nickname}
                  </Text>
                </Box>
              ))}
            </Fragment>
          )}
        </Box>
      )}
    </Container>
  )
})
