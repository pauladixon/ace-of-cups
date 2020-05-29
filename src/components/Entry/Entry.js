import React from 'react'


const Entry = ({entry, handleDeleteEntry}) => {
    return (
        <tr>
            <td>{entry.date}</td>
            <td>{entry.past}</td>
            <td>{entry.present}</td>
            <td>{entry.future}</td>
            <td>{entry.entry}</td>
            <td>
                <button onClick={() => handleDeleteEntry(entry._id)}>Delete</button>
            </td>
        </tr>
    )
}

export default Entry