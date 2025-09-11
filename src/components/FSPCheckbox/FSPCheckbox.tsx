import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface FSPCheckboxProps {
  // Basic props
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  // Label and display
  label?: string;
  required?: boolean;
  disabled?: boolean;
  
  // Styling and layout
  labelSize?: 'small' | 'regular';
  bold?: boolean;
  inactive?: boolean;
  whiteSpaceWrap?: boolean;
  inverted?: boolean;
  
  // States
  hasError?: boolean;
  
  // Other
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  cypressSelector?: string;
}

const CheckboxContainer = styled.div<{
  disabled?: boolean;
  bold?: boolean;
  inactive?: boolean;
  whiteSpaceWrap?: boolean;
  inverted?: boolean;
}>`
  display: inline-block;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${props => props.bold && `
    label {
      font-weight: bold;
    }
  `}
  
  ${props => props.inactive && `
    label {
      color: var(--gray2, #8c8c8c);
    }
  `}
  
  ${props => props.whiteSpaceWrap && `
    .checkbox-layout {
      white-space: inherit;
    }
  `}
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const CheckboxInput = styled.div<{
  checked?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  inverted?: boolean;
}>`
  position: relative;
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  border: 1px solid var(--gray2, #8c8c8c);
  border-radius: 2px;
  background-color: var(--white, #ffffff);
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.checked && `
    background-color: var(--blue, #1976d2);
    border-color: var(--blue, #1976d2);
    
    &::after {
      content: '';
      position: absolute;
      left: 4px;
      top: 1px;
      width: 4px;
      height: 8px;
      border: solid var(--white, #ffffff);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  `}
  
  ${props => props.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
    
    ${props.checked && `
      background-color: var(--blue, #1976d2);
      border-color: var(--blue, #1976d2);
    `}
  `}
  
  ${props => props.hasError && `
    border-color: var(--red, #d72919);
  `}
  
  ${props => props.inverted && `
    background-color: var(--white, #ffffff);
    
    ${props.checked && `
      &::after {
        border-color: var(--blue, #1976d2);
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
  bold?: boolean;
  inactive?: boolean;
}>`
  font-size: ${props => props.size === 'small' ? '12px' : '14px'};
  line-height: ${props => props.size === 'small' ? '14px' : '16px'};
  color: ${props => {
    if (props.disabled) return 'var(--gray2, #919191)';
    if (props.inactive) return 'var(--gray2, #8c8c8c)';
    if (props.size === 'small') return 'var(--gray1, #595959)';
    return 'var(--black, #000000)';
  }};
  font-weight: ${props => props.bold ? 'bold' : '500'};
  margin-bottom: 0;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  user-select: none;
  
  ${props => props.hasError && `
    color: var(--red, #d72919);
  `}
`;

const RequiredAsterisk = styled.span`
  color: inherit;
  margin-right: 2px;
`;

export const FSPCheckbox: React.FC<FSPCheckboxProps> = ({
  checked = false,
  onChange,
  onBlur,
  onFocus,
  label,
  required = false,
  disabled = false,
  labelSize = 'regular',
  bold = false,
  inactive = false,
  whiteSpaceWrap = false,
  inverted = false,
  hasError = false,
  className,
  id,
  name,
  value,
  cypressSelector = 'fsp-checkbox'
}) => {
  const [internalChecked, setInternalChecked] = useState(checked);

  useEffect(() => {
    setInternalChecked(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setInternalChecked(newChecked);
    onChange?.(newChecked);
  };

  const handleClick = () => {
    if (!disabled) {
      const newChecked = !internalChecked;
      setInternalChecked(newChecked);
      onChange?.(newChecked);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
  };

  return (
    <CheckboxContainer
      className={className}
      disabled={disabled}
      bold={bold}
      inactive={inactive}
      whiteSpaceWrap={whiteSpaceWrap}
      inverted={inverted}
    >
      <CheckboxWrapper>
        <HiddenInput
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={internalChecked}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          disabled={disabled}
          data-cy={cypressSelector}
        />
        <CheckboxInput
          checked={internalChecked}
          disabled={disabled}
          hasError={hasError}
          inverted={inverted}
          onClick={handleClick}
        />
        {label && (
          <Label
            htmlFor={id}
            size={labelSize}
            disabled={disabled}
            hasError={hasError}
            bold={bold}
            inactive={inactive}
            className="checkbox-layout"
            onClick={handleClick}
          >
            {required && <RequiredAsterisk>*</RequiredAsterisk>}
            {label}
          </Label>
        )}
      </CheckboxWrapper>
    </CheckboxContainer>
  );
};
