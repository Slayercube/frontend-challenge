import React from 'react';
import { Todo } from '../state/todoState';
import { motion } from 'framer-motion';
import { ImCheckboxChecked } from 'react-icons/im';
import { FaDeleteLeft } from 'react-icons/fa6';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <motion.div
      className="flex items-center justify-between p-2 bg-white border border-gray-300 shadow-none rounded-md mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      layout
    >
      <div className="flex items-center">
        <motion.div
          className="mr-2 h-5 w-5 flex items-center justify-center rounded-full border-2 border-purple-500 text-purple-500 cursor-pointer"
          onClick={() => toggleComplete(todo.id)}
          initial={{ scale: 1 }}
          animate={{ scale: todo.isComplete ? 1.2 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {todo.isComplete && <ImCheckboxChecked className="text-purple-500" />}
        </motion.div>
        <span className={`text-lg ${todo.isComplete ? 'line-through text-gray-400' : ''}`}>
          {todo.text}
        </span>
      </div>
      <motion.button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        <FaDeleteLeft className="h-5 w-10" />
      </motion.button>
    </motion.div>
  );
};

export default TodoItem;
