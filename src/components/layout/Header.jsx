import React from 'react';
import styled from 'styled-components';
import { CheckSquare, Plus, Menu, Sparkles } from 'lucide-react';
import { SearchInput } from '../common/Input';
import { Button } from '../common/Button';
import { useTasks } from '../../hooks/useTasks';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndices.sticky};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[8]}`};
  background-color: ${({ theme }) => theme.colors.surface.header};
  border-bottom: 1px solid ${({ theme }) => theme.colors.surface.border};
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.92);

  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.subtle};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  svg {
    width: 22px;
    height: 22px;
  }

  ${({ theme }) => theme.media.tablet} {
    display: flex;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
`;

const BrandIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: ${({ theme }) => theme.radii.xl};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[600]}, ${({ theme }) => theme.colors.accent.purple});
  color: ${({ theme }) => theme.colors.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.primaryGlow};

  svg {
    width: 22px;
    height: 22px;
  }
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.extrabold};
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.text.primary}, ${({ theme }) => theme.colors.primary[700]});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span {
    font-size: 0.7rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text.muted};

    ${({ theme }) => theme.media.mobile} {
      display: none;
    }
  }
`;

const MiddleSection = styled.div`
  flex: 1;
  max-width: 440px;
  margin: 0 ${({ theme }) => theme.spacing[6]};

  ${({ theme }) => theme.media.tablet} {
    display: none; /* In mobile, search moves into filter bar */
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const UserBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0.375rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary[50]};
  border: 1px solid ${({ theme }) => theme.colors.primary[200]};
  border-radius: ${({ theme }) => theme.radii.full};

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[600]}, ${({ theme }) => theme.colors.accent.pink});
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: bold;
`;

const UserName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary[800]};
`;

export const Header = ({ onOpenAddModal, onToggleSidebar }) => {
  const { filters, setSearch } = useTasks();

  return (
    <HeaderContainer>
      <LeftSection>
        <MobileMenuButton onClick={onToggleSidebar} aria-label="Toggle navigation menu" type="button">
          <Menu />
        </MobileMenuButton>
        <Brand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <BrandIcon>
            <CheckSquare />
          </BrandIcon>
          <BrandText>
            <h1>TaskFlow</h1>
            <span>React State &amp; Hooks Dashboard</span>
          </BrandText>
        </Brand>
      </LeftSection>

      <MiddleSection>
        <SearchInput
          value={filters.search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch('')}
          placeholder="Search tasks by title or description..."
        />
      </MiddleSection>

      <RightSection>
        <Button
          variant="primary"
          size="md"
          icon={<Plus />}
          onClick={onOpenAddModal}
          id="btn-header-add-task"
        >
          Add Task
        </Button>
        <UserBadge>
          <Avatar>JS</Avatar>
          <UserName>Intern Workspace</UserName>
        </UserBadge>
      </RightSection>
    </HeaderContainer>
  );
};
