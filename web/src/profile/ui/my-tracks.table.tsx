import { observer } from 'mobx-react'
import { ReactElement, useMemo } from 'react'
import { Column, Row } from 'react-table'
import styled from 'styled-components'

import { useStore } from '../../stores/store-context'
import { ITrack } from '../../types'
import { Table } from '../../ui/table'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledTable = styled(Table)`
  thead th:nth-child(3) {
    width: 20%;
  }

  thead th:nth-child(4) {
    width: 5%;
  }
` as any

export const MyTracksTable = observer((): ReactElement => {
  const store = useStore()

  const columns: Column<ITrack>[] = useMemo(
    () => [
      {
        Header: '#',
        Cell: ({ row }: { row: Row<ITrack> }) => row.index + 1,
      },
      {
        Header: 'Название',
        accessor: 'title',
      },
      {
        Header: 'Длительность',
        accessor: 'duration',
      },
      {
        Header: ' ',
        accessor: () => 'hey',
      },
    ],
    [],
  )

  const data = [...(store?.userStore.user?.tracks ?? [])]

  return <StyledTable data={data} columns={columns} />
})
