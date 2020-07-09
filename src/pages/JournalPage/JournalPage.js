import React, { Component } from 'react'
import * as entriesAPI from '../../utils/entriesService'
import { Link } from 'react-router-dom'
import './JournalPage.scss'
import moment from 'moment'


class JournalPage extends Component {


    async componentDidMount() {
        const entries = await entriesAPI.index()
        this.setState({ entries })
    }

    render (){
        if(this.props.entries.length) {
            return (
                <>                
                    <p className='journal-title'>Journal Entries</p>
                    <div className='entries'>
                        {this.props.entries.map(entry =>
                            <Link to={{ pathname: '/detail', state: { entry } }} >
                                <div key={entry.id} className='line-item'>
                                    <div className='row'>
                                        <p className='date left' key={entry.id}>{moment(entry.date).format('LL')} </p>
                                        <div className='right'>
                                            <p className='card-name one' key={entry.id}>{entry.past}</p>
                                            <p className='dot'>•</p>
                                            <p className='card-name one' key={entry.id}> {entry.present}</p>
                                            <p className='dot'>•</p>
                                            <p className='card-name' key={entry.id}> {entry.future}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </>
            )
        } else {
            return (
                <p className='journal-empty'>No Journal Entries Yet</p>
            )
        }
    }
}

export default JournalPage
