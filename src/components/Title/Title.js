import React from 'react'
import { Link } from 'react-router-dom'
import './Title.scss'

const Title = () => {
    return (
        <>
            <Link to=''>
                <img 
                    className='title' 
                    src='title.png' 
                    alt='Ace of Cups'
                />
            </Link>
        </>
    )
}

export default Title