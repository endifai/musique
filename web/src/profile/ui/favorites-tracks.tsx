import { observer } from 'mobx-react'
import { ReactElement, useEffect } from 'react'

import { useStore } from '../../stores/store-context'
import { TracksTable } from '../../ui/tracks-table'

export const FavoritesTracks = observer((): ReactElement => {
  const store = useStore()

  useEffect(() => {
    store?.favoritesStore.getFavoritesTracksAsync()
  }, [store?.favoritesStore])

  const data = store?.favoritesStore.tracks ?? []

  return <TracksTable data={data} />
})
