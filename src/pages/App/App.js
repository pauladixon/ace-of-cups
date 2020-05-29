import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.scss'
import Title from '../../components/Title/Title'
import SignupPage from '../SignupPage/SignupPage'
import HomePage from '../HomePage/HomePage'
import LoginPage from '../LoginPage/LoginPage'
import ContactPage from '../ContactPage/ContactPage'
import JournalPage from '../JournalPage/JournalPage'
import ReadingPage from '../ReadingPage/ReadingPage'
import AddEntryPage from '../AddEntryPage/AddEntryPage'
import * as entriesAPI from '../../utils/entriesService'
import userService from '../../utils/userService'

class App extends React.Component {
  navigation = React.createRef()
  state = {
    open: false,
    entries: [],
    user: userService.getUser()
  }

  // dropdown //
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
  
  // jwt token auth //

  handleLogout = () => {
    userService.logout()
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  // CRD journal entries //

  handleAddEntry = async newEntryData => {
    const newEntry = await entriesAPI.create(newEntryData)
    this.setState(state => ({
      entries: [...state.entries, newEntry]
    }), () => this.props.history.push('/'))
  }

  handleDeleteEntry = async id => {
    await entriesAPI.deleteOne(id)
    this.setState(state => ({
      entries: state.entries.filter(e => e._id !== id)
    }), () => this.props.history.push('/'))
  }

  // lifecycle methods //

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  async componentDidlMount() {
    const entries = await entriesAPI.index()
    this.setState({ entries })
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
            className="button" 
            onClick={this.handleButtonClick}
          >
            ____ ____ ____
          </button>
            {this.state.open && (
              <div className='dropdown'>
                <ul className='list' onClick={this.handleButtonClick}>
                  <Link to='/'>
                    <li className='list-item'>Pull Cards</li>
                  </Link>
                  <Link to='/journal'>
                    <li className='list-item nth'>Journal</li>
                  </Link>
                  <Link target='#' to='/deck'>
                    <li className='list-item nth'>Buy the Deck</li>
                  </Link>
                  <Link to='/contact'>
                    <li className='list-item nth'>Contact Us</li>
                  </Link>
                  {this.state.user ? 
                    <>
                      <Link to='' onClick={this.handleLogout}>
                        <li className='list-item nth'>Logout</li>
                      </Link>
                    </>
                    :
                    <>
                      <Link to='/login'>
                        <li  className='list-item nth'>Login</li>
                      </Link>
                      <Link to='/signup'>
                        <li  className='list-item nth'>Sign Up</li>
                      </Link>
                    </>
                  }
                </ul>
              </div>
            )}
        </div>
        <div className='body'>
          <Switch>
            <Route exact path='/' render={() =>
              <HomePage/>
            }/>
            <Route exact path='/reading' render={() =>
              <ReadingPage/>
            }/>
            <Route exact path='/journal' render={(history, location) =>
              userService.getUser() ?
                <JournalPage
                  entries={this.state.entries}
                  handleDeleteEntry={this.handleDeleteEntry}
                  user={this.state.user}
                  history={history}
                  location={location}
                />
              :
              <Redirect to='/login'/>
            }/>
            <Route exact path='/addentry' render={() =>
              <AddEntryPage handleAddEntry={this.handleAddEntry}/>
            }/>
            <Route path='/deck' component={() => {
              window.location.href = 'https://www.smallspells.com/tarot-2'
              return null
            }}/>
            <Route exact path='/contact' render={() =>
              <ContactPage/>
            }/>
            <Route exact path='/login' render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
          </Switch>
        </div>
        <footer>
          Copyright Ⓒ Paula Dixon, 2020
        </footer>
      </div>
    ) 
  }
}

export default App;
