import React, { Component } from 'react'
import './JournalDetailPage.scss'
import JournalEntry from '../../components/JournalEntry/JournalEntry'

class JournalDetailPage extends Component {

    state = {
        entry: this.props.location.state.entry,
        spread: []
    }

    async componentDidMount () {
        const spread = await this.props.returnSpread(this.state.entry.spreadData)
        this.setState({ spread })
    }

    render() {
        return (
            <>
                <JournalEntry
                    entry={this.state.entry}
                    key={this.state.entry._id}
                    user={this.props.user}
                    handleDeleteEntry={this.props.handleDeleteEntry}
                    spread={this.state.spread}
                />
            </>
        )
    }
}

export default JournalDetailPage