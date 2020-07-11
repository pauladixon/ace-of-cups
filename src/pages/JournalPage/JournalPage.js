import React, { Component } from 'react'
import * as entriesAPI from '../../utils/entriesService'
import { Link } from 'react-router-dom'
import './JournalPage.scss'
import moment from 'moment'


class JournalPage extends Component {
    state = {
        hover: false
    }

    async componentDidMount() {
        const entries = await entriesAPI.index()
        this.setState({ entries })
    }

    render (){
        let hoverFirstChild;
        let hoverLastChild;

        if (this.state.hover) {
            hoverLastChild = {}
            hoverFirstChild = {}
        } else {
            hoverLastChild = { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }
            hoverFirstChild = { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
        }

        if(this.props.entries.length) {
            return (
                <>                
                    <p className='journal-title'>Journal Entries</p>
                    <div className='entries'>
                        {this.props.entries.map((entry, i) =>
                            <Link to={{ pathname: '/detail', state: { entry } }} >
                                <div 
                                    key={entry.id} 
                                    className='line-item' 
                                    style={
                                        ((i === this.props.entries.length - 1) ? 
                                            {borderBottom: 0} 
                                        : 
                                            {}
                                        ), 
                                        ((i === this.props.entries.length - 1) ? 
                                            hoverLastChild 
                                        : 
                                            (i === 0) ? hoverFirstChild : {}
                                        )
                                    }
                                >
                                    <div className='row'>
                                        <div className='left'>
                                            <p className='date' key={entry.id}>{moment(entry.date).format('LL')} </p>
                                        </div>
                                        <div className='right'>
                                            <div className='top-row'>
                                                <p className='card-name one' key={entry.id}>{entry.past}</p>
                                                <p className='dot'>•</p>
                                                <p className='card-name one' key={entry.id}> {entry.present}</p>
                                                <p className='dot'>•</p>
                                                <p className='card-name' key={entry.id}> {entry.future}</p>
                                            </div>
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
