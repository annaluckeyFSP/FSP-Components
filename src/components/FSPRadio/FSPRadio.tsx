import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface FSPRadioProps {
  // Basic props
  value?: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  // Label and display
  label?: string;
  required?: boolean;
  disabled?: boolean;
  
  // Styling and layout
  labelSize?: 'small' | 'regular';
  solid?: boolean;
  inverted?: boolean;
  
  // States
  hasError?: boolean;
  
  // Other
  className?: string;
  id?: string;
  name?: string;
  cypressSelector?: string;
}

export interface FSPRadioGroupProps {
  // Basic props
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  // Options
  options: RadioOption[];
  
  // Label and display
  label?: string;
  required?: boolean;
  disabled?: boolean;
  
  // Styling and layout
  labelSize?: 'small' | 'regular';
  solid?: boolean;
  inverted?: boolean;
  direction?: 'vertical' | 'horizontal';
  
  // States
  hasError?: boolean;
  
  // Other
  className?: string;
  name?: string;
  cypressSelector?: string;
}

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
  cypressSelector?: string;
}

const RadioContainer = styled.div<{
  disabled?: boolean;
  hasError?: boolean;
  direction?: 'vertical' | 'horizontal';
}>`
  display: grid;
  gap: 5px;
  grid-template-columns: ${props => props.direction === 'horizontal' ? 'repeat(auto-fit, minmax(200px, 1fr))' : '1fr'};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${props => props.hasError && `
    .radio-button .radio-input {
      border: 1px solid var(--red, #d72919) !important;
    }
  `}
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const RadioInput = styled.div<{
  checked?: boolean;
  disabled?: boolean;
  solid?: boolean;
  inverted?: boolean;
}>`
  position: relative;
  width: 17px;
  height: 17px;
  min-width: 17px;
  min-height: 17px;
  border: 1px solid var(--gray2, #8c8c8c);
  border-radius: 50%;
  background-color: var(--white, #ffffff);
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 2px;
  
  ${props => props.solid && `
    background-color: var(--white, #ffffff);
  `}
  
  ${props => props.checked && `
    border-color: var(--blue, #1976d2);
    
    &::before {
      content: '';
      position: absolute;
      left: -2px;
      top: -2px;
      right: -2px;
      bottom: -2px;
      border: 2px solid var(--blue, #1976d2);
      border-radius: 50%;
      pointer-events: none;
    }
    
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--blue, #1976d2);
      transform: translate(-50%, -50%);
    }
  `}
  
  ${props => props.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}
  
  ${props => props.inverted && `
    background-color: var(--white, #ffffff);
    
    ${props.checked && `
      border-color: var(--white, #ffffff);
      
      &::before {
        content: '';
        position: absolute;
        left: -2px;
        top: -2px;
        right: -2px;
        bottom: -2px;
        border: 2px solid var(--white, #ffffff);
        border-radius: 50%;
        pointer-events: none;
      }
      
      &::after {
        background-color: var(--blue, #1976d2);
      }
    `}
  `}
  
  &:hover:not(:disabled) {
    border-color: var(--blue, #1976d2);
  }
`;

const Label = styled.label<{
  size?: string;
  disabled?: boolean;
  hasError?: boolean;
  inverted?: boolean;
}>`
  font-size: ${props => props.size === 'small' ? '12px' : '14px'};
  line-height: ${props => props.size === 'small' ? '14px' : '16px'};
  color: ${props => {
    if (props.disabled) return 'var(--gray2, #919191)';
    if (props.inverted) return 'var(--white, #ffffff)';
    if (props.size === 'small') return 'var(--gray1, #595959)';
    return 'var(--black, #000000)';
  }};
  font-weight: 500;
  margin-bottom: 0;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  user-select: none;
  padding-top: 2px;
  
  ${props => props.hasError && `
    color: var(--red, #d72919);
  `}
`;

const RequiredAsterisk = styled.span`
  color: inherit;
  margin-right: 2px;
`;

export const FSPRadio: React.FC<FSPRadioProps> = ({
  value,
  selectedValue,
  onChange,
  onBlur,
  onFocus,
  label,
  required = false,
  disabled = false,
  labelSize = 'regular',
  solid = false,
  inverted = false,
  hasError = false,
  className,
  id,
  name,
  cypressSelector = 'fsp-radio'
}) => {
  const isChecked = selectedValue === value;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      onChange?.(value || '');
    }
  };

  const handleClick = () => {
    if (!disabled && !isChecked) {
      onChange?.(value || '');
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
  };

  return (
    <RadioWrapper className={className}>
      <HiddenInput
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        disabled={disabled}
        data-cy={cypressSelector}
      />
      <RadioInput
        checked={isChecked}
        disabled={disabled}
        solid={solid}
        inverted={inverted}
        onClick={handleClick}
        className="radio-input"
      />
      {label && (
        <Label
          htmlFor={id}
          size={labelSize}
          disabled={disabled}
          hasError={hasError}
          inverted={inverted}
          onClick={handleClick}
        >
          {required && <RequiredAsterisk>*</RequiredAsterisk>}
          {label}
        </Label>
      )}
    </RadioWrapper>
  );
};

export const FSPRadioGroup: React.FC<FSPRadioGroupProps> = ({
  value,
  onChange,
  onBlur,
  onFocus,
  options = [],
  label,
  required = false,
  disabled = false,
  labelSize = 'regular',
  solid = false,
  inverted = false,
  direction = 'vertical',
  hasError = false,
  className,
  name,
  cypressSelector = 'fsp-radio-group'
}) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (newValue: string) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <RadioContainer
      className={className}
      disabled={disabled}
      hasError={hasError}
      direction={direction}
    >
      {label && (
        <div style={{ gridColumn: '1 / -1', marginBottom: '8px' }}>
          <Label
            size={labelSize}
            disabled={disabled}
            hasError={hasError}
            inverted={inverted}
          >
            {required && <RequiredAsterisk>*</RequiredAsterisk>}
            {label}
          </Label>
        </div>
      )}
      {options.map((option, index) => (
        <FSPRadio
          key={option.value}
          value={option.value}
          selectedValue={internalValue}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          label={option.label}
          disabled={disabled || option.disabled}
          labelSize={labelSize}
          solid={solid}
          inverted={inverted}
          hasError={hasError}
          name={name}
          cypressSelector={option.cypressSelector || `${cypressSelector}-option-${index}`}
        />
      ))}
    </RadioContainer>
  );
};
