import './App.css';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import Display from './Components/Navigate';

function App() {
  return (
    <div>
     <Display/>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      
    </div>
  );
}
export default App;
