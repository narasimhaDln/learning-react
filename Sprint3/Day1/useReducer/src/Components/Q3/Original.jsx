import { useEffect, useReducer } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import MatchList from './MathList';
import FavoriteMatches from './FavoriteMatches';
import { fetchMatches } from './Api';


const initialState = {
  isLoading: false,
  isError: false,
  footballMatches: [],
  favoriteMatches: [],
  searchTerm: '',
  filters: {
    team: '',
    date: '',
    outcome: '',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_MATCHES_START':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_MATCHES_SUCCESS':
      return { ...state, isLoading: false, footballMatches: action.payload };
    case 'FETCH_MATCHES_FAILURE':
      return { ...state, isLoading: false, isError: true };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SET_FILTER':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'MARK_FAVORITE':
      return { ...state, favoriteMatches: [...state.favoriteMatches, action.payload] };
    default:
      return state;
  }
}

const Original = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, isError, footballMatches, favoriteMatches, searchTerm, filters } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_MATCHES_START' });
      try {
        const data = await fetchMatches();
        dispatch({ type: 'FETCH_MATCHES_SUCCESS', payload: data.data });
      } catch (error) {
        dispatch({ type: 'FETCH_MATCHES_FAILURE', payload: error.message });
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading matches.</div>;
  }

  return (
    <div>
     
      <SearchBar dispatch={dispatch}/>
      <Filters dispatch={dispatch}/>
      <MatchList matches={footballMatches} searchTerm={searchTerm} filters={filters} dispatch={dispatch}/>
      <FavoriteMatches matches={favoriteMatches}/>
    </div>
  );
};

export default  Original;
