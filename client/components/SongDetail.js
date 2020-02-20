import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import { fetchSongQuery } from '../queries';
import LyricCreate from './LyricCreate';
import LyricsList from './LyricsList';

class SongDetail extends Component {
    render() {
        console.log(this.props.data);
        const { song } = this.props.data;
        if (!song) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <br />
                <Link to='/'>Go Back</Link>
                <h2>Song Details</h2>
                <h4>{song.title}</h4>
                <LyricsList lyrics={song.lyrics} />
                <LyricCreate songId={song.id} />
            </div>
        );
    }
}

export default graphql(fetchSongQuery, {
    options: props => {
        return { variables: { id: props.params.id } };
    }
})(SongDetail);
