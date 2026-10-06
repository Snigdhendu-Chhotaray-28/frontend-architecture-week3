import React from 'react';
import styled, { css } from 'styled-components';

const getVariantStyles = ({ theme, variant = 'primary' }) => {
  switch (variant) {
    case 'primary':
      return css`
        background: linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.primary[700]});
        color: ${theme.colors.text.white};
        box-shadow: ${theme.shadows.sm};
        &:hover:not(:disabled) {
          background: linear-gradient(135deg, ${theme.colors.primary[500]}, ${theme.colors.primary[600]});
          box-shadow: ${theme.shadows.primaryGlow};
          transform: translateY(-1px);
        }
        &:active:not(:disabled) {
          transform: translateY(0);
        }
      `;
    case 'secondary':
      return css`
        background: ${theme.colors.surface.subtle};
        color: ${theme.colors.text.primary};
        border: 1px solid ${theme.colors.surface.border};
        &:hover:not(:disabled) {
          background: ${theme.colors.surface.borderLight};
          border-color: ${theme.colors.surface.borderDark};
        }
      `;
    case 'danger':
      return css`
        background: ${theme.colors.status.dangerLight};
        color: ${theme.colors.status.danger};
        border: 1px solid ${theme.colors.status.dangerBorder};
        &:hover:not(:disabled) {
          background: ${theme.colors.status.danger};
          color: ${theme.colors.text.white};
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.25);
        }
      `;
    case 'success':
      return css`
        background: ${theme.colors.status.successLight};
        color: ${theme.colors.status.success};
        border: 1px solid ${theme.colors.status.successBorder};
        &:hover:not(:disabled) {
          background: ${theme.colors.status.success};
          color: ${theme.colors.text.white};
        }
      `;
    case 'ghost':
      return css`
        background: transparent;
        color: ${theme.colors.text.secondary};
        &:hover:not(:disabled) {
          background: ${theme.colors.surface.subtle};
          color: ${theme.colors.text.primary};
        }
      `;
    case 'outline':
      return css`
        background: transparent;
        color: ${theme.colors.primary[600]};
        border: 1.5px solid ${theme.colors.primary[300]};
        &:hover:not(:disabled) {
          background: ${theme.colors.primary[50]};
          border-color: ${theme.colors.primary[600]};
        }
      `;
    default:
      return '';
  }
};

const getSizeStyles = ({ theme, size = 'md' }) => {
  switch (size) {
    case 'sm':
      return css`
        padding: 0.375rem 0.75rem;
        font-size: ${theme.typography.fontSize.xs};
        border-radius: ${theme.radii.md};
        gap: 0.375rem;
      `;
    case 'lg':
      return css`
        padding: 0.75rem 1.5rem;
        font-size: ${theme.typography.fontSize.md};
        border-radius: ${theme.radii.xl};
        gap: 0.625rem;
      `;
    case 'md':
    default:
      return css`
        padding: 0.5rem 1rem;
        font-size: ${theme.typography.fontSize.sm};
        border-radius: ${theme.radii.lg};
        gap: 0.5rem;
      `;
  }
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  line-height: 1;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.normal};
  user-select: none;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  svg {
    width: ${({ size }) => (size === 'sm' ? '14px' : size === 'lg' ? '20px' : '16px')};
    height: ${({ size }) => (size === 'sm' ? '14px' : size === 'lg' ? '20px' : '16px')};
    flex-shrink: 0;
  }
`;

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  iconRight = null,
  disabled = false,
  onClick,
  type = 'button',
  ariaLabel,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span aria-hidden="true">{iconRight}</span>}
    </StyledButton>
  );
};
