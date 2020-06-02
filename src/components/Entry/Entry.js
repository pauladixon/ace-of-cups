import React from 'react'
import { Link } from 'react-router-dom'
import './Entry.scss'


const Entry = ({entry, handleDeleteEntry, user}) => {
    return (
        <>
            <div className='entry'>
                <p className='journal-row date' key={entry.id}>{entry.date}</p>
                <div className='data'>
                    <div className='left'>
                        <div className='row'>
                            <p className='label'>Past Position :: </p>
                            <p key={entry.id}>{entry.past}</p>
                        </div>
                        <div className='row'>
                            <p className='label'>Present Position ::</p>
                            <p className='journal-row' key={entry.id}>{entry.present}</p>
                        </div>
                        <div className='row'>
                            <p className='label'>Future Position ::</p>
                            <p className='journal-row' key={entry.id}>{entry.future}</p>
                        </div>
                    </div>
                    <div className='right' key={entry.id}>{entry.entry}</div>
                </div>
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

export default Entry