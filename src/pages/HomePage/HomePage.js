import React, { Component } from 'react'
import Invitation from '../../components/Invitation/Invitation'


class HomePage extends Component {
    render() {
        return (
            <>
                <Invitation/>
                <footer>
                    Site Copyright Ⓒ Paula Dixon, 2020 &nbsp; • &nbsp; Tarot Copyright Ⓒ Rachel Howe, 2020
                </footer>
            </>
        )
    }
}

export default HomePage