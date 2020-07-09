import React from 'react'
import { Link } from 'react-router-dom'
import './JournalEntry.scss'
import moment from 'moment'


const JournalEntry = ({entry, spread, handleDeleteEntry, user}) => {
    return (
        <>
            <div key={entry.id} className='journal-entry'>
                <div className='top'>
                    <p className='journal-date' key={entry.id}>{moment(entry.date).format('LL')}</p>
                    <div className='entry-text' key={entry.id}>{entry.entry}</div>
                </div>
                <div>
                    {spread}
                </div>
                <div className='card-buttons'>
                    <div key={entry.id}>
                        {entry.user === user._id ?
                            <button className='detail-button' onClick={() => handleDeleteEntry(entry._id)}>Delete</button>
                            :
                        <></>
                        }
                    </div>
                    <Link 
                        to={{ pathname: '/journal'}}>
                            <button className='detail-button'>Back to Journal</button>
                    </Link>
                    {entry.user === user._id ?
                        <Link 
                            to={{ pathname: '/edit', state: {entry} }}>
                                <button className='detail-button' key={entry.id}>Edit</button>
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