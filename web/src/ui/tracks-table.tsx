import { ReactElement, useMemo } from 'react'
import { Column, Row } from 'react-table'
import styled from 'styled-components'

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

export const TracksTable = ({ data }: { data: any[] }): ReactElement => {
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
        accessor: 'duration',
      },
      {
        Header: ' ',
        Cell: ({ row }: { row: Row<any> }) => (
          <CellFavorite
            trackId={row.original.id}
            isFavorite={row.original.isFavorite}
          />
        ),
      },
    ],
    [],
  )

  return <StyledTable data={data} columns={columns} />
}
