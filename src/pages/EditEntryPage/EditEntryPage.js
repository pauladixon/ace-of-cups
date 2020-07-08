import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EditEntryPage.scss'

class EditEntryPage extends Component {

    state = {
        invalidForm: false,
        formData: this.props.location.state.entry
    }

    formRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleUpdateEntry(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    render() {
        return (
            <>
                <form 
                    className='new-entry'
                    ref={this.formRef} 
                    autoComplete='off' 
                    onSubmit={this.handleSubmit}
                >
                    <div className='add-entry'><label>Date</label>
                        <input
                            className='form-line form-date'
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
                        <textarea
                            className='form-line'
                            name='entry'
                            type='text'
                            value={this.state.formData.entry}
                            onChange={this.handleChange}
                            rows="10" cols="19"
                        >
                        </textarea>
                    </div>
                    <div className='form-buttons'>
                        <button
                            type='submit'
                            disabled={this.state.invalidForm}
                        >Update Journal Entry
                        </button>
                        <div>
                            <Link to='/journal'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default EditEntryPage