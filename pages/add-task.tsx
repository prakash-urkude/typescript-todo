import { useState } from 'react';
import { useRouter } from 'next/router';
import { Task } from '../types';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleAddTask = () => {
    const newTask: Task = { id: Date.now(), title };
    const storedTasks = localStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    router.push('/');
  };

  return (
    <div className="container">
      <h1>Add New Task</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
