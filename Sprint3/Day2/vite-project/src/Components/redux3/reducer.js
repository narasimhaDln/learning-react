import {
  FETCH_MATCHES_FAILURE,
  FETCH_MATCHES_START,
  FETCH_MATCHES_SUCCESS,
  MARK_FAVORITE,
  SET_FILTER,
  SET_SEARCH_TERM,
} from "./actions";
const initialState = {
  isLoading: false,
  isError: false,
  footballMatches: [],
  favoriteMatches: [],
  searchTerm: "",
  filters: {
    team: "",
    date: "",
    outcome: "",
  },
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MATCHES_START:
      return { ...state, isLoading: true, isError: false };
    case FETCH_MATCHES_SUCCESS:
      return { ...state, isLoading: false, footballMatches: action.payload };
    case FETCH_MATCHES_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SET_FILTER:
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case MARK_FAVORITE:
      return {
        ...state,
        favoriteMatches: [...state.favoriteMatches, action.payload],
      };
    default:
      return state;
  }
}
export default reducer;
