import React, { Component, PropTypes } from 'react'
import Card from '../Card/Card'

export default class ThreeCardLayout extends Component {

    static propTypes = {
        cards: PropTypes.array.isRequired
    }

    renderCards() {
        return this.props.cards.map(card => {
            return Object.assign({}, card)
        }).map((card, index) => {
            return (
                <Card 
                    {...card}
                    positionInfo={this.props.positionInfos[index]}
                    positionTitle={this.props.positionTitles[index]}
                    key={`card=${index}`}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <div>{this.renderCards()}</div>
            </div>
        )
    }
}