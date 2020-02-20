import React, { Component } from 'react';

export class LyricsList extends Component {
    onLike(id) {
        console.log(id);
    }
    renderLyrics() {
        return this.props.lyrics.map(({ id, content }) => {
            return (
                <li key={id} className='collection-item'>
                    {content}
                    <i
                        className='material-icons right'
                        onClick={() => this.onLike(id)}
                    >
                        thumb_up
                    </i>
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

export default LyricsList;
