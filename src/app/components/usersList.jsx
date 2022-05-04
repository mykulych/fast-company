import React, { useState, useEffect } from 'react'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import GroupList from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'
import UsersTable from './usersTable'
import _ from 'lodash'
import Search from './search'

const UsersList = () => {
  const pageSize = 8
  const [currentPage, setCurrentPage] = useState(1)
  const [profession, setProfession] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleSearch = (e) => {
    setSelectedProf()
    setSearch(e.target.value)
  }

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data))
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleProfessionSelect = (item) => {
    setSearch('')
    setSelectedProf(item)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  if (users) {
    const filteredUsers = selectedProf
      ? users.filter((user) => user.profession._id === selectedProf._id)
      : search
      ? users.filter((user) => user.name.includes(search))
      : users
    const count = filteredUsers.length
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
    const userCrop = paginate(sortedUsers, currentPage, pageSize)

    const clearFilter = () => {
      setSelectedProf()
    }

    return (
      <div className="d-flex">
        {profession && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList selectedItem={selectedProf} items={profession} onItemSelect={handleProfessionSelect} />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Очистить все
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <SearchStatus length={count} />
          <Search data={search} handleSearch={handleSearch} />
          {count > 0 && (
            <UsersTable
              users={userCrop}
              selectedSort={sortBy}
              onSort={handleSort}
              onDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    )
  }
  return 'loading...'
}

export default UsersList
