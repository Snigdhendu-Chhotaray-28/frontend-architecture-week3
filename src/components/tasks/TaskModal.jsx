import React from 'react';
import { Modal } from '../common/Modal';
import { TaskForm } from './TaskForm';

/**
 * TaskModal Component
 * Coordinates the Add Task and Edit Task workflows inside an accessible styled modal.
 */
export const TaskModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
  isEditMode = false,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditMode ? 'Edit Task Details' : 'Create New Task'}
      id="task-dialog"
    >
      <TaskForm
        initialData={initialData}
        onSubmit={onSubmit}
        onCancel={onClose}
        isEditMode={isEditMode}
      />
    </Modal>
  );
};
