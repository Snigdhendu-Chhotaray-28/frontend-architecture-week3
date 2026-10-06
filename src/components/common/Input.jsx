import React from 'react';
import styled, { css } from 'styled-components';
import { Search, X } from 'lucide-react';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};

  span.required {
    color: ${({ theme }) => theme.colors.status.danger};
  }
`;

const baseInputStyles = css`
  width: 100%;
  padding: 0.625rem 0.875rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.surface.card};
  border: 1.5px solid ${({ hasError, theme }) =>
    hasError ? theme.colors.status.danger : theme.colors.surface.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  outline: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }

  &:hover:not(:disabled) {
    border-color: ${({ hasError, theme }) =>
      hasError ? theme.colors.status.danger : theme.colors.surface.borderDark};
  }

  &:focus {
    border-color: ${({ hasError, theme }) =>
      hasError ? theme.colors.status.danger : theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({ hasError, theme }) =>
      hasError ? 'rgba(239, 68, 68, 0.15)' : 'rgba(79, 70, 229, 0.15)'};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.surface.subtle};
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

export const StyledInput = styled.input`
  ${baseInputStyles}
`;

export const StyledTextarea = styled.textarea`
  ${baseInputStyles}
  min-height: 90px;
  resize: vertical;
`;

export const StyledSelect = styled.select`
  ${baseInputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px;
  padding-right: 2.25rem;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.status.danger};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.muted};
`;

// Specialized Search Input with clear action
const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 0.875rem;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.text.light};
  svg {
    width: 16px;
    height: 16px;
  }
`;

const SearchClearButton = styled.button`
  position: absolute;
  right: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.text.light};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.subtle};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const SearchInputField = styled(StyledInput)`
  padding-left: 2.375rem;
  padding-right: 2rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.surface.card};
`;

export const SearchInput = ({ value, onChange, onClear, placeholder = 'Search tasks...', id = 'task-search', ...rest }) => {
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <Search />
      </SearchIconWrapper>
      <SearchInputField
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
        {...rest}
      />
      {value && (
        <SearchClearButton type="button" onClick={onClear} aria-label="Clear search">
          <X />
        </SearchClearButton>
      )}
    </SearchWrapper>
  );
};
