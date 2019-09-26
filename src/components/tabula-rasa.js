import React, {Component} from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

class TabulaRasa extends Component {
    render() {
        return (
            <div className="project-page-container">
            <div className="project-main-container">
                {/* <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut">
                    <h3>TABULA RASA</h3>
                </ScrollAnimation> */}
                <div className="the-div-that-holds-the-divs">
                    <div className="project-row-one">
                        <div className="holder-div">
                            <img className="project-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/tabula-rasa.png"></img>
                        </div>
                        <div className="holder-div">
                            <img className="project-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/tabula-rasa-editorial-view.png"></img>
                        </div>
                    </div>
                    <div className="project-row-two">
                        <div className="holder-div">
                            <img className="project-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/tabula-rasa-product-view.png"></img>
                        </div>
                        <div className="holder-div">
                            <img className="project-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/tabula-rasa-services-view.png"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-details-container">
                <div className="project-details-header">
                    <h1>A chic approach to curated prints</h1>
                </div>
                <div className="project-details-more-info" />
            </div>
            <div className="tech-stack-details">
                <span className="the-brief-header-text"><h3>The Brief</h3></span>
                <p>
                In part, I wanted to make an elegant example of a straightforward ecommerce site. But I also wanted the site to fill a void I've always felt: a good source for classic, curated art prints. I figured out the tech side of things, but the copyright quandries are still tbd.
                </p>
                <span className="the-role-header-text"><h3>The Role</h3></span>
                <p>
                Sole developer
                </p>
                <span className="the-tech-header-text"><h3>The Tech</h3></span>
                <p>
                JavaScript, HTML, CSS, React, Redux, React-Redux, Git, Node.js, Express, Sequelize, Google OAuth
                </p>
            </div>
            </div>
        )
    }
}

export default TabulaRasa
