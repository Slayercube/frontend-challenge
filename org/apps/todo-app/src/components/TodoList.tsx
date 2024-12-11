import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState, Todo } from '../state/todoState';
import TodoItem from './TodoItem';
import { AnimatePresence, motion } from 'framer-motion';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <motion.div className="bg-white p-4">
      <AnimatePresence>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default TodoList;
