import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <div className="main-intro">
                <div className="intro-overview-container">
                    <h3>Hello, I’m Caoimhe. I write code. I’ve made <a href="/tabula-rasa"><span id="green-font">ecommerce sites</span></a>, <a href="/articulate-360"><span id="yellow-font">VR projects</span></a> and <a href="/music-mapper"><span id="pink-font">web apps</span></a>.</h3>
                </div>
            </div>
        )
    }
}

export default Homepage
