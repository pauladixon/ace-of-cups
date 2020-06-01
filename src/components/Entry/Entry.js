import React from 'react'
import { Link } from 'react-router-dom'


const Entry = ({entry, handleDeleteEntry, user}) => {
    return (
        <tr>
            <td key={entry.id}>{entry.date}</td>
            <td key={entry.id}>{entry.past}</td>
            <td key={entry.id}>{entry.present}</td>
            <td key={entry.id}>{entry.future}</td>
            <td key={entry.id}>{entry.entry}</td>
            <td>
                {entry.user === user._id ?
                    <Link 
                        className='button'
                        to={{ pathname: '/edit', state: {entry} }}>
                        Edit
                    </Link>
                    :
                    <></>
                }
            </td>
            <td key={entry.id}>
                {entry.user === user._id ?
                    <button onClick={() => handleDeleteEntry(entry._id)}>Delete</button>
                    :
                <></>
                }
            </td>
        </tr>
    )
}

export default Entry