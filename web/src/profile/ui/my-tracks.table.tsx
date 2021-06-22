/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react'
import { ReactElement, useMemo } from 'react'
import { Column, Row } from 'react-table'
import styled from 'styled-components'

import { formatDuration } from '../../core/format-duration'
import { useStore } from '../../stores/store-context'
import { ITrack } from '../../types'
import { CellPlay } from '../../ui/cell-play'
import { Table } from '../../ui/table'
import { CellDelete } from './cell-delete'

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

  const myTracks = store.myTracksStore.myTracks
  const user = store.userStore.user

  const columns: Column<ITrack>[] = useMemo(
    () => [
      {
        Header: '#',
        Cell: ({ row }: { row: Row<any> }) => (
          <CellPlay index={row.index} id={row.original.id} />
        ),
      },
      {
        Header: 'Название',
        accessor: 'title',
      },
      {
        Header: 'Длительность',
        accessor: ({ duration }: { duration: number }) =>
          formatDuration(duration),
      },
      {
        Header: ' ',
        Cell: ({ row }: { row: Row<ITrack> }) => (
          <CellDelete trackId={row.original.id} />
        ),
      },
    ],
    [],
  )

  const data = myTracks.map(track => ({ ...track, user }))

  return <StyledTable data={data} columns={columns} />
})
