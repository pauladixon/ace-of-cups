import React from 'react'


const Entry = (props, {handleDeleteEntry}) => {
    return (
        <tr>
            <td>{props.entry.date}</td>
            <td>{props.entry.past}</td>
            <td>{props.entry.present}</td>
            <td>{props.entry.future}</td>
            <td>{props.entry.entry}</td>
            <td>
                <button onClick={() => handleDeleteEntry(props.entry._id)}>Delete</button>
            </td>
        </tr>
    )
}

export default Entry