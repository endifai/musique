import styled from 'styled-components'

import { SvgDelete } from '../../icons/delete'
import { useStore } from '../../stores/store-context'

const StyledIcon = styled(SvgDelete)`
  :hover {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
`

interface Props {
  trackId: string
}

export const CellDelete = ({ trackId }: Props) => {
  const store = useStore()

  const handleClick = () => store?.myTracksStore.deleteTrackAsync(trackId)

  return <StyledIcon onClick={handleClick} />
}
