import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

/**
 * Custom hook to consume the TaskContext.
 * Encapsulates the useContext call and provides runtime validation ensuring
 * consumers are nested within a TaskProvider.
 * 
 * @returns {Object} Context value including tasks, actions, statistics, and filters
 */
export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      '[useTasks] Error: useTasks must be used within a <TaskProvider>. ' +
      'Please check your component hierarchy.'
    );
  }

  return context;
};
