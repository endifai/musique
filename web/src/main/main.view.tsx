import { observer } from 'mobx-react'
import { Fragment, ReactElement, useState } from 'react'

import { useStore } from '../stores/store-context'
import { Title } from '../ui/title'
import { TracksTable } from '../ui/tracks-table'
import { Tabs } from './ui/tabs'

export const MainView = observer((): ReactElement => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'RECENT'>('ALL')

  const store = useStore()

  const data =
    activeTab === 'ALL'
      ? store?.tracksStore.tracks ?? []
      : store?.tracksStore.recentTracks ?? []

  return (
    <Fragment>
      <Title mt={0} mb="21px">
        Главная
      </Title>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <TracksTable data={data} />
    </Fragment>
  )
})
