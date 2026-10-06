import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useTasks } from '../../hooks/useTasks';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: ${({ theme }) => theme.zIndices.tooltip};
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;
  background-color: ${({ theme }) => theme.colors.surface.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border-left: 4px solid
    ${({ $type, theme }) =>
      $type === 'success'
        ? theme.colors.status.success
        : $type === 'danger'
        ? theme.colors.status.danger
        : theme.colors.primary[600]};
  animation: ${slideIn} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  max-width: 380px;

  ${({ theme }) => theme.media.mobile} {
    left: 16px;
    right: 16px;
    bottom: 16px;
    max-width: none;
  }
`;

const ToastIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ $type, theme }) =>
    $type === 'success'
      ? theme.colors.status.success
      : $type === 'danger'
      ? theme.colors.status.danger
      : theme.colors.primary[600]};

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ToastMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  flex: 1;
`;

const DismissButton = styled.button`
  color: ${({ theme }) => theme.colors.text.muted};
  padding: 4px;
  border-radius: ${({ theme }) => theme.radii.sm};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.surface.subtle};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Toast = () => {
  const { toast, hideToast } = useTasks();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast, hideToast]);

  if (!toast) return null;

  return (
    <ToastContainer $type={toast.type} role="status" aria-live="polite">
      <ToastIcon $type={toast.type}>
        {toast.type === 'success' && <CheckCircle />}
        {toast.type === 'danger' && <AlertCircle />}
        {toast.type === 'info' && <Info />}
      </ToastIcon>
      <ToastMessage>{toast.message}</ToastMessage>
      <DismissButton onClick={hideToast} aria-label="Dismiss notification">
        <X />
      </DismissButton>
    </ToastContainer>
  );
};
