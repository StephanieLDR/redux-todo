import types from "../actions/types"

const DEFAULT_STATE = {
    all: [],
    single: null
};

export default (state = DEFAULT_STATE, action)=> {

    switch (action.type) {
        case types.GET_LIST_DATA:
           // console.log("get list data: ", action);
            return {...state, all: action.payload.data.todos};

        case types.VIEW_ITEM:
            //console.log("View item action: ", action);
            return {...state, single: action.payload.data.todo};

        default:
            return state;
    }

}