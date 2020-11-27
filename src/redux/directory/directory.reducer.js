import sections from '../../components/data/10.1 directory.data.js';

const INITIAL_STATE = {
    sections
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer