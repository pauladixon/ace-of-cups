import React, { Component } from 'react'
import './Card.scss'

export default class Card extends Component {

    constructor(props) {
        super(props)

        let image = 'images/' + this.props.value.assetName + '.png'

        this.state = {
            image: image
        }
    }

    render() {
        return (
            <div className='card'>
                <img src={this.state.image} alt={this.props.value.name}/>
                <p>{this.props.position} - {this.props.value.name}</p>
            </div>
        )
    }
}