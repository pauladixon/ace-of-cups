import React, { Component } from 'react'
import './AddEntryPage.scss'

class AddEntryPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            date: '',
            past: '',
            present: '',
            future: '',
            entry: '',
        }
    }

    formRef = React.createRef()

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData, 
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddEntry(this.state.formData)
    }

    render() {
        return (
            <>
                <form 
                    className='entry'
                    ref={this.formRef} 
                    autoComplete='off' 
                    onSubmit={this.handleSubmit}
                >
                    <div className='add-entry'><label>Date</label>
                        <input
                            className='form-line'
                            name='date'
                            type='date'
                            value={this.state.formData.date}
                            onChange={this.handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div className='add-entry'><label>Card in the Past Position</label>
                        <input
                            className='form-line'
                            name='past'
                            type='text'
                            value={this.state.formData.past}
                            onChange={this.handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div className='add-entry'><label>Card in the Present Position</label>
                        <input
                            className='form-line'
                            name='present'
                            type='text'
                            value={this.state.formData.present}
                            onChange={this.handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div className='add-entry'><label>Card in the Future Position</label>
                        <input
                            className='form-line'
                            name='future'
                            type='text'
                            value={this.state.formData.future}
                            onChange={this.handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div className='add-entry'><label>Journal Entry</label>
                        <input
                            className='form-line'
                            name='entry'
                            type='text'
                            value={this.state.formData.entry}
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <div>
                        <button
                            type='submit'
                            disabled={this.state.invalidForm}
                        >Add Reading to Journal
                        </button>
                    </div>
                </form>
            </>
        )
    }
}

export default AddEntryPage