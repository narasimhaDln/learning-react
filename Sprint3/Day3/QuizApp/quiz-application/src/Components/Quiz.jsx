import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz, skipQuestion, submitAnswer } from "../actions/quizActions";

function Quiz() {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, loading, error } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const handleAnswerSubmit = (answer) => {
    dispatch(submitAnswer(answer));
  };

  const handleSkipQuestion = () => {
    dispatch(skipQuestion());
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (loading) return <div>....loading</div>;
  if (error) return <div>...error</div>;

  return (
    <div>
      {currentQuestion ? (
        <>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.options.map((option) => ( // Corrected to currentQuestion.options
            <button key={option} onClick={() => handleAnswerSubmit({ answer: option, correct: option === currentQuestion.correctAnswer })}>
              {option}
            </button>
          ))}
          <button onClick={handleSkipQuestion}>Skip</button>
        </>
      ) : (
        <p>Quiz Complete</p>
      )}
    </div>
  );
}

export default Quiz;
