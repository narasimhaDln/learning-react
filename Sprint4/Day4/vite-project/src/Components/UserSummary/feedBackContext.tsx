import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface FormData {
  name: string;
  email: string;
  rating: number;
  feedback: string;
}

interface FeedbackContextProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
}

export const FeedbackContext = createContext<FeedbackContextProps | undefined>(undefined);

export const FeedbackProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    rating: 0,
    feedback: ''
  });

  return (
    <FeedbackContext.Provider value={{ formData, setFormData }}>
      {children}
    </FeedbackContext.Provider>
  );
};
