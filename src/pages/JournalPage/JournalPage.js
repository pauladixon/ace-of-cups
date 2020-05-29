import React, { Component } from 'react'
import entriesService from '../../utils/entriesService'

class JournalPage extends Component {

    async componentDidMount() {
        const entries = await entriesService.index()
        this.props.handleUpdateEntries(entries)
    }
    render() {
        const entryRows = this.props.entries.map((entry, idx) => (
            <tr key={idx}>
                <td>{entry.date}</td>
                <td>{entry.past}</td>
                <td>{entry.present}</td>
                <td>{entry.future}</td>
                <td>{entry.entry}</td>
            </tr>
        ))
        return (
            <div>
                <div>Journal</div>
                {this.props.entries.length ?
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Past</th>
                                <th>Present</th>
                                <th>Future</th>
                                <th>Entry</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entryRows}
                        </tbody>
                    </table>
                :
                <h4>No Journal Entries Yet</h4>
                }
            </div>
        )
    }
}

export default JournalPage
