import React from "react"
import {getClassesQualities} from "./qualitie"
import {BookMark} from "./bookMark"

export const User = props => {
    const { user } = props

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.qualities.map(q => <span key={q._id} className={getClassesQualities(q)}>{q.name}</span>)}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td><BookMark bookMark={user.bookmark} /></td>
            <td><button className='btn btn-danger' onClick={() => props.onDelete(user._id)}>delete</button></td>
        </tr>
    )
}