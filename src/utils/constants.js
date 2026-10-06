/**
 * Application Constants for TaskFlow Dashboard
 */

export const STORAGE_KEY = 'taskflow-tasks-v1';

export const TASK_PRIORITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
};

export const TASK_CATEGORIES = [
  'Work',
  'Personal',
  'Learning',
  'Health',
  'Finance',
  'General',
];

export const TASK_STATUS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

export const SORT_OPTIONS = [
  { value: 'created-desc', label: 'Newest First' },
  { value: 'created-asc', label: 'Oldest First' },
  { value: 'due-asc', label: 'Due Date (Earliest)' },
  { value: 'due-desc', label: 'Due Date (Latest)' },
  { value: 'priority-desc', label: 'Priority (High to Low)' },
  { value: 'priority-asc', label: 'Priority (Low to High)' },
  { value: 'title-asc', label: 'Title (A-Z)' },
];

export const PRIORITY_WEIGHTS = {
  high: 3,
  medium: 2,
  low: 1,
};
