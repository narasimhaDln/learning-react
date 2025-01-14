import { useParams } from "react-router-dom";

const users = {
  1: "Alice",
  2: "Bob",
  3: "Charlie"
};

function UserDetails() {
  const { id } = useParams();
  const userName = users[parseInt(id)];

  return (
    <div className="container">
      {userName ? (
        <h1 className="details">Details of {userName}</h1>
      ) : (
        <h1 className="not-found">User not found</h1>
      )}
    </div>
  );
}

export default UserDetails;

