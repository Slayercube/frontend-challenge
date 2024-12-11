import React from 'react';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
