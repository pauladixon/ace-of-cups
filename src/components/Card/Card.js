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
            <div className='card-row'>
                <img className='card'src={this.state.image} alt={this.props.value.name}/>
                <div className='card-right'>
                    <p>{this.props.position} :: {this.props.value.name}</p>
                    <p>{this.props.value.description}</p>
                </div>
            </div>
        )
    }
}