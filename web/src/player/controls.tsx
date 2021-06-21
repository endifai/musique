import { observer } from 'mobx-react'
import { ReactElement } from 'react'
import styled from 'styled-components'

import { SvgNext } from '../icons/next'
import { SvgPause } from '../icons/pause'
import { SvgPlay } from '../icons/play'
import { SvgPrev } from '../icons/prev'
import { useStore } from '../stores/store-context'
import { theme } from '../theme/theme'
import { Box } from '../ui/box'

const Container = styled(Box)`
  display: flex;
  align-items: center;
  width: 130px;
  justify-content: space-between;
  margin-right: 40px;

  :hover > svg {
    cursor: pointer;
  }
`

export const Controls = observer((): ReactElement => {
  const store = useStore()

  const { isPlaying, isLast, isFirst, pause, play, playPrev, playNext } =
    store.playerStore

  return (
    <Container>
      <SvgPrev
        fill={isFirst ? '#D5BCDA' : undefined}
        onClick={isFirst ? undefined : playPrev}
      />

      {isPlaying ? (
        <SvgPause onClick={pause} />
      ) : (
        <SvgPlay
          width={31}
          height={36}
          fill={theme('colors.primary')}
          onClick={play}
        />
      )}

      <SvgNext
        fill={isLast ? '#D5BCDA' : undefined}
        onClick={isLast ? undefined : playNext}
      />
    </Container>
  )
})
