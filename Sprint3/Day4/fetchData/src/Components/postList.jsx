import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/action";

function PostList() {
  const dispatch = useDispatch();
  const postStore = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Comments</h1>
      <ol >
        {postStore.post.map((pos, id) => (
          <li key={id} style={{border:"1px solid red",margin:"15px",padding:"10px"}}>
           Name: {pos.name}
            <br />
           Body: {pos.body}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default PostList;
