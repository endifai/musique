import { Dispatch, ReactElement, SetStateAction } from 'react'

import { Box } from '../../ui/box'
import { Tab } from '../../ui/tab'

interface Props {
  activeTab: 'ALL' | 'RECENT'
  setActiveTab: Dispatch<SetStateAction<'ALL' | 'RECENT'>>
}

export const Tabs = ({ activeTab, setActiveTab }: Props): ReactElement => (
  <Box display="flex">
    <Tab isActive={activeTab === 'ALL'} onClick={() => setActiveTab('ALL')}>
      Все
    </Tab>
    <Tab
      isActive={activeTab === 'RECENT'}
      onClick={() => setActiveTab('RECENT')}>
      Последние
    </Tab>
  </Box>
)
