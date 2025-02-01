import React, { ChangeEvent, FormEvent, useContext } from "react";
import { FeedbackContext } from "./FeedbackContext";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Stack, Heading } from "@chakra-ui/react";

const FeedForm: React.FC = () => {
  const context = useContext(FeedbackContext);

  if (!context) {
    throw new Error("FeedForm must be used within a FeedbackProvider");
  }

  const { formData, setFormData } = context;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]:value})
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
      <Heading as="h1" mb={4}>UserForm</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter name"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="rating" isRequired>
            <FormLabel>Rating</FormLabel>
            <Input
              type="number"
              name="rating"
              value={formData.rating}
              placeholder="Enter rating"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="feedback" isRequired>
            <FormLabel>Feedback</FormLabel>
            <Textarea
              name="feedback"
              value={formData.feedback}
              placeholder="Enter feedback"
              onChange={handleChange}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FeedForm;
