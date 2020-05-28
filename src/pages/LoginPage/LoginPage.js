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
                    <div className='form login'>
                        <div>
                            <input 
                                className='form-line' 
                                type='email' 
                                placeholder='Email' 
                                value={this.state.email} 
                                name='email' 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <input 
                                className='form-line' 
                                type='password' 
                                placeholder='Password' 
                                value={this.state.pw} 
                                name='pw' 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-links'>
                            <Link to='/'>Cancel</Link>
                            <button>Log In</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage