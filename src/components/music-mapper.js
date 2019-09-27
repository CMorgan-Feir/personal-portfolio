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
                Every day, we leave little digital trails of data about our likes and preferences online—Music Mapper is a web app that leverages this data (specifically around music taste) to create data visualizations. It was created as a group project, within which I implemented routes using Spotify’s OAuth 2.0 to gain access tokens, and Request routes to make calls to the Spotify and Musixmatch APIs. I created a function to clean and reformat the response data, and built interactive graphs with D3.js that visualize the data. I also created React components for the homepage and various graphs.
                </p>
                <span className="the-role-header-text"><h3>The Role</h3></span>
                <p>
                Group project, software developer
                </p>
                <span className="the-tech-header-text"><h3>The Tech</h3></span>
                <p>
                JavaScript, HTML, CSS, Spotify OAuth 2.0, Request, Spotify API, Musixmatch API, D3.js, React, Redux, Express, Express Sessions
                </p>
            </div>
            </div>
        )
    }
}

export default MusicMapper
