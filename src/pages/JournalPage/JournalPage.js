import React from 'react'
import Entry from '../../components/Entry/Entry'
import './JournalPage.scss'

function JournalPage(props) {
    
    if(props.entries.length) {
        return (
            <div className='entries'>
                {props.entries.map(entry =>
                    <Entry
                        entry={entry}
                        key={entry._id}
                        user={props.user}
                        handleDeleteEntry={props.handleDeleteEntry}
                    />
                )}
            </div>
        )
    } else {
        return (
            <p>No Journal Entries Yet</p>
        )
    }
}

export default JournalPage
