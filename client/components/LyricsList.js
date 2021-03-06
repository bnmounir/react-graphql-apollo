import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { likeLyricMutation } from '../queries';

export class LyricsList extends Component {
    onLike(id, likes) {
        this.props.mutate({
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id: id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            }
        });
    }
    renderLyrics() {
        return this.props.lyrics.map(({ id, content, likes }) => {
            return (
                <li key={id} className='collection-item'>
                    {content}
                    <div className='right'>
                        <i
                            className='material-icons'
                            onClick={() => this.onLike(id, likes)}
                        >
                            thumb_up
                        </i>
                        {likes}
                    </div>
                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <h5>Lyrics List</h5>
                <ul className='collection'>{this.renderLyrics()}</ul>
            </div>
        );
    }
}

export default graphql(likeLyricMutation)(LyricsList);
