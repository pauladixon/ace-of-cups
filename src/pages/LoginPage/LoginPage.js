import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.scss'

class LoginPage extends Component {

    state = {
        email: '',
        pw: ''
    }

    handleChange = (e) => {

    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <header>Log In</header>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input type='email' placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type='password' placeholder='Password' value={this.state.pw} name='pw' onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button>Log In</button>
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage