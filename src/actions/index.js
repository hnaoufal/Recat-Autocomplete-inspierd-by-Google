import axios from 'axios';

export const FETCH_WIKI = 'FETCH_WIKI';

const ROOT_URL = 'http://jsonplaceholder.typicode.com/albums';

export function fetchWikis() {
    const url = `${ROOT_URL}`;

    return (dispatch) => {
        axios.get(url).then( response => {
            dispatch({type: FETCH_WIKI, payload: response})
        });
    }
}

