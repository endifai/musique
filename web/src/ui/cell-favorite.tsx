import { ReactElement } from 'react'
import styled from 'styled-components'

import { SvgFavorite } from '../icons/favorite'
import { SvgNotFavorite } from '../icons/not-favorite'
import { useStore } from '../stores/store-context'
import { ITrack } from '../types'
import { Box } from './box'

const Container = styled(Box)`
  display: flex;
  align-items: center;

  :hover {
    opacity: 0.7;
    cursor: pointer;
    transition: 0.3s opacity ease;
  }
`

interface Props {
  track: ITrack
  onToggleFavorite?: (trackId: string, isFavorite: boolean) => void
}

export const CellFavorite = ({
  track,
  onToggleFavorite,
}: Props): ReactElement => {
  const store = useStore()

  const handleClickAsync = async () => {
    const isFavorite = await store?.tracksStore.toggleFavoriteAsync(track.id)

    onToggleFavorite?.(track.id, isFavorite)
  }

  return (
    <Container onClick={handleClickAsync}>
      {track.isFavorite ? <SvgFavorite /> : <SvgNotFavorite />}
    </Container>
  )
}
