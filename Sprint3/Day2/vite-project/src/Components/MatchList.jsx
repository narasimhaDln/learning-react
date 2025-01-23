import { MARK_FAVORITE } from "./redux3/actions";
import PropTypes from "prop-types"

const MatchList = ({ matches, searchTerm, filters, dispatch }) => {
    const filteredMatches = matches
      .filter(match => 
        match.team1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.team2.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(match => 
        (!filters.team || match.team1 === filters.team || match.team2 === filters.team) &&
        (!filters.date || match.date === filters.date) &&
        (!filters.outcome || match.outcome === filters.outcome)
      );
  
    return (
      <ul>
        {filteredMatches.map(match => (
          <li key={match.match_id}>
            {match.team1} vs {match.team2} - {match.date}
            <button onClick={() => dispatch({ type: MARK_FAVORITE, payload: match })}>Favorite</button>
          </li>
        ))}
      </ul>
    );
  };
  


  MatchList.propTypes = {
    matches: PropTypes.arrayOf(
      PropTypes.shape({
        match_id: PropTypes.number.isRequired,
        team1: PropTypes.string.isRequired,
        team2: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired,
    searchTerm: PropTypes.string.isRequired,
    filters: PropTypes.shape({
      team: PropTypes.string,
      date: PropTypes.string,
      outcome: PropTypes.string
    }).isRequired,
    dispatch: PropTypes.func.isRequired
  };
  
  export default MatchList;
  