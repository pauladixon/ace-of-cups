import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userService from '../../utils/userService'
import './LoginPage.scss'

class LoginPage extends Component {

    state = {
        email: '',
        pw: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await userService.login(this.state)
            this.props.handleSignupOrLogin()
            this.props.history.push('/')
        } catch (err) {
            alert('Invalid Credentials!')
        }
    }

    render() {
        return (
            <div>
                <p className='contact-title'>Log In</p>
                <form onSubmit={this.handleSubmit} className='form-shift'>
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