import React, { useState } from 'react'
import User from './user'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import PropTypes from 'prop-types'

const Users = ({ users, ...rest }) => {
    const count = users.length
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    console.log(users)

    const userCrop = paginate(users, currentPage, pageSize)
    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...user} {...rest} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    )
}

Users.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
}

export default Users
