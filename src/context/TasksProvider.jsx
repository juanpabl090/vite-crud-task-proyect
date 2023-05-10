/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { getTasksRequest, deleteTaskRequest, createTaskRequest } from '../api/tasks.api';
import { TaskContext } from '../context/TasksContext'

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within a TaskContextProvider')
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);

  async function loadTask() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
    } catch (error) {
      console.log(error)
    }
  };

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, loadTask, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};