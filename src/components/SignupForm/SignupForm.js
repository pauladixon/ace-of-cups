import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userService from '../../utils/userService'

class SignupForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    }

    handleChange = (e) => {
        this.props.updateMessage('')
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await userService.signup(this.state)
            this.props.history.push('/')
        } catch (err) {
            this.props.updateMessage(err.message)
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf)
    }
    
    render() {
        return (
            <div>
                <header>Sign Up</header>
                <form onSubmit={this.handleSubmit}>
                    <div className='form signup'>
                        <input 
                            className='form-line' 
                            type='text' 
                            placeholder='Name' 
                            value={this.state.name} 
                            name='name' 
                            onChange={this.handleChange} 
                        />
                        <input 
                            className='form-line' 
                            type='email' 
                            placeholder='Email' 
                            value={this.state.email} 
                            name='email' 
                            onChange={this.handleChange} 
                        />
                        <input 
                            className='form-line' 
                            type='password' 
                            placeholder='Password' 
                            value={this.state.password} 
                            name='password' 
                            onChange={this.handleChange} 
                        />
                        <input 
                            className='form-line' 
                            type='password' 
                            placeholder='Confirm Password' 
                            value={this.state.passwordConf} 
                            name='passwordConf' 
                            onChange={this.handleChange}
                        />
                        <div className='form-links' >
                            <Link to='/'>Cancel</Link>
                            <button disabled={this.isFormInvalid()}>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm