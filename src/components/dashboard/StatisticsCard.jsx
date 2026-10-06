import React from 'react';
import styled, { css } from 'styled-components';

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface.card};
  border: 1px solid ${({ theme }) => theme.colors.surface.border};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  padding: ${({ theme }) => theme.spacing[5]};
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  position: relative;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme, $accentColor }) => $accentColor || theme.colors.primary[300]};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ $accentColor, theme }) =>
      $accentColor || `linear-gradient(90deg, ${theme.colors.primary[500]}, ${theme.colors.accent.purple})`};
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bgColor }) => $bgColor || 'rgba(79, 70, 229, 0.1)'};
  color: ${({ $iconColor, theme }) => $iconColor || theme.colors.primary[600]};

  svg {
    width: 22px;
    height: 22px;
  }
`;

const BadgeTag = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  padding: 0.2rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.surface.subtle};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const MetricValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extrabold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.1;
`;

const MetricTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const MetricSubtitle = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.light};
`;

export const StatisticsCard = ({
  icon,
  title,
  value,
  subtitle,
  badgeText,
  accentColor,
  iconBgColor,
  iconColor,
}) => {
  return (
    <CardContainer $accentColor={accentColor}>
      <CardTop>
        <IconWrapper $bgColor={iconBgColor} $iconColor={iconColor}>
          {icon}
        </IconWrapper>
        {badgeText && <BadgeTag>{badgeText}</BadgeTag>}
      </CardTop>
      <CardContent>
        <MetricValue>{value}</MetricValue>
        <MetricTitle>{title}</MetricTitle>
        {subtitle && <MetricSubtitle>{subtitle}</MetricSubtitle>}
      </CardContent>
    </CardContainer>
  );
};
