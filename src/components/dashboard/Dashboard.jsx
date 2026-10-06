import React, { useState } from 'react';
import styled from 'styled-components';
import { Statistics } from './Statistics';
import { TaskFilters } from '../tasks/TaskFilters';
import { TaskList } from '../tasks/TaskList';
import { TaskModal } from '../tasks/TaskModal';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { useTasks } from '../../hooks/useTasks';
import { AlertTriangle, Trash2 } from 'lucide-react';

const DashboardMain = styled.main`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[8]}`};
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[4]}`};
  }
`;

const DeleteModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
  }

  div.warning-box {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background-color: ${({ theme }) => theme.colors.status.dangerLight};
    border: 1px solid ${({ theme }) => theme.colors.status.dangerBorder};
    border-radius: ${({ theme }) => theme.radii.lg};
    color: ${({ theme }) => theme.colors.status.danger};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    svg {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
    }
  }

  div.modal-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing[3]};
    margin-top: ${({ theme }) => theme.spacing[2]};
    padding-top: ${({ theme }) => theme.spacing[4]};
    border-top: 1px solid ${({ theme }) => theme.colors.surface.border};
  }
`;

export const Dashboard = ({ isAddModalOpen, setIsAddModalOpen }) => {
  const { addTask, updateTask, deleteTask } = useTasks();

  // Local UI State for Edit Modal (Demonstrating local UI state vs global task state)
  const [editingTask, setEditingTask] = useState(null);

  // Local UI State for Delete Confirmation Modal
  const [deletingTaskId, setDeletingTaskId] = useState(null);

  // Handlers for Add Task
  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  const handleCreateTask = (taskData) => {
    addTask(taskData);
    setIsAddModalOpen(false);
  };

  // Handlers for Edit Task
  const handleOpenEditModal = (task) => setEditingTask(task);
  const handleCloseEditModal = () => setEditingTask(null);

  const handleUpdateTask = (updatedData) => {
    if (editingTask) {
      updateTask(editingTask.id, updatedData);
      setEditingTask(null);
    }
  };

  // Handlers for Delete Task
  const handlePromptDelete = (taskId) => setDeletingTaskId(taskId);
  const handleCancelDelete = () => setDeletingTaskId(null);

  const handleConfirmDelete = () => {
    if (deletingTaskId) {
      deleteTask(deletingTaskId);
      setDeletingTaskId(null);
    }
  };

  return (
    <DashboardMain>
      {/* 1. Statistics Cards Overview */}
      <Statistics />

      {/* 2. Filter Bar (Search, Status Tabs, Priority & Category Dropdowns) */}
      <TaskFilters />

      {/* 3. Task List and Items Grid */}
      <TaskList
        onOpenAddModal={handleOpenAddModal}
        onEditTask={handleOpenEditModal}
        onDeleteTask={handlePromptDelete}
      />

      {/* 4. Add Task Modal */}
      <TaskModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onSubmit={handleCreateTask}
        isEditMode={false}
      />

      {/* 5. Edit Task Modal */}
      <TaskModal
        isOpen={Boolean(editingTask)}
        onClose={handleCloseEditModal}
        onSubmit={handleUpdateTask}
        initialData={editingTask}
        isEditMode={true}
      />

      {/* 6. Accessible Delete Confirmation Modal */}
      <Modal
        isOpen={Boolean(deletingTaskId)}
        onClose={handleCancelDelete}
        title="Confirm Task Deletion"
        maxWidth="460px"
        id="delete-confirmation-dialog"
      >
        <DeleteModalContent>
          <div className="warning-box">
            <AlertTriangle />
            <span>This action cannot be undone.</span>
          </div>
          <p>
            Are you sure you want to delete this task? It will be permanently removed from your
            workspace storage.
          </p>
          <div className="modal-actions">
            <Button variant="secondary" onClick={handleCancelDelete} type="button">
              Cancel
            </Button>
            <Button
              variant="danger"
              icon={<Trash2 />}
              onClick={handleConfirmDelete}
              type="button"
              id="btn-confirm-delete"
            >
              Delete Task
            </Button>
          </div>
        </DeleteModalContent>
      </Modal>
    </DashboardMain>
  );
};
