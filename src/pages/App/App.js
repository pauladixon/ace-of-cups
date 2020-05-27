import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import './App.scss'
import Title from '../../components/Title/Title'

class App extends React.Component {
  navigation = React.createRef()
  state = {
    open: false,
  }

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      }
    })
  }

  handleClickOutside = event => {
    if (this.navigation.current && !this.navigation.current.contains(event.target)) {
      this.setState({
        open: false,
      })
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  render() {
    return (
      <div className="container">
        <div className='logo'>
          <Title />
        </div>
        <div className="nav-container" ref={this.navigation}>
          <button 
            type="button" 
            class="button" 
            onClick={this.handleButtonClick}
          >
            ____ ____ ____
          </button>
          {this.state.open && (
            <Switch>
              <Route render={() =>
                <div class='dropdown'>
                  <ul className='list' onClick={this.handleButtonClick}>
                    <Link to='/'>
                      <li className='list-item'>Pull Cards</li>
                    </Link>
                    <Link to='/Journal'>
                      <li className='list-item nth'>Journal</li>
                    </Link>
                    <Link target="#" href='https://www.smallspells.com/tarot-2'>
                      <li className='list-item nth'>Buy the Deck</li>
                    </Link>
                    <Link to='/Contact'>
                      <li className='list-item nth'>Contact Us</li>
                    </Link>
                    <Link>
                      <li className='list-item nth'>Logout</li>
                    </Link>
                  </ul>
                </div>
              }/>
            </Switch>
          )}
        </div>
        <div className='main'>
          <p className='intro'>
            A tiny app that lends itself to the moments of clarity and guidance found in the tarot. Utilizing Rachel Howe’s Small Spells tarot deck and writings, we can glimpse the energy of any situation with peace and reception through a simple traditional three-card-pull. We can look at these cards as “past” “present” and ”future” in order to note how we may shift our energies to more gracefully move through the situation in question. 
          </p>
          <p className='intro'>
            To dip into this well, close your eyes, focus on a topic, a question, a feeling, a person.... and with a pure intent for seeking information and clarity in the matter at hand, press go!
          </p>
          <Link to='/Reading'>
            <button className='go'>GO →</button>
          </Link>
        </div>
        <footer>
          Copyright Ⓒ Paula Dixon, 2020
        </footer>
      </div>
    ) 
  }
}

export default App;
