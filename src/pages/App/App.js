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
import userService from '../../utils/userService'

class App extends React.Component {
  navigation = React.createRef()
  state = {
    open: false,
    user: userService.getUser()
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

  handleLogout = () => {
    userService.logout()
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
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
              <div class='dropdown'>
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
            <Route exact path='/journal' render={() =>
              userService.getUser() ?
                <JournalPage/>
              :
              <Redirect to='/login'/>
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
