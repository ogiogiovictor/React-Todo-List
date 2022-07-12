import TodoContainer from './components/TodoContainer';
import { BrowserRouter as Router } from "react-router-dom"
import Header from './components/Header';

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
