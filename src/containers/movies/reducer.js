
export default function (state = {}, action) {
    switch (action.type) {
        case "FETCH_TOP_10_MOVIES_REQUEST":
            break;
        case "FETCH_TOP_10_MOVIES_SUCCESS":
            state = {
                ...state,
                movies: action.payload,
                indicator: false,
                msg: 'successe'
            }
            break;
        case "FETCH_TOP_10_MOVIES_FAILURE":
            state = {
                ...state,
                msg: 'faulure',
                indicator: true,
                error: action.payload.message
            }
            break;
        default:
            state
    }
    return state
}