import { observer } from 'mobx-react'
import { Fragment, ReactElement, useEffect } from 'react'

import { useStore } from '../stores/store-context'
import { Box } from '../ui/box'
import { Title } from '../ui/title'
import { SingerCard } from './singer-card'

export const SingersScreen = observer((): ReactElement => {
  const store = useStore()

  useEffect(() => {
    store?.singersStore.getSingersAsync()
  }, [store?.singersStore])

  return (
    <Fragment>
      <Title mt={0} mb="20px" ml="16px">
        Исполнители
      </Title>
      <Box display="flex" flexWrap="wrap">
        {store?.singersStore.singers.map(singer => (
          <SingerCard key={singer.id} {...singer} />
        ))}
      </Box>
    </Fragment>
  )
})
