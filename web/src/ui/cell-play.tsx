import { observer } from 'mobx-react'
import { ReactElement } from 'react'

import { SvgPlaying } from '../icons/playing'
import { useStore } from '../stores/store-context'
import { Text } from './text'

interface Props {
  index: number
  id: string
}

export const CellPlay = observer(({ index, id }: Props): ReactElement => {
  const { playerStore } = useStore()
  const isPlaying = playerStore.track?.id === id

  return isPlaying ? <SvgPlaying /> : <Text my={0}>{index + 1}</Text>
})
