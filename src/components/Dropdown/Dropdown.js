import React, { useState } from 'react'
import onClickOutside from 'react-onclickoutside'
import './Dropdown.scss'


function Dropdown(){
    const items = [
        { id: 1, value: 'Home' },
        { id: 2, value: 'Journal Entries' },
        { id: 3, value: 'Buy the Deck' },
        { id: 4, value: 'Contact' },
        { id: 5, value: 'Login' },
        { id: 6, value: 'Sign Up' }
      ]
    const [open, setOpen] = useState(false)
    const [selection, setSelection] = useState([])
    const toggle = () => setOpen(!open)
    Dropdown.handleClickOutside = () => setOpen(false)

    function handleOnClick(item) {
        let selectionAfterRemoval = selection
        selectionAfterRemoval = selectionAfterRemoval.filter(
            current => current.id !== item.id
        )
        setSelection([ ...selectionAfterRemoval])
    }

    return (
        <div className='dd-wrapper'>
            <div 
                tabIndex={0} 
                className='dd-header' 
                role='button' 
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className='dd-header__title'>
                    <p className='dd-header__title--bold'>___ ___ ___</p>
                </div>
            </div>
            {open && (
                <ul className='dd-list'>
                    {items.map(item => (
                        <li className='dd-list-item' key={item.id}>
                            <button type='button' onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
}

export default onClickOutside(Dropdown, clickOutsideConfig)