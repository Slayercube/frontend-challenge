import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState, Todo } from '../state/todoState';
import { motion } from 'framer-motion';
import { FaPlusCircle } from "react-icons/fa";

const AddTodo: React.FC = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [text, setText] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const addTodo = () => {
    if (text.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    setText('');
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 500); // Reset animation state after 500ms
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <motion.div
      className="flex items-center p-4 bg-white rounded-lg mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} // Slow down the animation
    >
      <div className="relative flex-grow flex items-center">
        <motion.div
          animate={isAdding ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1 }}
          className="mr-2"
        >
          <FaPlusCircle  className="text-purple-500 w-5 h-5" />
        </motion.div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border border-gray-300  p-2 w-full rounded-lg pr-24  focus:outline-none"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 mr-1 h-8 bg-purple-500 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center"
        >
          Add Task
        </button>
      </div>
    </motion.div>
  );
};

export default AddTodo;
