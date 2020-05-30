import React from 'react'


const Entry = ({entry, handleDeleteEntry}) => {
    return (
        <tr>
            <td key={entry.id}>{entry.date}</td>
            <td key={entry.id}>{entry.past}</td>
            <td key={entry.id}>{entry.present}</td>
            <td key={entry.id}>{entry.future}</td>
            <td key={entry.id}>{entry.entry}</td>
            <td key={entry.id}>
                <button onClick={() => handleDeleteEntry(entry._id)}>Delete</button>
            </td>
        </tr>
    )
}

export default Entry;