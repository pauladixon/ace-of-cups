import React, { Component } from 'react'

class AddEntriesPage extends Component {
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
                <header>Add Journal Entry</header>
                <form ref={this.formRef} autoComplete='off' onSubmit={this.handleSubmit}>
                    <div><label>Date</label>
                        <input
                            name='date'
                            type='date'
                            value={this.state.formData.date}
                            onChange={this.handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div><label>Card in the Past Position</label>
                        <input
                            name='past'
                            type='text'
                            value={this.state.formData.past}
                            onChange={this.handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div><label>Card in the Present Position</label>
                        <input
                            name='present'
                            type='text'
                            value={this.state.formData.present}
                            onChange={this.handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div><label>Card in the Future Position</label>
                        <input
                            name='future'
                            type='text'
                            value={this.state.formData.future}
                            onChange={this.handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div><label>Journal Entry</label>
                        <input
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
                        >Add Reading
                        </button>
                    </div>
                </form>
            </>
        )
    }
}

export default AddEntriesPage