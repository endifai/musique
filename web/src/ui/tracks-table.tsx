import { ReactElement, useMemo } from 'react'
import { Column, Row } from 'react-table'
import styled from 'styled-components'

import { formatDuration } from '../core/format-duration'
import { CellFavorite } from './cell-favorite'
import { CellSinger } from './cell-singer'
import { Table } from './table'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledTable = styled(Table)`
  thead th:nth-child(3) {
    width: 25%;
  }

  thead th:nth-child(4) {
    width: 15%;
  }
` as any

export const TracksTable = ({
  data,
  onToggleFavorite,
}: {
  data: any[]
  onToggleFavorite?: (trackId: string, isFavorite: boolean) => void
}): ReactElement => {
  const columns: Column<any>[] = useMemo(
    () => [
      {
        Header: '#',
        Cell: ({ row }: { row: Row<any> }) => row.index + 1,
      },
      {
        Header: 'Название',
        accessor: 'title',
      },
      {
        Header: 'Исполнитель',
        Cell: ({ row }: { row: Row<any> }) => (
          <CellSinger user={row.original.user} />
        ),
      },
      {
        Header: 'Длительность',
        accessor: ({ duration }: { duration: number }) =>
          formatDuration(duration),
      },
      {
        Header: ' ',
        Cell: ({ row }: { row: Row<any> }) => (
          <CellFavorite
            track={row.original}
            onToggleFavorite={onToggleFavorite}
          />
        ),
      },
    ],
    [onToggleFavorite],
  )

  return <StyledTable data={data} columns={columns} />
}
