import React, { useCallback, useMemo, useState } from 'react';

function Post({ post }) {
  const [verified, setVerified] = useState(post.verifyPost); // Ensure property name is correct

  const toggleVerify = useCallback(() => {
    setVerified((prev) => !prev);
  }, []);

  const backgroundColor = useMemo(() => {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`;
  }, [post.id]); // Ensure color is stable for each post

  return (
    <div style={{ backgroundColor, padding: "10px", margin: "10px", border: "1px solid black" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={toggleVerify}>
        {verified ? "Verified" : "Verify"}
      </button>
    </div>
  );
}

export default React.memo(Post); // Memoize the Post component
