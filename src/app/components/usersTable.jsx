import React from 'react'
import TableHeader from './tableHeader'
import PropTypes from 'prop-types'
import TableBody from './tableBody'
import BookMark from './bookmark'
import QualitiesList from './qualitiesList'
import Table from './table'

const UsersTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete, ...rest }) => {
  const columns = {
    name: { path: 'name', name: 'Имя' },
    qualities: {
      name: 'Качества',
      component: (user) => <QualitiesList qualities={user.qualities} />
    },
    professions: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: {
      path: 'completedMeetings',
      name: 'Встретился, раз'
    },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => <BookMark status={user.bookmark} onClick={() => onToggleBookMark(user._id)} />
    },
    delete: {
      component: (user) => (
        <button onClick={() => onDelete(user._id)} className="btn btn-danger">
          delete
        </button>
      )
    }
  }

  return (
    <Table>
      <TableHeader {...{ selectedSort, onSort, columns }} />
      <TableBody {...{ columns, data: users }} />
    </Table>
  )
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default UsersTable
