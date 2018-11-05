
export default function (state = {}, action) {
    switch (action.type) {
        case "FETCH_TOP_10_TV_SHOW_REQUEST":
            break;
        case "FETCH_TOP_10_TV_SHOW_SUCCESS":
            state = {
                ...state,
                tvshow: action.payload,
                indicator: false,
                msg: 'successe'
            }
            break;
        case "FETCH_TOP_10_TV_SHOW_FAILURE":
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