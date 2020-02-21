import gql from 'graphql-tag';

export const fetchSongsQuery = gql`
    {
        songs {
            title
            id
        }
    }
`;

export const fetchSongQuery = gql`
    query SongQuery($id: ID!) {
        song(id: $id) {
            title
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`;

export const addSongMutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id
            title
        }
    }
`;

export const deleteSongMutation = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            title
            id
        }
    }
`;

export const addLyricMutation = gql`
    mutation AddLyricQuery($songId: ID!, $content: String) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`;

export const likeLyricMutation = gql`
    mutation LikeLyric($id: ID) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`;
