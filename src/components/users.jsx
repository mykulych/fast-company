import React, {useState} from "react"
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = userId => {
        setUsers(users.filter(user => user._id !== userId))
    }
    const renderPhrase = number => {
        let phrase = ' человек тусанет с тобой сегодня'
        if (number > 4) {
            phrase = ' человек тусанет с тобой сегодня'
        } else if (number <= 4 && number > 1) {
            phrase = ' человека тусанут с тобой сегодня'
        } else if (number === 1) {
            phrase = ' человек тусанет с тобой сегодня'
        } else if (number === 0) {
            phrase = 'Никто не тусанет с тобой сегодня'
        }

        if (number === 0) {
            return  phrase
        }
        return number + phrase
    }

    const getClassesQualities = q => {
        let classes = 'badge m-1 bg-'
        classes += q.color
        return classes
    }

    const createUsers = user => {
        return (
            <>
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.qualities.map(q => <span className={getClassesQualities(q)}>{q.name}</span>)}</td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}/5</td>
                    <td><button className='btn btn-danger' onClick={() => handleDelete(user._id)}>delete</button></td>
                </tr>
            </>
        )
    }

    const renderUsers = () => {
        return users.map(user => {
            return createUsers(user)
        })
    }

    if (users.length === 0) {
        return <span className='badge bg-danger'>{renderPhrase(users.length)}</span>
    }

    return (
        <>
            <span className='badge bg-primary'>{renderPhrase(users.length)}</span>
            <table className='table'>
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                </tr>
                </thead>
                <tbody>
                    {renderUsers()}
                </tbody>
            </table>
        </>
    )
}

export default Users