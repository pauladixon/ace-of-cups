import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ReadingPage.scss'

class ReadingPage extends Component {
    render() {
        return (
            <>
                <div>Reading</div>
                <div className='reading-container'>
                    <Link to='/addentry'>
                        <button className='go'>Add Reading to Journal</button>
                    </Link>
                </div>
            </>
        )
    }
}

export default ReadingPage