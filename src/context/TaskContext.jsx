import React, { createContext, useContext, useMemo, useState, useCallback, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useDebounce } from '../hooks/useDebounce';
import { initialTasks } from '../data/initialTasks';
import { STORAGE_KEY, TASK_STATUS } from '../utils/constants';
import { filterAndSortTasks } from '../utils/taskUtils';

// 1. Create the Context
export const TaskContext = createContext(null);

// Default Filter State
const initialFilters = {
  search: '',
  status: TASK_STATUS.ALL,
  priority: 'all',
  category: 'all',
  sortBy: 'created-desc',
};

/**
 * TaskProvider Component
 * Supplies state management, persistent storage, filtering, and CRUD operations
 * to the entire TaskFlow component tree.
 */
export const TaskProvider = ({ children }) => {
  // Persistent Tasks State via Custom Hook
  const [tasks, setTasks] = useLocalStorage(STORAGE_KEY, initialTasks);

  // Active Filters State
  const [filters, setFilters] = useState(initialFilters);

  // Search input debouncing to prevent thrashing calculations
  const debouncedSearch = useDebounce(filters.search, 250);

  // Toast / Feedback message state for user actions
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  // Update document title dynamically based on pending tasks count (Demonstrating useful useEffect)
  useEffect(() => {
    const pendingCount = tasks.filter((t) => !t.completed).length;
    if (pendingCount > 0) {
      document.title = `(${pendingCount}) TaskFlow – Task Management Dashboard`;
    } else {
      document.title = `TaskFlow – All Tasks Completed! 🎉`;
    }
  }, [tasks]);

  // --- Task Operations (CRUD) ---

  /**
   * Add a new task
   */
  const addTask = useCallback((taskData) => {
    const newTask = {
      id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: taskData.title.trim(),
      description: taskData.description ? taskData.description.trim() : '',
      category: taskData.category || 'General',
      priority: taskData.priority || 'medium',
      dueDate: taskData.dueDate || '',
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    showToast(`Task "${newTask.title}" added successfully!`, 'success');
    return newTask;
  }, [setTasks, showToast]);

  /**
   * Update an existing task
   */
  const updateTask = useCallback((taskId, updatedData) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              ...updatedData,
              title: updatedData.title ? updatedData.title.trim() : task.title,
              description: updatedData.description !== undefined ? updatedData.description.trim() : task.description,
              updatedAt: new Date().toISOString(),
            }
          : task
      )
    );
    showToast('Task updated successfully!', 'info');
  }, [setTasks, showToast]);

  /**
   * Delete a task
   */
  const deleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => {
      const taskToDelete = prevTasks.find((t) => t.id === taskId);
      const title = taskToDelete ? taskToDelete.title : 'Task';
      showToast(`Deleted "${title}"`, 'danger');
      return prevTasks.filter((task) => task.id !== taskId);
    });
  }, [setTasks, showToast]);

  /**
   * Toggle task completion status
   */
  const toggleTask = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          const nextCompleted = !task.completed;
          showToast(
            nextCompleted ? `Completed "${task.title}"! 🎉` : `Marked "${task.title}" as pending`,
            nextCompleted ? 'success' : 'info'
          );
          return {
            ...task,
            completed: nextCompleted,
            updatedAt: new Date().toISOString(),
          };
        }
        return task;
      })
    );
  }, [setTasks, showToast]);

  /**
   * Helper to retrieve a single task by ID
   */
  const getTaskById = useCallback(
    (taskId) => tasks.find((task) => task.id === taskId) || null,
    [tasks]
  );

  /**
   * Clear all completed tasks
   */
  const clearCompleted = useCallback(() => {
    setTasks((prevTasks) => {
      const remaining = prevTasks.filter((t) => !t.completed);
      const clearedCount = prevTasks.length - remaining.length;
      if (clearedCount > 0) {
        showToast(`Cleared ${clearedCount} completed tasks`, 'info');
      }
      return remaining;
    });
  }, [setTasks, showToast]);

  /**
   * Reset tasks to initial sample seed
   */
  const resetToDefault = useCallback(() => {
    setTasks(initialTasks);
    setFilters(initialFilters);
    showToast('Restored sample demonstration tasks', 'info');
  }, [setTasks, showToast]);

  // --- Filter State Setters ---

  const setSearch = useCallback((searchTerm) => {
    setFilters((prev) => ({ ...prev, search: searchTerm }));
  }, []);

  const setStatusFilter = useCallback((status) => {
    setFilters((prev) => ({ ...prev, status }));
  }, []);

  const setPriorityFilter = useCallback((priority) => {
    setFilters((prev) => ({ ...prev, priority }));
  }, []);

  const setCategoryFilter = useCallback((category) => {
    setFilters((prev) => ({ ...prev, category }));
  }, []);

  const setSortBy = useCallback((sortBy) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
    showToast('Filters reset to default', 'info');
  }, [showToast]);

  // --- DERIVED STATE (Optimized via useMemo) ---

  // 1. Overall Statistics (computed from tasks array without redundant state variables)
  const statistics = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    const highPriority = tasks.filter((t) => t.priority === 'high' && !t.completed).length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    // Counts by category
    const categoryCounts = tasks.reduce((acc, task) => {
      acc[task.category] = (acc[task.category] || 0) + 1;
      return acc;
    }, {});

    return {
      total,
      completed,
      pending,
      highPriority,
      completionRate,
      categoryCounts,
    };
  }, [tasks]);

  // 2. Filtered & Sorted Tasks (computed using debounced search term)
  const filteredTasks = useMemo(() => {
    const activeCriteria = {
      ...filters,
      search: debouncedSearch,
    };
    return filterAndSortTasks(tasks, activeCriteria);
  }, [tasks, filters, debouncedSearch]);

  // Provide everything through context value
  const contextValue = useMemo(
    () => ({
      // State
      tasks,
      filteredTasks,
      filters,
      statistics,
      toast,
      // Task Actions
      addTask,
      updateTask,
      deleteTask,
      toggleTask,
      getTaskById,
      clearCompleted,
      resetToDefault,
      // Filter Actions
      setSearch,
      setStatusFilter,
      setPriorityFilter,
      setCategoryFilter,
      setSortBy,
      resetFilters,
      // Toast Actions
      showToast,
      hideToast,
    }),
    [
      tasks,
      filteredTasks,
      filters,
      statistics,
      toast,
      addTask,
      updateTask,
      deleteTask,
      toggleTask,
      getTaskById,
      clearCompleted,
      resetToDefault,
      setSearch,
      setStatusFilter,
      setPriorityFilter,
      setCategoryFilter,
      setSortBy,
      resetFilters,
      showToast,
      hideToast,
    ]
  );

  return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>;
};
