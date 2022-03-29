import React from "react"

export const SearchStatus = props => {
    const arrayOfKeyNumber = [2, 3, 4]
    const arrayOfKeyNumber2 = [12, 13, 15]
    let partOfPhrase

    if (arrayOfKeyNumber.includes(props.usersCount % 10) && !arrayOfKeyNumber2.includes(props.usersCount)) {
        partOfPhrase = 'человека тусанут'
    } else {
        partOfPhrase = 'человек тусанет'
    }

    return (
        <span className='badge bg-primary'>
            {`${props.usersCount} ${partOfPhrase} с тобой сегодня`}
        </span>
    )
}