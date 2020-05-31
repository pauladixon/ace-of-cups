import React, { Component } from 'react'

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
            <div>
                <img src={this.state.image} alt={this.props.value.name}/>
                <p>{this.props.position} - {this.props.value.name}</p>
            </div>
        )
    }
}