import React from 'react'
import { Link } from 'react-router-dom'
import './JournalEntry.scss'


const JournalEntry = ({entry, spread, handleDeleteEntry, user}) => {
    return (
        <>
            <div key={entry.id} className='entry'>
                <p className='journal-row date' key={entry.id}>{entry.date}</p>
                <div>
                    {spread}
                </div>
                <div className='right' key={entry.id}>{entry.entry}</div>

                <div className='card-buttons'>
                    <div key={entry.id}>
                        {entry.user === user._id ?
                            <button onClick={() => handleDeleteEntry(entry._id)}>Delete</button>
                            :
                        <></>
                        }
                    </div>
                    {entry.user === user._id ?
                        <Link 
                            to={{ pathname: '/edit', state: {entry} }}>
                                <button key={entry.id}>Edit</button>
                        </Link>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}

export default JournalEntry