import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedForm from "./FeedForm";
import FormSummary from "./FormSummary";
import NavBar from "./NavBar";

const Routing: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/FeedBackForm" element={<FeedForm />} />
        <Route path="/FormSummary" element={<FormSummary />} />
      </Routes>
    </div>
  );
};

export default Routing;
