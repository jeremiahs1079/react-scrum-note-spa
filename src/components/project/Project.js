import React, { Component } from 'react';
import axios from 'axios';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: null,
            scrumNotes: null,
        }
    }

    async componentDidMount() {
        const { match : {params}} = this.props;

        const project = (await axios.get(`http://localhost:8080/projects/${params.projectId}`)).data;
        const scrumNotes = (await axios.get(`http://localhost:8080/scrumnotes/project/${params.projectId}`)).data;

        this.setState({
            project,
            scrumNotes,
        });
    }

    render() {
        const {project} = this.state;
        if (project === null) return <p>Loading Project...</p>;
        return(
            <div>
                <h4>{project.projectName}</h4>
                <p>{project.description}</p>
                <div>
                    {this.state.scrumNotes && this.state.scrumNotes.map(
                        note => (
                            <div key={note.id}>{note.content}</div>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Project;