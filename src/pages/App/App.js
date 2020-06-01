import React from 'react'
import { Route, Switch, Link, Redirect, withRouter } from 'react-router-dom'
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
import Card from '../../components/Card/Card'
import Controls from '../../components/Controls/Controls'
import EditEntryPage from '../EditEntryPage/EditEntryPage'


class App extends React.Component {
  navigation = React.createRef()
  
  constructor(props){
    super(props)
    this.state = {
      open: false,
      entries: [],
      user: userService.getUser(),
      sections: this.dealCards(3, true)
    }
    this.shuffleCards = this.shuffleCards.bind(this)
  }

  // dropdown //
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      }
    })
  }
  
  // jwt token auth //

  handleLogout = () => {
    userService.logout()
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  // tarot reading //

  dealCards(display, load) {
    let spread = []
    let cards = this.props.cards.slice(0)
    let allCards = display
    let layout = 0

    for (let i=0; i<allCards; i++){
      let random = Math.floor(Math.random() * cards.length)
      let card = cards.splice(random, 1)[0],
        name = card.name,
        position = this.props.layout[layout][i]
      let classes = layout === 2 ? 'card todays' : 'card'

      if (load !== true){
        spread.push(<div className={classes} ket={i}><Card index={i} key={name} value={card} position={position} /></div>)
      }
    }
    return [spread]
  }
  shuffleCards(display, load){
    let cardsArray = this.dealCards(display, load)
    this.setState({ spread: cardsArray[0] })
  }

  // CRD journal entries //

  handleAddEntry = async newEntryData => {
    const newEntry = await entriesAPI.create(newEntryData)
    this.setState(state => ({
      entries: [...state.entries, newEntry]
    }), () => this.props.history.push('/journal'))
  }

  handleUpdateEntry = async updatedEntryData => {
    const updatedEntry = await entriesAPI.update(updatedEntryData)
    const newEntriesArray = this.state.entries.map(e => 
      e._id === updatedEntry._id ? updatedEntry : e)
      this.setState({ entries: newEntriesArray },
        () => this.props.history.push('/journal'))
  }

  handleDeleteEntry = async id => {
    await entriesAPI.deleteOne(id)
    this.setState(state => ({
      entries: state.entries.filter(e => e._id !== id)
    }), () => this.props.history.push('/journal'))
  }

  async componentDidMount() {
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
              <>
                <HomePage/>
                <Link to='/Reading'>
                  <Controls shuffleCards={(display, load) => this.shuffleCards(display, load)} />
                </Link>
              </>
            }/>
            <Route exact path='/reading' render={() =>
              <>
                <div>
                  {this.state.spread}
                </div>
                <ReadingPage/>
              </>
            }/>
            <Route exact path='/journal' render={({history, location}) =>
              userService.getUser() ?
                <JournalPage
                  entries={this.state.entries}
                  handleDeleteEntry={this.handleDeleteEntry}
                  user={this.state.user}
                  history={history}
                  location={location}
                  spread={this.state.spread}
                />
              :
              <Redirect to='/login'/>
            }/>
            <Route exact path='/addentry' render={(spread) =>
              <AddEntryPage 
                handleAddEntry={this.handleAddEntry}
                spread={this.state.spread}
              />
            }/>
            <Route exact path='/edit' render={({history, location}) =>
              <EditEntryPage
                handleUpdateEntry={this.handleUpdateEntry}
                history={history}
                location={location}
              />
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

export default withRouter(App)
