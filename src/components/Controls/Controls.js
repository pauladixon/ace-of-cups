import React, { Component } from 'react'

export default class Controls extends Component {

    state = {
        something: false
    }

    render() {
        return (
            <div>
                <button 
                    className='invert-button' 
                    onClick={() => this.props.shuffleCards(3,0)}
                >
                    →
                </button>
            </div>
        )
    }
}