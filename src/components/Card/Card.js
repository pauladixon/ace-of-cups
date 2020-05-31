import React, {Component, PropTypes} from 'react'

export default class Card extends Component {

    static propTypes = {
        "assetName": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired,
        "description": PropTypes.string.isRequired,
    }

    cardDescription() {
        let desc = {}
        desc = this.props.description
        return desc
    }

    imageSource() {
        const { assetName } = this.props
        return `${assetName}.png`
    }
    
    render() {
        const { name } = this.props

        return(
            <div className='Card'>
                <img src={this.imageSource()} alt={name} />
                <h4 className="cardText">{this.props.positionTitle}</h4>
                <div className="cardText">{this.props.positionInfo}</div>
                <h4 className="cardText">{name}</h4>
                <div className="cardText">{this.cardDescription()}</div>
            </div>
        )
    }
}