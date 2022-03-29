import React, {useState} from "react"
import api from '../api'
import {SearchStatus} from "./searchStatus"
import {User} from "./user"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = userId => {
        setUsers(users.filter(user => user._id !== userId))
    }

    if (users.length === 0) {
        return <span className='badge bg-danger'>Никто не тусанет с тобой сегодня</span>
    }

    return (
        <>
            <SearchStatus usersCount={users.length} />
            <table className='table'>
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
                    {users.map(user => <User key={user._id} user={user} onDelete={handleDelete} />)}
                </tbody>
            </table>
        </>
    )
}

export default Users
