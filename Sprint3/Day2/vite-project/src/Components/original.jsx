import { useEffect } from "react";
import { FETCH_MATCHES_FAILURE, FETCH_MATCHES_SUCCESS } from "./redux3/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./Search";
import Filters from "./Filter";
import MatchList from "./MatchList";
import FavoriteMatchess from "./Favorite";
const fetchMatches = async () => {
  const response = await fetch('https://jsonmock.hackerrank.com/api/football_matches?page=2');
  const data = await response.json();
  return data;
}
const Original = () => {
    const dispatch=useDispatch()
    const { isLoading, isError, footballMatches, favoriteMatches, searchTerm, filters } = useSelector((state)=>state);
  
    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_MATCHES_START' });
        try {
          const data = await fetchMatches();
            dispatch({ type: FETCH_MATCHES_SUCCESS, payload: data.data });
          }
         catch(error) {
          dispatch({ type: FETCH_MATCHES_FAILURE, payload: error.message });
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
        <FavoriteMatchess matches={favoriteMatches}/>
      </div>
    );
  };
  
  export default  Original;
  