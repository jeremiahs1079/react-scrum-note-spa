import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Project.css';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: null,
        };
    }

    async componentDidMount() {
        const projects = (await axios.get('http://localhost:8080/projects')).data;

        this.setState(
            {
                projects,
            }
        )
    }

    render() {
        return(

                <div className="grid-container">
                    {this.state.projects === null && <p>Loading Projects ...</p>}
                    {
                        this.state.projects && this.state.projects.map(
                            project => (
                                <div key={project.id} className="card">
                                <Link to={`/projects/${project.id}`}>
                                
                                    
                                    <div  className="card-content">
                                        <h5>{project.projectName}</h5>
                                        <p>{project.description}</p>
                                    </div>
                                    
                                
                                </Link>
                                </div>
                            )
                        )
                    }
                </div>

        );
    }
}

export default Projects