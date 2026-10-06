import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { X } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndices.modalBackdrop};
  padding: ${({ theme }) => theme.spacing[4]};
  animation: ${fadeIn} 0.2s ease-out;
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface.modal};
  border-radius: ${({ theme }) => theme.radii['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.modal};
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || '540px'};
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndices.modal};
  animation: ${slideUp} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid ${({ theme }) => theme.colors.surface.border};

  ${({ theme }) => theme.media.mobile} {
    max-height: 95vh;
    border-radius: ${({ theme }) => theme.radii.xl};
  }
`;

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[6]}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.surface.border};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[4]}`};
  }
`;

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.text.muted};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.subtle};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ModalBody = styled.div`
  padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[6]}`};
  overflow-y: auto;

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[4]}`};
  }
`;

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = '540px',
  id = 'accessible-modal',
}) => {
  const modalRef = useRef(null);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose} role="dialog" aria-modal="true" aria-labelledby={`${id}-title`}>
      <ModalContainer
        ref={modalRef}
        $maxWidth={maxWidth}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <ModalHeader>
          <ModalTitle id={`${id}-title`}>{title}</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close modal" type="button">
            <X />
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};
