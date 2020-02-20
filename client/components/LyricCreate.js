import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addLyricMutation } from '../queries';

export class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();
        this.props
            .mutate({
                variables: {
                    content: this.state.content,
                    songId: this.props.songId
                }
            })
            .then(() => this.setState({ content: '' }));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Add Lyrics:</label>
                    <input
                        value={this.state.content}
                        onChange={e =>
                            this.setState({ content: e.target.value })
                        }
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default graphql(addLyricMutation)(LyricCreate);
