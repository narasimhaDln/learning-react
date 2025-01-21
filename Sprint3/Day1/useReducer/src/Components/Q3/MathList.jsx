

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
          <button onClick={() => dispatch({ type: 'MARK_FAVORITE', payload: match })}>Favorite</button>
        </li>
      ))}
    </ul>
  );
};

export default MatchList;
