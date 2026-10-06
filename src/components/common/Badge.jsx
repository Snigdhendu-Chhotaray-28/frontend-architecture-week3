import React from 'react';
import styled, { css } from 'styled-components';

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.radii.full};
  white-space: nowrap;
  line-height: 1.2;
  transition: ${({ theme }) => theme.transitions.fast};

  /* Priority variant */
  ${({ $type, $priority, theme }) =>
    $type === 'priority' &&
    css`
      background-color: ${theme.colors.priority[$priority]?.bg || theme.colors.surface.subtle};
      color: ${theme.colors.priority[$priority]?.text || theme.colors.text.secondary};
      border: 1px solid ${theme.colors.priority[$priority]?.border || theme.colors.surface.border};
    `}

  /* Category variant */
  ${({ $type, $category, theme }) =>
    $type === 'category' &&
    css`
      background-color: ${theme.colors.category[$category]?.bg || theme.colors.category.General.bg};
      color: ${theme.colors.category[$category]?.text || theme.colors.category.General.text};
      border: 1px solid ${theme.colors.category[$category]?.border || theme.colors.category.General.border};
    `}

  /* Status variant */
  ${({ $type, $status, theme }) =>
    $type === 'status' &&
    css`
      ${$status === 'completed' &&
      css`
        background-color: ${theme.colors.status.successLight};
        color: ${theme.colors.status.success};
        border: 1px solid ${theme.colors.status.successBorder};
      `}
      ${$status === 'active' &&
      css`
        background-color: ${theme.colors.status.infoLight};
        color: ${theme.colors.status.info};
        border: 1px solid ${theme.colors.status.infoBorder};
      `}
      ${$status === 'overdue' &&
      css`
        background-color: ${theme.colors.status.dangerLight};
        color: ${theme.colors.status.danger};
        border: 1px solid ${theme.colors.status.dangerBorder};
      `}
      ${$status === 'today' &&
      css`
        background-color: ${theme.colors.status.warningLight};
        color: ${theme.colors.status.warning};
        border: 1px solid ${theme.colors.status.warningBorder};
      `}
      ${$status === 'upcoming' &&
      css`
        background-color: ${theme.colors.surface.subtle};
        color: ${theme.colors.text.secondary};
        border: 1px solid ${theme.colors.surface.border};
      `}
    `}

  /* Neutral / Custom variant */
  ${({ $type, theme }) =>
    $type === 'neutral' &&
    css`
      background-color: ${theme.colors.surface.subtle};
      color: ${theme.colors.text.secondary};
      border: 1px solid ${theme.colors.surface.border};
    `}
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ $priority, theme }) =>
    theme.colors.priority[$priority]?.dot || theme.colors.primary[500]};
`;

export const PriorityBadge = ({ priority }) => {
  const label = priority ? priority.charAt(0).toUpperCase() + priority.slice(1) : 'Medium';
  return (
    <StyledBadge $type="priority" $priority={priority?.toLowerCase() || 'medium'}>
      <Dot $priority={priority?.toLowerCase() || 'medium'} />
      {label} Priority
    </StyledBadge>
  );
};

export const CategoryBadge = ({ category }) => {
  return (
    <StyledBadge $type="category" $category={category || 'General'}>
      {category || 'General'}
    </StyledBadge>
  );
};

export const StatusBadge = ({ status }) => {
  const getStatusLabel = () => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'active':
        return 'In Progress';
      case 'overdue':
        return 'Overdue';
      case 'today':
        return 'Due Today';
      case 'upcoming':
        return 'Upcoming';
      default:
        return status;
    }
  };

  return <StyledBadge $type="status" $status={status}>{getStatusLabel()}</StyledBadge>;
};

export const Badge = ({ children, count }) => {
  return (
    <StyledBadge $type="neutral">
      {children}
      {typeof count !== 'undefined' && <strong>{count}</strong>}
    </StyledBadge>
  );
};
