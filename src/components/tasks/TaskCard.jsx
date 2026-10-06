import React from 'react';
import styled, { css } from 'styled-components';
import {
  Check,
  Calendar,
  Edit2,
  Trash2,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { PriorityBadge, CategoryBadge, StatusBadge } from '../common/Badge';
import { formatDate, getDueDateStatus } from '../../utils/taskUtils';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface.card};
  border: 1px solid
    ${({ $isCompleted, theme }) =>
      $isCompleted ? theme.colors.surface.borderLight : theme.colors.surface.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing[5]};
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;

  ${({ $isCompleted }) =>
    $isCompleted &&
    css`
      opacity: 0.75;
      background-color: #fafbfd;
    `}

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme }) => theme.colors.primary[300]};
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  flex: 1;
`;

const CheckboxButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 2px solid
    ${({ $checked, theme }) =>
      $checked ? theme.colors.status.success : theme.colors.surface.borderDark};
  background-color: ${({ $checked, theme }) =>
    $checked ? theme.colors.status.success : 'transparent'};
  color: ${({ theme }) => theme.colors.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.status.success};
    background-color: ${({ $checked, theme }) =>
      $checked ? theme.colors.status.success : theme.colors.status.successLight};
  }

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 3px;
  }
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`;

const TaskTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.35;
  transition: ${({ theme }) => theme.transitions.fast};

  ${({ $isCompleted, theme }) =>
    $isCompleted &&
    css`
      text-decoration: line-through;
      color: ${theme.colors.text.muted};
    `}
`;

const TaskDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BadgesRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const DueDateIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: 0.2rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.sm};

  ${({ $status, theme }) => {
    switch ($status) {
      case 'overdue':
        return css`
          background-color: ${theme.colors.status.dangerLight};
          color: ${theme.colors.status.danger};
          border: 1px solid ${theme.colors.status.dangerBorder};
        `;
      case 'today':
        return css`
          background-color: ${theme.colors.status.warningLight};
          color: ${theme.colors.status.warning};
          border: 1px solid ${theme.colors.status.warningBorder};
        `;
      default:
        return css`
          background-color: ${theme.colors.surface.subtle};
          color: ${theme.colors.text.secondary};
          border: 1px solid ${theme.colors.surface.border};
        `;
    }
  }}

  svg {
    width: 13px;
    height: 13px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.surface.borderLight};
  padding-top: ${({ theme }) => theme.spacing[3]};
  margin-top: auto;
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text.muted};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme, $variant }) =>
      $variant === 'danger' ? theme.colors.status.dangerLight : theme.colors.surface.subtle};
    color: ${({ theme, $variant }) =>
      $variant === 'danger' ? theme.colors.status.danger : theme.colors.primary[600]};
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const TaskCard = ({ task, onToggle, onEdit, onDelete }) => {
  const dueDateStatus = getDueDateStatus(task.dueDate, task.completed);

  return (
    <Card $isCompleted={task.completed}>
      <CardHeader>
        <HeaderLeft>
          <CheckboxButton
            $checked={task.completed}
            onClick={() => onToggle(task.id)}
            aria-label={task.completed ? `Mark ${task.title} as in progress` : `Mark ${task.title} as completed`}
            type="button"
          >
            {task.completed && <Check />}
          </CheckboxButton>

          <TitleArea>
            <TaskTitle $isCompleted={task.completed}>{task.title}</TaskTitle>
            {task.description && <TaskDescription>{task.description}</TaskDescription>}
          </TitleArea>
        </HeaderLeft>
      </CardHeader>

      <BadgesRow>
        <PriorityBadge priority={task.priority} />
        <CategoryBadge category={task.category} />
        {task.dueDate && (
          <DueDateIndicator $status={dueDateStatus}>
            {dueDateStatus === 'overdue' ? <AlertCircle /> : <Calendar />}
            <span>
              {dueDateStatus === 'overdue'
                ? `Overdue: ${formatDate(task.dueDate)}`
                : dueDateStatus === 'today'
                ? 'Due Today'
                : formatDate(task.dueDate)}
            </span>
          </DueDateIndicator>
        )}
      </BadgesRow>

      <CardFooter>
        <StatusBadge status={task.completed ? 'completed' : 'active'} />

        <CardActions>
          <IconButton
            onClick={() => onEdit(task)}
            aria-label={`Edit task ${task.title}`}
            title="Edit Task"
            type="button"
          >
            <Edit2 />
          </IconButton>
          <IconButton
            $variant="danger"
            onClick={() => onDelete(task.id)}
            aria-label={`Delete task ${task.title}`}
            title="Delete Task"
            type="button"
          >
            <Trash2 />
          </IconButton>
        </CardActions>
      </CardFooter>
    </Card>
  );
};
