import React from 'react'
// import { Link } from 'react-router-dom'
import './App.scss'
import Dropdown from '../../components/Dropdown/Dropdown'
import Title from '../../components/Title/Title'

function App() {
  return (
    <div className="container">
      <div>
        <Dropdown title='___ ___ ___'/>
        <Title />
      </div>
      <div className='main'>
        <p className='intro'>
          A tiny app that lends itself to the moments of clarity and guidance found in the tarot. Utilizing Rachel Howe’s Small Spells tarot deck and writings, we can glimpse the energy of any situation with peace and reception through a simple traditional three-card-pull. We can look at these cards as “past” “present” and ”future” in order to note how we may shift our energies to more gracefully move through the situation in question. 
        </p>
        <p className='intro'>
          To dip into this well, close your eyes, focus on a topic, a question, a feeling, a person.... and with a pure intent for seeking information and clarity in the matter at hand, press go!
        </p>
        <button className='go'>
          GO →
        </button>
      </div>
    </div>
  )
}

export default App;
