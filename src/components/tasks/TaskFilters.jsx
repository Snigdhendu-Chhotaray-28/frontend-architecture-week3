import React from 'react';
import styled, { css } from 'styled-components';
import { Filter, ArrowUpDown, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { SearchInput, StyledSelect } from '../common/Input';
import { Button } from '../common/Button';
import { useTasks } from '../../hooks/useTasks';
import { TASK_CATEGORIES, TASK_PRIORITIES, TASK_STATUS, SORT_OPTIONS } from '../../utils/constants';

const FilterBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface.card};
  border: 1px solid ${({ theme }) => theme.colors.surface.border};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  padding: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const StatusTabs = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.surface.subtle};
  padding: 0.25rem;
  border-radius: ${({ theme }) => theme.radii.xl};
  gap: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.surface.border};

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

const TabButton = styled.button`
  padding: 0.45rem 1rem;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: ${({ theme }) => theme.transitions.fast};
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      background-color: ${theme.colors.surface.card};
      color: ${theme.colors.primary[600]};
      box-shadow: ${theme.shadows.sm};
      font-weight: ${theme.typography.fontWeight.bold};
    `}

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const TabPill = styled.span`
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary[100] : theme.colors.surface.border};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary[800] : theme.colors.text.muted};
`;

const MobileSearchContainer = styled.div`
  display: none;
  ${({ theme }) => theme.media.tablet} {
    display: block;
    width: 100%;
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.surface.borderLight};

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SelectFiltersGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
  flex: 1;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 140px;

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }

  span.label {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    color: ${({ theme }) => theme.colors.text.muted};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    white-space: nowrap;
  }
`;

const CompactSelect = styled(StyledSelect)`
  padding: 0.4rem 2rem 0.4rem 0.75rem;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const TaskFilters = () => {
  const {
    filters,
    setSearch,
    setStatusFilter,
    setPriorityFilter,
    setCategoryFilter,
    setSortBy,
    resetFilters,
    statistics,
  } = useTasks();

  const isFilterModified =
    filters.search !== '' ||
    filters.status !== TASK_STATUS.ALL ||
    filters.priority !== 'all' ||
    filters.category !== 'all' ||
    filters.sortBy !== 'created-desc';

  return (
    <FilterBarContainer aria-label="Task Filters and Sorting Controls">
      <TopRow>
        <StatusTabs role="tablist">
          <TabButton
            role="tab"
            aria-selected={filters.status === TASK_STATUS.ALL}
            $isActive={filters.status === TASK_STATUS.ALL}
            onClick={() => setStatusFilter(TASK_STATUS.ALL)}
          >
            <span>All Tasks</span>
            <TabPill $isActive={filters.status === TASK_STATUS.ALL}>
              {statistics.total}
            </TabPill>
          </TabButton>

          <TabButton
            role="tab"
            aria-selected={filters.status === TASK_STATUS.ACTIVE}
            $isActive={filters.status === TASK_STATUS.ACTIVE}
            onClick={() => setStatusFilter(TASK_STATUS.ACTIVE)}
          >
            <span>In Progress</span>
            <TabPill $isActive={filters.status === TASK_STATUS.ACTIVE}>
              {statistics.pending}
            </TabPill>
          </TabButton>

          <TabButton
            role="tab"
            aria-selected={filters.status === TASK_STATUS.COMPLETED}
            $isActive={filters.status === TASK_STATUS.COMPLETED}
            onClick={() => setStatusFilter(TASK_STATUS.COMPLETED)}
          >
            <span>Completed</span>
            <TabPill $isActive={filters.status === TASK_STATUS.COMPLETED}>
              {statistics.completed}
            </TabPill>
          </TabButton>
        </StatusTabs>

        <MobileSearchContainer>
          <SearchInput
            value={filters.search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch('')}
            placeholder="Search tasks..."
            id="mobile-task-search"
          />
        </MobileSearchContainer>
      </TopRow>

      <BottomRow>
        <SelectFiltersGroup>
          <SelectWrapper>
            <span className="label">Priority:</span>
            <CompactSelect
              value={filters.priority}
              onChange={(e) => setPriorityFilter(e.target.value)}
              aria-label="Filter by priority"
            >
              <option value="all">All Priorities</option>
              <option value={TASK_PRIORITIES.HIGH}>High Priority</option>
              <option value={TASK_PRIORITIES.MEDIUM}>Medium Priority</option>
              <option value={TASK_PRIORITIES.LOW}>Low Priority</option>
            </CompactSelect>
          </SelectWrapper>

          <SelectWrapper>
            <span className="label">Category:</span>
            <CompactSelect
              value={filters.category}
              onChange={(e) => setCategoryFilter(e.target.value)}
              aria-label="Filter by category"
            >
              <option value="all">All Categories</option>
              {TASK_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </CompactSelect>
          </SelectWrapper>

          <SelectWrapper>
            <span className="label">Sort By:</span>
            <CompactSelect
              value={filters.sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort tasks by"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </CompactSelect>
          </SelectWrapper>
        </SelectFiltersGroup>

        {isFilterModified && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            icon={<RotateCcw />}
            title="Reset all active filters"
          >
            Reset Filters
          </Button>
        )}
      </BottomRow>
    </FilterBarContainer>
  );
};
