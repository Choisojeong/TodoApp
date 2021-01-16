import React from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import AddItem from './components/AddItem'

const App = () => {
  return (
    <TodoListTemplate additem = {<AddItem/>} >
    </TodoListTemplate>
  );
}

export default App;
