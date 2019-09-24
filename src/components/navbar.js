import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CheeseburgerMenu from 'cheeseburger-menu'
import MenuContent from './menu'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false
    }

    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)

  }

  openMenu() {
    this.setState({menuOpen: true})
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }

  render() {
    return (
      <div className="main-header">
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu.bind(this)}>
          <MenuContent closeCallback={this.closeMenu.bind(this)} />
        </CheeseburgerMenu>
        <div className="header-nav">
          <div className="nav-left">
              <img onClick={this.openMenu} className="hamburger-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/hamburger-menu.png" />
          </div>
          <div className="nav-centre">
            <Link to="/">
              <img className="logo-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/logo.png"></img>
            </Link>
          </div>
          <div className="nav-right" />
        </div>
      </div>
    )
  }
}

export default Navbar