import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import About from './components/about'
import Homepage from './components/homepage'
import TabulaRasa from './components/tabula-rasa'
import MusicMapper from './components/music-mapper'
import Articulate360 from './components/articulate-360'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/tabula-rasa" component={TabulaRasa} />
        <Route path="/music-mapper" component={MusicMapper} />
        <Route path="/articulate-360" component={Articulate360} />
      </Switch>
    )
  }
}

export default Routes
