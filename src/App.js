import TodoContainer from './components/TodoContainer';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="inner">
      <Header />
      
     <TodoContainer />
     </div>
    </div>
  );
}

export default App;
