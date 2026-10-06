import React from 'react';
import styled from 'styled-components';
import { Layers, CheckCircle2, Clock, AlertTriangle, TrendingUp } from 'lucide-react';
import { StatisticsCard } from './StatisticsCard';
import { useTasks } from '../../hooks/useTasks';

const StatsSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};

  ${({ theme }) => theme.media.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ProgressCard = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[900]}, ${({ theme }) => theme.colors.primary[800]});
  border-radius: ${({ theme }) => theme.radii['2xl']};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  color: ${({ theme }) => theme.colors.text.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadows.md};

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProgressInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.accent.teal};
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: ${({ theme }) => theme.typography.fontSize.md};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    }

    span {
      font-size: ${({ theme }) => theme.typography.fontSize.xs};
      color: ${({ theme }) => theme.colors.primary[200]};
    }
  }
`;

const ProgressBarWrapper = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    max-width: none;
  }
`;

const Track = styled.div`
  flex: 1;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  width: ${({ $percentage }) => `${$percentage}%`};
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent.teal}, #34d399);
  border-radius: ${({ theme }) => theme.radii.full};
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const PercentText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.accent.teal};
  min-width: 45px;
  text-align: right;
`;

export const Statistics = () => {
  const { statistics } = useTasks();

  return (
    <StatsSection aria-label="Task overview statistics">
      <StatsGrid>
        <StatisticsCard
          icon={<Layers />}
          title="Total Tasks"
          value={statistics.total}
          subtitle="All recorded workspace items"
          badgeText="All Items"
          accentColor="#6366f1"
          iconBgColor="#e0e7ff"
          iconColor="#4f46e5"
        />
        <StatisticsCard
          icon={<CheckCircle2 />}
          title="Completed"
          value={statistics.completed}
          subtitle={`${statistics.completionRate}% completion rate`}
          badgeText="Finished"
          accentColor="#10b981"
          iconBgColor="#d1fae5"
          iconColor="#059669"
        />
        <StatisticsCard
          icon={<Clock />}
          title="In Progress"
          value={statistics.pending}
          subtitle="Tasks awaiting completion"
          badgeText="Active"
          accentColor="#3b82f6"
          iconBgColor="#dbeafe"
          iconColor="#2563eb"
        />
        <StatisticsCard
          icon={<AlertTriangle />}
          title="High Priority"
          value={statistics.highPriority}
          subtitle="Urgent pending attention"
          badgeText="Urgent"
          accentColor="#ef4444"
          iconBgColor="#fee2e2"
          iconColor="#dc2626"
        />
      </StatsGrid>

      <ProgressCard>
        <ProgressInfo>
          <TrendingUp />
          <div>
            <strong>Workspace Productivity</strong>
            <span>
              {statistics.completed} of {statistics.total} tasks resolved
            </span>
          </div>
        </ProgressInfo>
        <ProgressBarWrapper>
          <Track>
            <Fill $percentage={statistics.completionRate} />
          </Track>
          <PercentText>{statistics.completionRate}%</PercentText>
        </ProgressBarWrapper>
      </ProgressCard>
    </StatsSection>
  );
};
