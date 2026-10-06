import { PRIORITY_WEIGHTS } from './constants';

/**
 * Formats a date string into a user-friendly format (e.g. 'Oct 12, 2026').
 * @param {string} dateString - ISO or YYYY-MM-DD date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  if (!dateString) return 'No due date';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  } catch {
    return dateString;
  }
};

/**
 * Determines due date urgency status: 'overdue', 'today', 'upcoming', or 'none'.
 * @param {string} dueDate - ISO/YYYY-MM-DD string
 * @param {boolean} completed - Task completion status
 * @returns {'overdue' | 'today' | 'upcoming' | 'none'}
 */
export const getDueDateStatus = (dueDate, completed) => {
  if (!dueDate || completed) return 'none';
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);

  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 'overdue';
  if (diffDays === 0) return 'today';
  return 'upcoming';
};

/**
 * Filter and sort a collection of tasks based on criteria.
 * @param {Array} tasks - List of task objects
 * @param {Object} filters - Active filter settings
 * @returns {Array} Filtered and sorted tasks
 */
export const filterAndSortTasks = (tasks, filters) => {
  const { search, status, priority, category, sortBy } = filters;

  return tasks
    .filter((task) => {
      // Search term filter (case-insensitive across title and description)
      if (search && search.trim() !== '') {
        const query = search.toLowerCase().trim();
        const titleMatch = task.title.toLowerCase().includes(query);
        const descMatch = task.description ? task.description.toLowerCase().includes(query) : false;
        if (!titleMatch && !descMatch) return false;
      }

      // Status filter
      if (status === 'active' && task.completed) return false;
      if (status === 'completed' && !task.completed) return false;

      // Priority filter
      if (priority && priority !== 'all' && task.priority !== priority) return false;

      // Category filter
      if (category && category !== 'all' && task.category !== category) return false;

      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'created-asc':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'created-desc':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'due-asc': {
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        }
        case 'due-desc': {
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        }
        case 'priority-desc':
          return (PRIORITY_WEIGHTS[b.priority] || 0) - (PRIORITY_WEIGHTS[a.priority] || 0);
        case 'priority-asc':
          return (PRIORITY_WEIGHTS[a.priority] || 0) - (PRIORITY_WEIGHTS[b.priority] || 0);
        case 'title-asc':
          return a.title.localeCompare(b.title);
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
};

/**
 * Validates task form fields and returns an error dictionary.
 * @param {Object} formData 
 * @returns {{ isValid: boolean, errors: Object }}
 */
export const validateTaskForm = (formData) => {
  const errors = {};

  if (!formData.title || formData.title.trim().length === 0) {
    errors.title = 'Task title is required.';
  } else if (formData.title.trim().length < 3) {
    errors.title = 'Title must be at least 3 characters.';
  } else if (formData.title.trim().length > 100) {
    errors.title = 'Title cannot exceed 100 characters.';
  }

  if (formData.description && formData.description.length > 500) {
    errors.description = 'Description cannot exceed 500 characters.';
  }

  if (!formData.category) {
    errors.category = 'Please select a category.';
  }

  if (!formData.priority) {
    errors.priority = 'Please select a priority level.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
