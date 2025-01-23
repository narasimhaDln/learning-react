
function FavoriteMatches({matches}) {
    return (
      <div>
          <h2>Favorite Matches</h2>
          <ul>
              {matches.map((match)=>(
                  <li key={match.match_id}>
                {match.team1} Vs {match.team2} - {match.date}
  
                  </li>
              ))}
          </ul>
      </div>
    )
  }
  
  export default FavoriteMatches