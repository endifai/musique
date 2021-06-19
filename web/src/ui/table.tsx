import { ReactElement } from 'react'
import { Column, useTable } from 'react-table'
import styled from 'styled-components'

import { theme } from '../theme/theme'

const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  color: ${theme('colors.black.0')};

  th,
  td {
    margin: 0;
    text-align: left;
  }

  thead::after {
    content: '';
    display: block;
    height: 25px;
  }

  tbody td {
    padding: 8px 0px 16px 0px;
  }

  tr td:first-child,
  tr th:first-child {
    text-align: center;
    width: 40px;
  }
`

interface Props<T extends { id: string }> {
  columns: Column<T>[]
  data: T[]
  className?: string
}

export const Table = <T extends { id: string }>({
  columns,
  data,
  className,
}: Props<T>): ReactElement => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })

  return (
    <StyledTable className={className} {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={headerGroup.getHeaderGroupProps().key}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                key={column.getHeaderProps().key}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)

          return (
            <tr {...row.getRowProps()} key={row.getRowProps().key}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} key={cell.getCellProps().key}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}
