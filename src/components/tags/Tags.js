import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Tags.css';

class Tags extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: null,
        };
    }

    async componentDidMount() {
        const tags = (await axios.get('http://localhost:8080/tags')).data;

        this.setState(
            {
                tags,
            });
    }

    render() {
        return(

            <div className="grid-container">
                {this.state.tags === null && <p>Loading Tags ...</p>}
                {
                    this.state.tags && this.state.tags.map(
                        tag => (
                            <div key={tag.id} className="card">
                            <Link to={`/tags/${tag.id}`}>
                            
                                
                                <div  className="card-content">
                                    <h5>{tag.tagName}</h5>
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

export default Tags;