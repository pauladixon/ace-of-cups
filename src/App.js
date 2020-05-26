import React from 'react'
// import { Link } from 'react-router-dom'
import './App.scss'
import Dropdown from './Dropdown'

const items = [
  {
    id: 1,
    value: 'Contact'
  },
  {
    id: 2,
    value: 'Buy the deck'
  },
  {
    id: 3,
    value: 'Journal Entries'
  },
  {
    id: 4,
    value: 'New Reading'
  },
  {
    id: 5,
    value: 'Login'
  },
  {
    id: 6, 
    value: 'Sign Up'
  }
]

function App() {
  return (
    <div className="container">
      <Dropdown title='≡' items={items} />
    </div>
  )
}

export default App;
