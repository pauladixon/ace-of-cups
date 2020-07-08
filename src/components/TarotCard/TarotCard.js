import React, { Component } from 'react'
import './TarotCard.scss'

export default class TarotCard extends Component {

    state = {
        image: 'images/' + this.props.value.assetName + '.png'
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
                    <p className='card-description'>{this.props.value.description} • <span className='copyright'>Artwork & Text Copyright Ⓒ Small Spells, 2020</span></p>
                    <p className='copyright'></p>
                </div>
            </div>
        )
    }
}