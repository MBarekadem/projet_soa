import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explorer from './pages/Explorer';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explorer />} />
      </Routes>
    </Router>
  );
}

export default App;
