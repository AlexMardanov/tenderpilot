import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import DeleteIcon from '@material-ui/icons/Delete'
import VisibilityIcon from '@material-ui/icons/Visibility'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  cell: {
    whiteSpace: 'nowrap',
  },
  icon: {
    margin: '0 3px',
    color: '#444',
    backgroundColor: '#f4f4f4',
    padding: 10,
    fontSize: 40,
    borderRadius: '50%',
    cursor: 'pointer',
    border: '1px solid transparent',
    '&:hover': {
      color: '#008eb3',
      borderColor: '#008eb3',
      boxShadow: '0 1px 5px rgba(0,0,0,.4)',
    },
  },
})

export function ProductsTable({
  data,
  handleRemoveClick,
  handleEditClick,
  handleRowsPerPageChange,
  searchQuery,
  sortQuery,
  totalItems,
  handlePageChange,
  handleSort,
}) {
  const classes = useStyles()

  const thead = [
    {
      key: 'number',
      label: 'Number',
      sortable: true,
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
    },
    {
      key: 'unit',
      label: 'Unit',
      sortable: true,
    },
    {
      key: 'category',
      label: 'Category',
    },
    {
      key: 'created',
      label: 'Created',
    },
  ]

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {thead.map(item =>
              item.sortable ? (
                <TableCell align="right" key={item.key}>
                  <TableSortLabel
                    active={sortQuery.sortBy === item.key}
                    onClick={handleSort(item.key)}
                    direction={sortQuery.direction}
                  >
                    {item.label}
                  </TableSortLabel>
                </TableCell>
              ) : (
                <TableCell align="right" key={item.key}>
                  {item.label}
                </TableCell>
              ),
            )}
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(product => (
            <TableRow key={product.id} hover>
              {thead.map(item => (
                <TableCell align="right" key={item.key}>
                  {product[item.key]}
                </TableCell>
              ))}
              <TableCell align="right">
                <VisibilityIcon className={classes.icon} onClick={handleEditClick(product.id)} />
                {!!handleRemoveClick && (
                  <DeleteIcon className={classes.icon} onClick={handleRemoveClick(product.id)} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, { label: 'All', value: -1 }]}
              colSpan={6}
              count={totalItems}
              rowsPerPage={searchQuery.rowsPerPage}
              page={searchQuery.page}
              onChangeRowsPerPage={handleRowsPerPageChange}
              onChangePage={handlePageChange}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  )
}

ProductsTable.propTypes = {
  data: PropTypes.array,
  totalItems: PropTypes.number,
  searchQuery: PropTypes.object,
  sortQuery: PropTypes.object,
  handleRemoveClick: PropTypes.func,
  handleEditClick: PropTypes.func,
  handleRowsPerPageChange: PropTypes.func,
  handlePageChange: PropTypes.func,
  handleSort: PropTypes.func,
}

export default ProductsTable
