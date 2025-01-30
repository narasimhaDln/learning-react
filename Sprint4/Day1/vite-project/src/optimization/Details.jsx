import  { useCallback, useEffect, useState } from 'react';
import Post from './Post';
import { v4 as uuidv4 } from 'uuid';

function Details() {
  const [timer, setTimer] = useState(0);
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleAddPost = useCallback(() => {
    const newPost = { id: uuidv4(), ...formData, verifyPost: false }; // Add verifyPost
    setPosts((prev) => [...prev, newPost]);
    setFormData({ title: '', body: '' });
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder="Enter the title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        value={formData.body}
        placeholder="Enter the body"
        onChange={handleChange}
      />
      <button onClick={handleAddPost}>Add Post</button>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Details;
