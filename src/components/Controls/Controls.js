import React, { Component } from 'react'

export default class Controls extends Component {

    constructor(props){
        super(props)
        this.state = {
            something: false
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.shuffleCards(3,0)}>GO →</button>
            </div>
        )
    }
}