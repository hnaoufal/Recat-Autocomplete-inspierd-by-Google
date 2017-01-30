import { FETCH_WIKI } from '../actions/index';

export default (state=[], action) => {
    switch (action.type) {
        case FETCH_WIKI:
            return action.payload.data;
    }
    return state;
}
