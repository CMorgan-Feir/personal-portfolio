import React, {Component} from 'react'

class About extends Component {
    render() {
        return (
            <div className="main-about">
                <div className="about-image-container">
                    <img className="about-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/portrait.png"></img>
                </div>
                <div className="about-text-container">
                    <span id="about-yellow">
                    <h3 className="about-header-text">I used to write about art; now I write code.</h3>
                    </span>
                    <p>
                        Working as an online editor, I started learning basic HTML and CSS to update the website, but the immense satisfaction I got from figuring out solutions drove me to learn more. I was struck by how many parallels there are between writing code and writing more generally—after all, an errant semicolon is an errant semicolon whether it’s in a line of JavaScript or an essay about Impressionist painting.
                    </p>
                    <span id="about-pink">
                    <h3 className="about-header-text">I mainly work with the NERDS stack.</h3>
                    </span>
                    <p>
                        So that means a lot of: JavaScript, HTML, CSS, Node.js, Express, React, Redux, React-Redux, React 360, Git and Sequelize
                    </p>
                    <p>
                        And a little bit of: Chai, Mocha, Firebase, GIMP, Enzyme, Jasmine, D3.js
                    </p>
                    <span id="about-blue">
                    <h3 className="about-header-text">And I always love to chat!</h3>
                    </span>
                    <p>
                        So go ahead: <a className="the-brief-header-text" href="mailto:morganfeir@gmail.com">write me an email</a>, <a className="the-role-header-text" href="https://www.linkedin.com/in/morgan-feir/">add me on LinkedIn</a>, even peruse <a className="the-tech-header-text" href="https://github.com/CMorgan-Feir">my code on Github</a> if you're so inclined.
                    </p>
                    <span id="about-lilac">
                        <a href="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/CMorganFeir.pdf" download>
                            <h3 className="about-header-text">Or just download my resume.</h3>
                        </a>
                    </span>
                </div>
            </div>
        )
    }
}

export default About
