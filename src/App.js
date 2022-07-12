import TodoContainer from './components/TodoContainer';
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="inner">
      <Router>
        <Header />
        <TodoContainer />
     </Router>
     </div>
    </div>
  );
}

export default App;
