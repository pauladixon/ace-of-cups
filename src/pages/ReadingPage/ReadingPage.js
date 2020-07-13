import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ReadingPage.scss'

class ReadingPage extends Component {

    render() {
        return (
            <div className='reading-container'>
                <div>
                  {this.props.spread}
                </div>
                <Link to='/addentry'>
                    <div className='button-container'>
                        <button className='invert-button mobile-button'>Add Reading to Journal</button>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ReadingPage