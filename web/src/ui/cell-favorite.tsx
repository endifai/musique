import { ReactElement } from 'react'
import styled from 'styled-components'

import { SvgFavorite } from '../icons/favorite'
import { SvgNotFavorite } from '../icons/not-favorite'
import { useStore } from '../stores/store-context'
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
  trackId: string
  isFavorite: boolean
}

export const CellFavorite = ({ trackId, isFavorite }: Props): ReactElement => {
  const store = useStore()

  const handleClick = () => store?.tracksStore.toggleFavoriteAsync(trackId)

  return (
    <Container onClick={handleClick}>
      {isFavorite ? <SvgFavorite /> : <SvgNotFavorite />}
    </Container>
  )
}
