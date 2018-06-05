import { combineReducers } from 'redux';
import { INCREASE, DECREASE, RESET} from './actionsTypes';

// 原始默认state
const defaultState = {
    count: 5,
    factor: 1
}

function counter(state = defaultState, action) {
    console.log(state) //{count: 5, factor: 1}
    switch (action.type) {
        case INCREASE:
            return { ...state, count: state.count + state.factor };
        case DECREASE:
            return { ...state, count: state.count - state.factor };
        case RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }
}

const defaultTest = {
    name:'fei'
}
function test( state = defaultTest,action ) {
    switch (action.type) {
        case 'CHANGENAME':
            return { ...state, name: 'jiao' };
        default:
            return state;
    }
}

export default combineReducers({
    counter,
    test
});