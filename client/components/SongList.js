import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { fetchSongsQuery, deleteSongMutation } from '../queries';

class SongList extends Component {
    onSongDelete(id) {
        this.props
            .mutate({
                variables: { id }
                // on way to refetch after deletion: refetchQueries: [{ query: fetchSongsQuery }]
            })
            .then(() => this.props.data.refetch());
    }
    renderSongs() {
        if (!this.props.data.loading) {
            return this.props.data.songs.map(({ title, id }) => {
                return (
                    <li className='collection-item' key={id}>
                        <Link to={`/songs/${id}`}>{title}</Link>
                        <i
                            className='material-icons right'
                            onClick={() => this.onSongDelete(id)}
                        >
                            delete
                        </i>
                    </li>
                );
            });
        }
        return <h3>Loading...</h3>;
    }
    render() {
        return (
            <div>
                <h1>SongList</h1>
                <ul className='collection'>{this.renderSongs()}</ul>
                <Link
                    to='/songs/new'
                    className='btn-floating btn-large red right'
                >
                    <i className='material-icons'>add</i>
                </Link>
            </div>
        );
    }
}

export default graphql(deleteSongMutation)(graphql(fetchSongsQuery)(SongList));
