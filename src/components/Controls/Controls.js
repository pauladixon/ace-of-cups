import React, { Component } from 'react'
import './Controls.scss'

export default class Controls extends Component {

    state = {
        something: false
    }

    render() {
        return (
            <div className='arrow'>
                <button 
                    className='invert-button' 
                    onClick={() => this.props.shuffleCards()}
                >
                    →
                </button>
            </div>
        )
    }
}