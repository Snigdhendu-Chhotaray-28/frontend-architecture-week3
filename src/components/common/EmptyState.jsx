import React from 'react';
import styled from 'styled-components';
import { ClipboardList, Plus } from 'lucide-react';
import { Button } from './Button';

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[6]}`};
  background-color: ${({ theme }) => theme.colors.surface.card};
  border: 2px dashed ${({ theme }) => theme.colors.surface.border};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  margin: ${({ theme }) => `${theme.spacing[6]} 0`};
`;

const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.primary[50]};
  color: ${({ theme }) => theme.colors.primary[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  svg {
    width: 32px;
    height: 32px;
  }
`;

const EmptyTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const EmptyDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  max-width: 420px;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.6;
`;

export const EmptyState = ({
  icon,
  title = 'No tasks found',
  description = 'There are no tasks matching your current filters. Try resetting your search or create a new task.',
  actionLabel,
  onAction,
}) => {
  return (
    <EmptyStateContainer>
      <IconCircle>{icon || <ClipboardList />}</IconCircle>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptyDescription>{description}</EmptyDescription>
      {actionLabel && onAction && (
        <Button variant="primary" size="md" onClick={onAction} icon={<Plus />}>
          {actionLabel}
        </Button>
      )}
    </EmptyStateContainer>
  );
};
