import React from 'react';
import styled from 'styled-components';
import { Plus, Inbox, SearchX } from 'lucide-react';
import { TaskCard } from './TaskCard';
import { Button } from '../common/Button';
import { EmptyState } from '../common/EmptyState';
import { useTasks } from '../../hooks/useTasks';

const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;
`;

const HeaderTitleGroup = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing[3]};

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  span.count {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    color: ${({ theme }) => theme.colors.text.muted};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }
`;

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const TaskList = ({ onOpenAddModal, onEditTask, onDeleteTask }) => {
  const { filteredTasks, tasks, filters, toggleTask, resetFilters } = useTasks();

  const isFilterActive =
    filters.search !== '' ||
    filters.status !== 'all' ||
    filters.priority !== 'all' ||
    filters.category !== 'all';

  if (tasks.length === 0) {
    return (
      <EmptyState
        icon={<Inbox />}
        title="Your workspace is clear"
        description="You have no tasks created yet. Click below to add your first actionable item."
        actionLabel="Create Your First Task"
        onAction={onOpenAddModal}
      />
    );
  }

  if (filteredTasks.length === 0) {
    return (
      <EmptyState
        icon={<SearchX />}
        title="No matching tasks found"
        description={`No tasks match the active filter criteria "${filters.search ? filters.search : 'selected filters'}". Try clearing filters to see all tasks.`}
        actionLabel="Clear Active Filters"
        onAction={resetFilters}
      />
    );
  }

  return (
    <ListSection aria-label="Task List">
      <ListHeader>
        <HeaderTitleGroup>
          <h3>Workspace Tasks</h3>
          <span className="count">
            Showing {filteredTasks.length} of {tasks.length} tasks
          </span>
        </HeaderTitleGroup>

        <Button
          variant="primary"
          size="sm"
          icon={<Plus />}
          onClick={onOpenAddModal}
          id="btn-list-add-task"
        >
          Add Task
        </Button>
      </ListHeader>

      <TaskGrid>
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
      </TaskGrid>
    </ListSection>
  );
};
