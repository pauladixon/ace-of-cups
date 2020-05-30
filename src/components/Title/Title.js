import React from 'react'
import { Link } from 'react-router-dom'
import './Title.scss'

const Title = () => {
    return (
        <div className='title-container'>
            <Link to=''>
                <img 
                    className='title' 
                    src='title.png' 
                    alt='Ace of Cups'
                />
            </Link>
        </div>
    )
}

export default Title