import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Plus, Save, AlertCircle } from 'lucide-react';
import {
  FormGroup,
  Label,
  StyledInput,
  StyledTextarea,
  StyledSelect,
  ErrorMessage,
  HelperText,
} from '../common/Input';
import { Button } from '../common/Button';
import { TASK_CATEGORIES, TASK_PRIORITIES } from '../../utils/constants';
import { validateTaskForm } from '../../utils/taskUtils';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[4]};

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const PriorityOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const PriorityOptionButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border: 1.5px solid
    ${({ $isSelected, $priority, theme }) =>
      $isSelected
        ? theme.colors.priority[$priority]?.dot
        : theme.colors.surface.border};
  background-color: ${({ $isSelected, $priority, theme }) =>
    $isSelected ? theme.colors.priority[$priority]?.bg : theme.colors.surface.card};
  color: ${({ $isSelected, $priority, theme }) =>
    $isSelected ? theme.colors.priority[$priority]?.text : theme.colors.text.secondary};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ $priority, theme }) => theme.colors.priority[$priority]?.dot};
  }
`;

const FormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding-top: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.surface.border};

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column-reverse;
    button {
      width: 100%;
    }
  }
`;

export const TaskForm = ({
  initialData = null,
  onSubmit,
  onCancel,
  isEditMode = false,
}) => {
  // Local form state (demonstrating useState for form management)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Work',
    priority: TASK_PRIORITIES.MEDIUM,
    dueDate: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Synchronize form data when editing a different task
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        category: initialData.category || 'Work',
        priority: initialData.priority || TASK_PRIORITIES.MEDIUM,
        dueDate: initialData.dueDate || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error on change if already submitted
    if (isSubmitted && errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handlePriorityChange = (priority) => {
    setFormData((prev) => ({ ...prev, priority }));
    if (isSubmitted && errors.priority) {
      setErrors((prev) => ({ ...prev, priority: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const validation = validateTaskForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup>
        <Label htmlFor="task-title">
          Task Title <span className="required">*</span>
        </Label>
        <StyledInput
          id="task-title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Implement State Management Architecture"
          hasError={Boolean(errors.title)}
          autoFocus
        />
        {errors.title ? (
          <ErrorMessage>
            <AlertCircle size={12} />
            {errors.title}
          </ErrorMessage>
        ) : (
          <HelperText>Give your task a clear, concise action title.</HelperText>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="task-description">Description (Optional)</Label>
        <StyledTextarea
          id="task-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Provide additional context, specifications, or sub-steps..."
          hasError={Boolean(errors.description)}
        />
        {errors.description && (
          <ErrorMessage>
            <AlertCircle size={12} />
            {errors.description}
          </ErrorMessage>
        )}
      </FormGroup>

      <FormRow>
        <FormGroup>
          <Label htmlFor="task-category">Category</Label>
          <StyledSelect
            id="task-category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {TASK_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </StyledSelect>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="task-due-date">Due Date</Label>
          <StyledInput
            id="task-due-date"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </FormGroup>
      </FormRow>

      <FormGroup>
        <Label>Priority Level</Label>
        <PriorityOptions role="radiogroup" aria-label="Task Priority">
          <PriorityOptionButton
            type="button"
            role="radio"
            aria-checked={formData.priority === TASK_PRIORITIES.LOW}
            $priority="low"
            $isSelected={formData.priority === TASK_PRIORITIES.LOW}
            onClick={() => handlePriorityChange(TASK_PRIORITIES.LOW)}
          >
            Low
          </PriorityOptionButton>

          <PriorityOptionButton
            type="button"
            role="radio"
            aria-checked={formData.priority === TASK_PRIORITIES.MEDIUM}
            $priority="medium"
            $isSelected={formData.priority === TASK_PRIORITIES.MEDIUM}
            onClick={() => handlePriorityChange(TASK_PRIORITIES.MEDIUM)}
          >
            Medium
          </PriorityOptionButton>

          <PriorityOptionButton
            type="button"
            role="radio"
            aria-checked={formData.priority === TASK_PRIORITIES.HIGH}
            $priority="high"
            $isSelected={formData.priority === TASK_PRIORITIES.HIGH}
            onClick={() => handlePriorityChange(TASK_PRIORITIES.HIGH)}
          >
            High
          </PriorityOptionButton>
        </PriorityOptions>
      </FormGroup>

      <FormActions>
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          variant="primary"
          icon={isEditMode ? <Save /> : <Plus />}
          id="btn-submit-task-form"
        >
          {isEditMode ? 'Save Changes' : 'Create Task'}
        </Button>
      </FormActions>
    </Form>
  );
};
