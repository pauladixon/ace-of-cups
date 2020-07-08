import React from 'react'
import { Link } from 'react-router-dom'
import './JournalListItem.scss'


const JournalListItem = ({entry, returnSpread}) => {
    return (
        <>
            <Link 
                to={{
                    pathname: '/detail',
                    state: { entry }
                }}
            >
                <div 
                    key={entry.id} 
                    className='entry'
                    onClick={() => returnSpread(entry.spreadData)}
                >
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
                </div>
            </Link>
        </>
    )
}

export default JournalListItem