import React, { Component } from 'react'

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = []
    for (let i=1; i<=5; i++) {
      this.items.push(i)
    }
  }

  render() {
    return (
      <div className="menu">
        {/* {this.items.map(i => <div className="menu-item" key={i}>
          <a
            href="https://github.com/Middlerun/cheeseburger-menu"
            onClick={this.props.closeCallback}
            target="_blank">
            Menu item {i}
          </a>
        </div>)} */}
        <div className="menu-item">
            <a
            href="/about"
            onClick={this.props.closeCallback}>
                About
            </a>
        </div>
        <div className="menu-item">
            <a
            href="/tabula-rasa"
            onClick={this.props.closeCallback}>
            Tabula Rasa
            </a>
        </div>
        <div className="menu-item">
            <a
            href="/articulate-360"
            onClick={this.props.closeCallback}>
            Articulate 360
            </a>
        </div>
        <div className="menu-item">
            <a
            href="/music-mapper"
            onClick={this.props.closeCallback}>
            Music Mapper
            </a>
        </div>
      </div>
    )
  }
}

export default MenuContent
