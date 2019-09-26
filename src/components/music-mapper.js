import React, {Component} from 'react'

class MusicMapper extends Component {
    render() {
        return (
            <div className="project-page-container">
            <div className="project-main-container">
                <div className="the-div-that-holds-the-divs">
                    <div className="project-row-one">
                        <div className="holder-div">
                            <img className="project-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/music-mapper-1.png"></img>
                        </div>
                        <div className="holder-div">
                            <img className="project-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/music-mapper-3.png"></img>
                        </div>
                    </div>
                    <div className="project-row-two">
                        <div className="holder-div">
                            <img className="project-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/music-mapper-4.png"></img>
                        </div>
                        <div className="holder-div">
                            <img className="project-image" src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/music-mapper-2.png"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-details-container">
                <div className="project-details-header">
                    <h1>Music taste, made visual</h1>
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
                Group project, software developer
                </p>
                <span className="the-tech-header-text"><h3>The Tech</h3></span>
                <p>
                JavaScript, HTML, CSS, Spotify OAuth 2.0, Request, Spotify API, Musixmatch API, D3.js, React, Redux
                </p>
            </div>
            </div>
        )
    }
}

export default MusicMapper
