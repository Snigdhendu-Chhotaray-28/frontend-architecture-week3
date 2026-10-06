import React from 'react';
import styled, { css } from 'styled-components';
import {
  Layers,
  Clock,
  CheckCircle2,
  AlertTriangle,
  FolderOpen,
  RotateCcw,
  Trash2,
  Database,
  X,
  Sparkles,
} from 'lucide-react';
import { useTasks } from '../../hooks/useTasks';
import { TASK_CATEGORIES, TASK_STATUS } from '../../utils/constants';

const SidebarBackdrop = styled.div`
  display: none;
  ${({ theme }) => theme.media.tablet} {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background-color: rgba(15, 23, 42, 0.5);
    backdrop-filter: blur(2px);
    z-index: ${({ theme }) => theme.zIndices.fixed};
  }
`;

const SidebarContainer = styled.aside`
  width: 260px;
  background-color: ${({ theme }) => theme.colors.surface.sidebar};
  border-right: 1px solid ${({ theme }) => theme.colors.surface.border};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 65px);
  position: sticky;
  top: 65px;
  overflow-y: auto;
  padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[4]}`};
  transition: transform ${({ theme }) => theme.transitions.normal};

  ${({ theme }) => theme.media.tablet} {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: ${({ theme }) => theme.zIndices.fixed + 1};
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    width: 280px;
  }
`;

const MobileSidebarHeader = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.surface.border};

  ${({ theme }) => theme.media.tablet} {
    display: flex;
  }
`;

const MobileTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CloseSidebarButton = styled.button`
  padding: 0.375rem;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text.muted};
  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.subtle};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

const SectionHeader = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.light};
  margin: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[3]} ${theme.spacing[2]}`};
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const NavItem = styled.li``;

const NavButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: ${({ theme }) => theme.transitions.fast};

  div.left {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    svg {
      width: 18px;
      height: 18px;
    }
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      background-color: ${theme.colors.primary[50]};
      color: ${theme.colors.primary[700]};
      font-weight: ${theme.typography.fontWeight.semibold};

      div.left svg {
        color: ${theme.colors.primary[600]};
      }
    `}

  &:hover:not(:disabled) {
    background-color: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.primary[100] : theme.colors.surface.subtle};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const CountPill = styled.span`
  padding: 0.15rem 0.5rem;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary[200] : theme.colors.surface.subtle};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary[800] : theme.colors.text.muted};
`;

const ActionsSection = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.surface.border};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: ${({ theme }) => theme.transitions.fast};

  svg {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.subtle};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const StorageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.colors.surface.subtle};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-top: ${({ theme }) => theme.spacing[3]};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.text.muted};

  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.status.success};
  }
`;

export const Sidebar = ({ isOpen, onClose }) => {
  const {
    filters,
    setStatusFilter,
    setPriorityFilter,
    setCategoryFilter,
    statistics,
    resetToDefault,
    clearCompleted,
  } = useTasks();

  const handleStatusClick = (status, priority = 'all') => {
    setStatusFilter(status);
    setPriorityFilter(priority);
    setCategoryFilter('all');
    if (onClose) onClose();
  };

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
    if (onClose) onClose();
  };

  const isAllActive = filters.status === TASK_STATUS.ALL && filters.priority === 'all' && filters.category === 'all';
  const isActiveOnly = filters.status === TASK_STATUS.ACTIVE && filters.priority === 'all';
  const isCompletedOnly = filters.status === TASK_STATUS.COMPLETED;
  const isHighPriorityOnly = filters.priority === 'high' && filters.status === 'all';

  return (
    <>
      <SidebarBackdrop $isOpen={isOpen} onClick={onClose} />
      <SidebarContainer $isOpen={isOpen}>
        <MobileSidebarHeader>
          <MobileTitle>Task Navigation</MobileTitle>
          <CloseSidebarButton onClick={onClose} aria-label="Close sidebar">
            <X />
          </CloseSidebarButton>
        </MobileSidebarHeader>

        <SectionHeader>Main Views</SectionHeader>
        <NavList>
          <NavItem>
            <NavButton
              $isActive={isAllActive}
              onClick={() => handleStatusClick(TASK_STATUS.ALL)}
            >
              <div className="left">
                <Layers />
                <span>All Tasks</span>
              </div>
              <CountPill $isActive={isAllActive}>{statistics.total}</CountPill>
            </NavButton>
          </NavItem>

          <NavItem>
            <NavButton
              $isActive={isActiveOnly}
              onClick={() => handleStatusClick(TASK_STATUS.ACTIVE)}
            >
              <div className="left">
                <Clock />
                <span>In Progress</span>
              </div>
              <CountPill $isActive={isActiveOnly}>{statistics.pending}</CountPill>
            </NavButton>
          </NavItem>

          <NavItem>
            <NavButton
              $isActive={isCompletedOnly}
              onClick={() => handleStatusClick(TASK_STATUS.COMPLETED)}
            >
              <div className="left">
                <CheckCircle2 />
                <span>Completed</span>
              </div>
              <CountPill $isActive={isCompletedOnly}>{statistics.completed}</CountPill>
            </NavButton>
          </NavItem>

          <NavItem>
            <NavButton
              $isActive={isHighPriorityOnly}
              onClick={() => handleStatusClick('all', 'high')}
            >
              <div className="left">
                <AlertTriangle />
                <span>High Priority</span>
              </div>
              <CountPill $isActive={isHighPriorityOnly}>{statistics.highPriority}</CountPill>
            </NavButton>
          </NavItem>
        </NavList>

        <SectionHeader>Categories</SectionHeader>
        <NavList>
          {TASK_CATEGORIES.map((cat) => {
            const count = statistics.categoryCounts[cat] || 0;
            const isCatActive = filters.category === cat;
            return (
              <NavItem key={cat}>
                <NavButton
                  $isActive={isCatActive}
                  onClick={() => handleCategoryClick(cat)}
                >
                  <div className="left">
                    <FolderOpen />
                    <span>{cat}</span>
                  </div>
                  <CountPill $isActive={isCatActive}>{count}</CountPill>
                </NavButton>
              </NavItem>
            );
          })}
        </NavList>

        <ActionsSection>
          <ActionButton onClick={resetToDefault} title="Restore original realistic demo tasks">
            <RotateCcw />
            <span>Reset Demo Data</span>
          </ActionButton>

          {statistics.completed > 0 && (
            <ActionButton onClick={clearCompleted} title="Remove all completed tasks">
              <Trash2 />
              <span>Clear Completed ({statistics.completed})</span>
            </ActionButton>
          )}

          <StorageInfo>
            <Database />
            <span>LocalStorage Synchronized</span>
          </StorageInfo>
        </ActionsSection>
      </SidebarContainer>
    </>
  );
};
