import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

const Table = ({ children, selectedSort, onSort, columns, data }) => {
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader selectedSort={selectedSort} columns={columns} onSort={onSort} />
          <TableBody columns={columns} data={data} />
        </>
      )}
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.array,
  selectedSort: PropTypes.object,
  onSort: PropTypes.func,
  columns: PropTypes.object,
  data: PropTypes.array
}

export default Table
