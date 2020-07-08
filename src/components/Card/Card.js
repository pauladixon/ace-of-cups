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
                <div className='card-left'>
                    <img 
                        className='card' 
                        src={this.state.image} 
                        alt={this.props.value.name}
                    />
                </div>
                <div className='card-right'>
                    <div>
                        <p className='position-label'>
                            {this.props.position}  ::  
                        </p> 
                        <p className='card-label'>
                            {this.props.value.name}
                        </p>
                    </div>
                    <p className='card-description'>{this.props.value.description}</p>
                    <p className='copyright'>Artwork and Text Copyright Ⓒ Rachel Howe, 2020</p>
                </div>
            </div>
        )
    }
}