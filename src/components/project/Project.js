import React, { Component } from 'react';
import axios from 'axios';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: null,
        }
    }

    async componentDidMount() {
        const { match : {params}} = this.props;

        const project = (await axios.get(`http://localhost:8080/projects/${params.projectId}`)).data;

        this.setState({
            project,
        });
    }

    render() {
        const {project} = this.state;
        if (project === null) return <p>Loading Project...</p>;
        return(
            <div>
                <h6>{project.projectName}</h6>
                <p>{project.description}</p>
            </div>
        )
    }
}

export default Project;