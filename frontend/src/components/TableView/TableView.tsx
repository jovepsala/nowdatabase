import { useEffect, useState } from 'react'
import {
  type MRT_ColumnFiltersState,
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowData,
} from 'material-react-table'
import { Box, Button, CircularProgress, Tooltip } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import PolicyIcon from '@mui/icons-material/Policy'

/*
  TableView takes in the data and columns of a table, and handles
  rendering the actual table and saving & loading its state via url.
*/
export const TableView = <T extends MRT_RowData>({
  data,
  columns,
  idFieldName,
  checkRowRestriction,
}: {
  data: T[] | null
  columns: MRT_ColumnDef<T>[]
  idFieldName: keyof MRT_RowData
  checkRowRestriction: (row: T) => boolean
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([])

  // Load state from url on first render
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const stateFromUrl = JSON.parse(searchParams.get('columnfilters') ?? '[]')
    setColumnFilters(stateFromUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Save state to url when columnFilters change
  useEffect(() => {
    navigate(`${location.pathname}?columnfilters=${JSON.stringify(columnFilters)}`, { replace: true })
  }, [columnFilters, location.pathname, navigate])

  if (!data) return <CircularProgress />

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      state={{ columnFilters, showColumnFilters: true }}
      onColumnFiltersChange={setColumnFilters}
      renderRowActions={({ row }) => (
        <Box display="flex" gap="1em" alignItems="center" width="3.6em">
          <Button
            variant="contained"
            style={{ width: '2em' }}
            onClick={() => navigate(`/locality/${row.original[idFieldName]}`)}
          >
            <ManageSearchIcon />
          </Button>
          {checkRowRestriction(row.original) && (
            <Tooltip placement="top" title="This item has restricted visibility">
              <PolicyIcon color="primary" fontSize="large" />
            </Tooltip>
          )}
        </Box>
      )}
      displayColumnDefOptions={{ 'mrt-row-actions': { size: 50, header: '' } }}
      enableRowActions
    />
  )
}
