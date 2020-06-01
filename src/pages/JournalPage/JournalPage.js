import React from 'react'
import Entry from '../../components/Entry/Entry'
import './JournalPage.scss'

function JournalPage(props, {handleDeleteEntry}) {
    
    if(props.entries.length) {
        return (
            <div>
                <header>Journal</header>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Past</th>
                            <th>Present</th>
                            <th>Future</th>
                            <th>Entry</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.entries.map(entry =>
                            <Entry
                                entry={entry}
                                key={entry._id}
                                user={props.user}
                                handleDeleteEntry={props.handleDeleteEntry}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <p>No Journal Entries Yet</p>
        )
    }
}

export default JournalPage
