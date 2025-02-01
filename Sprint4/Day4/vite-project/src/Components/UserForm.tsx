import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  rating: number;
  feedback: string;
}

function UserForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({...formData,[name]:value})
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>UserForm</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          placeholder="Enter rating"
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          value={formData.feedback}
          placeholder="Enter feedback"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Rating: {formData.rating}</p>
          <p>Feedback: {formData.feedback}</p>
        </>
      )}
    </div>
  );
}

export default UserForm;
