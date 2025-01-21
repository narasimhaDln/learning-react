export const fetchMatches=async()=>{
    const response=await fetch("https://jsonmock.hackerrank.com/api/football_matches?page=2");
    return response.json()
}