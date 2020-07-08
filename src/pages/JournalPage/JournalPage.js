import React from 'react'
import JournalListItem from '../../components/JournalListItem/JournalListItem'
import './JournalPage.scss'

function JournalPage(props) {
    
    if(props.entries.length) {
        return (
            <div className='entries'>
                {props.entries.map(entry =>
                    <JournalListItem
                        entry={entry}
                        key={entry._id}
                        user={props.user}
                        handleDeleteEntry={props.handleDeleteEntry}
                        returnSpread={props.returnSpread}
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
