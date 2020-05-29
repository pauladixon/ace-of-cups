import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ReadingPage extends Component {
    render() {
        return (
            <>
                <div>Reading</div>
                <Link to='/addentry'>
                    <button className='go'>Add Reading to Journal</button>
                </Link>
            </>
        )
    }
}

export default ReadingPage