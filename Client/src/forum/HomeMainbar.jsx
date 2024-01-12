// HomeMainbar.jsx

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1; // Simulated user
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const questionsList = useSelector((state) => state.questionsReducer);

  useEffect(() => {
    // Fetch questions when the component mounts
    dispatch(fetchAllQuestions());
  }, [dispatch]);

  const checkAuth = () => {
    // Updated condition to check if user exists (is signed in)
    if (!user) {
      alert("Login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;


