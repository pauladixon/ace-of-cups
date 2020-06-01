import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ReadingPage.scss'

class ReadingPage extends Component {
    render() {
        return (
            <div className='reading-container'>
                <Link to='/addentry'>
                    <button className='invert-button'>Add Reading to Journal</button>
                </Link>
            </div>
        )
    }
}

export default ReadingPage