import React, {Component} from 'react'

class TabulaRasa extends Component {
    render() {
        return (
            <div className="project-page-container">
            <div className="project-main-container">
                <div className="project-background-text">TABULA RASA</div>
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
                    <h1>A chic site for curated art prints</h1>
                </div>
                <div className="project-details-more-info">
                    <h3>Yes, I wanted to make an elegant example of a straightforward ecommerce site. But I also wanted the site to fill a void I've always felt: a good source for classic, curated art prints. I figured out the tech side of things, the copyright quandries are still tbd</h3>
                </div>
            </div>
            <div className="tech-stack-details">
                <p>
                    Role: Sole developer
                </p>
                <p>
                    Tech used: JavaScript, HTML, CSS, React, Redux, React-Redux, React 360, Git, Node.js, Express, Sequelize
                </p>
            </div>
            </div>
        )
    }
}

export default TabulaRasa
