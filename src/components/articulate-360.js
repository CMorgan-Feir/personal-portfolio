import React, {Component} from 'react'

class Articulate360 extends Component {
    render() {
        return (
            <div className="project-page-container">
                <div className="video-container">
                    <video className="video-content" loop autoPlay>
                        <source src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/articulate-360.mp4" tyle="video/mp4" />
                    </video>
                </div>
                <div className="project-details-container">
                    <div className="project-details-header">
                        <h1>An otherworldly art experience</h1>
                    </div>
                    <div className="project-details-more-info" />
                </div>
                <div className="tech-stack-details">
                    <span className="the-brief-header-text"><h3>The Brief</h3></span>
                    <p>
                        Works of art are fragile, hard to ship, expensive and rare. Few people can afford to travel to all the art they would like to see, and digital images rarely do justice to the real thing. Articulate 360 is meant to bridge this gap: an immersive VR experience where works of art come to like with careful animations in the digital realm.
                    </p>
                    <span className="the-role-header-text"><h3>The Role</h3></span>
                    <p>
                        Sole developer
                    </p>
                    <span className="the-tech-header-text"><h3>The Tech</h3></span>
                    <p>
                        JavaScript, HTML, React 360, Git and plenty of math
                    </p>
                </div>
            </div>
        )
    }
}

export default Articulate360
