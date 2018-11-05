
export default function (state = {}, action) {
    switch (action.type) {
        case "FETCH_SEARCH_REQUEST":
            break;
        case "FETCH_SEARCH_SUCCESS":
            state = {
                ...state,
                search: action.payload,
                indicator: false,
                msg: 'successe'
            }
            break;
        case "FETCH_SEARCH_FAILURE":
            state = {
                ...state,
                msg: 'faulure',
                indicator: true,
                error: action.payload.message
            }
            break;

        case "RESET_SEARCH":
            state = {
                //...state,
                search: null,
                msg: 'reset search'
            }
            break;
        default:
            state
    }
    return state
}