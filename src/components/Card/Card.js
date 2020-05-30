import React, {Component, PropTypes} from 'react'

export default class Card extends Component {

    static propTypes = {
        'name': PropTypes.string.isRequired,
        'name_short': PropTypes.string.isRequired,
        'value_int': PropTypes.value_int.isRequired,
        'meaning_up': PropTypes.string.isRequired,
        'type': PropTypes.string.isRequired
    }

    render() {
        const { name } = this.props
        let desc = this.props.meaning_up
        image = `${name_short}.png`
        
        return (
            <div>
                <img src={image} alt={name}/>
                <p>Card Location</p>
                <h4>{this.props.positionTitle}</h4>
                <div>{this.props.positionInfo}</div>
                <p>Card Description</p>
                <h4>{name}</h4>
                <div>{desc}</div>
            </div>
        )
    }
}