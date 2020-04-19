import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <TodoInput/>
        </div>
        <div className="row">
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
