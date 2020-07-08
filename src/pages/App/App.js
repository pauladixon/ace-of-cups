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
import Controls from '../../components/Controls/Controls'
import EditEntryPage from '../EditEntryPage/EditEntryPage'
import Card from '../../components/Card/Card'


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

  // tarot reading //

  dealCards = () => {
    let spreadData = []
    let cards = this.props.cards.slice(0)
    for (let i=0; i<3; i++){
      let random = Math.floor(Math.random() * cards.length)
      let card = cards.splice(random, 1)[0],
        name = card.name,
        position = this.props.layout[0][i]
      spreadData.push(
        [i, name, card, position]
      )
    }
    return [...spreadData]
  }

  returnSpread = () => {
    let spread = []
    for (let i=0; i<3; i++){
      spread.push(
        <Card 
          index={this.state.spreadData[i][0]} 
          key={this.state.spreadData[i][1]} 
          value={this.state.spreadData[i][2]} 
          position={this.state.spreadData[i][3]} 
        />
      )
    }
    return [...spread]
  }

  async shuffleCards () {
    const spreadData = await this.dealCards()
      this.setState({ spreadData })
    const spread = await this.returnSpread()
      this.setState({ spread })
  }

  // journal entries //

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

  getCurrentDate(){
    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    return `${year}${''}${month<10?`0${month}`:`${month}`}${''}${date}`
  }

  // lifecycle methods //

  async componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
    const entries = await entriesAPI.index()
    this.setState({ entries })
    const date = await this.getCurrentDate()
    this.setState({ date })
  }

  async componentWillUnmount() {
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
                <Link to='/reading'>
                  <Controls 
                    shuffleCards={() => this.shuffleCards()}
                  />
                </Link>
              </>
            }/>
            <Route exact path='/reading' render={() =>
              <>
                <ReadingPage
                  spreadData={this.state.spreadData}
                  spread={this.state.spread}
                />
              </>
            }/>
            <Route exact path='/journal' render={({ history, location }) =>
              userService.getUser() ?
                <JournalPage
                  entries={this.state.entries}
                  handleDeleteEntry={this.handleDeleteEntry}
                  user={this.state.user}
                  history={history}
                  location={location}
                  date={this.state.date}
                />
              :
              <Redirect to='/login'/>
            }/>
            <Route exact path='/addentry' render={() =>
              userService.getUser() ?
                <AddEntryPage 
                  handleAddEntry={this.handleAddEntry}
                  user={this.state.user}
                  spreadData={this.state.spreadData}
                  spread={this.state.spread}
                />
              :
              <Redirect to='/login'/>
            }/>
            <Route exact path='/edit' render={({ history, location }) =>
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
          Site Copyright Ⓒ Paula Dixon, 2020 &nbsp; • &nbsp; Tarot Copyright Ⓒ Rachel Howe, 2020
        </footer>
      </div>
    ) 
  }
}

export default withRouter(App)
