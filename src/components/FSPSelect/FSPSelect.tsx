import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

export interface FSPSelectProps {
  // Basic props
  value?: any;
  onChange?: (value: any) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  
  // Label and display
  label?: string;
  placeholder?: string;
  hint?: string;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  
  // Options and selection
  options: SelectOption[];
  multiple?: boolean;
  groups?: SelectGroup[];
  
  // Styling and layout
  labelSize?: 'small' | 'regular';
  labelPosition?: 'top' | 'left';
  fullWidth?: boolean;
  grayBackground?: boolean;
  grayWhenDisabled?: boolean;
  displayInline?: boolean;
  removeMinWidth?: boolean;
  preventFullWidthOnMobile?: boolean;
  
  // Loading and states
  loading?: boolean;
  hasError?: boolean;
  errorStateFromParent?: boolean;
  
  // Other
  className?: string;
  id?: string;
  name?: string;
  cypressSelector?: string;
}

export interface SelectOption {
  id: string | number;
  label: string;
  value: any;
  disabled?: boolean;
  color?: string;
  group?: string;
  cypressSelector?: string;
}

export interface SelectGroup {
  name: string;
  options: SelectOption[];
}

const SelectContainer = styled.div<{ 
  fullWidth?: boolean; 
  labelPosition?: string;
  displayInline?: boolean;
  noMarginTop?: boolean;
  noMarginBottom?: boolean;
}>`
  display: ${props => props.displayInline ? 'inline-block' : 'flex'};
  flex-direction: ${props => props.labelPosition === 'left' ? 'row' : 'column'};
  align-items: ${props => props.labelPosition === 'left' ? 'center' : 'stretch'};
  gap: ${props => props.labelPosition === 'left' ? '30px' : '4px'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  margin-top: ${props => props.noMarginTop ? '0' : '10px'};
  margin-bottom: ${props => props.noMarginBottom ? '0' : '10px'};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  @media (max-width: 599px) {
    flex-direction: column;
    gap: 4px;
    align-items: stretch;
  }
`;

const Label = styled.label<{ 
  size?: string; 
  required?: boolean; 
  disabled?: boolean;
  error?: boolean;
  position?: string;
}>`
  font-size: ${props => props.size === 'small' ? '12px' : '14px'};
  line-height: ${props => props.size === 'small' ? '14px' : '16px'};
  color: ${props => {
    if (props.disabled) return 'var(--gray2, #919191)';
    if (props.size === 'small') return 'var(--gray1, #595959)';
    return 'var(--black, #000000)';
  }};
  font-weight: 500;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${props => props.position === 'left' && `
    justify-self: end;
    line-height: 31px;
    height: 31px;
    min-width: 175px;
  `}
  
  ${props => props.error && `
    color: var(--red, #d72919);
  `}
  
  .required-asterisk {
    color: inherit;
    margin-right: 2px;
  }
`;

const SelectWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['fullWidth', 'hasError', 'disabled', 'grayBackground', 'grayWhenDisabled', 'removeMinWidth', 'preventFullWidthOnMobile'].includes(prop),
})<{
  fullWidth?: boolean;
  hasError?: boolean;
  disabled?: boolean;
  grayBackground?: boolean;
  grayWhenDisabled?: boolean;
  removeMinWidth?: boolean;
  preventFullWidthOnMobile?: boolean;
}>`
  position: relative;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  min-width: ${props => props.removeMinWidth ? 'auto' : '200px'};
  
  @media (max-width: 599px) {
    width: ${props => props.preventFullWidthOnMobile ? 'auto' : '100%'};
  }
`;

const CustomSelect = styled.div.withConfig({
  shouldForwardProp: (prop) => !['hasError', 'disabled', 'grayBackground', 'grayWhenDisabled', 'isOpen'].includes(prop),
})<{
  hasError?: boolean;
  disabled?: boolean;
  grayBackground?: boolean;
  grayWhenDisabled?: boolean;
  isOpen?: boolean;
}>`
  position: relative;
  width: 100%;
  height: 31px;
  border: 1px solid var(--gray2, #8c8c8c);
  border-radius: 2px;
  background-color: var(--white, #ffffff);
  cursor: pointer;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  
  ${props => props.isOpen && `
    border-color: var(--blue, #1376CD) !important;
    box-shadow: 0 0 0 2px rgba(19, 118, 205, 0.2) !important;
  `}
  
  &:focus-within {
    border-color: var(--blue, #1376CD) !important;
    box-shadow: 0 0 0 2px rgba(19, 118, 205, 0.2) !important;
  }
  
  ${props => props.disabled && `
    background-color: ${props.grayWhenDisabled ? 'var(--gray3, #d9d9d9)' : 'var(--white, #ffffff)'};
    color: var(--gray2, #8c8c8c);
    cursor: not-allowed;
  `}
  
  ${props => props.grayBackground && `
    background-color: var(--gray4, #f0f0f0);
  `}
  
  ${props => props.hasError && `
    border-color: var(--red, #d72919) !important;
  `}
  
  &:hover:not(:disabled) {
    border-color: var(--blue, #1376CD) !important;
    box-shadow: 0 0 0 2px rgba(19, 118, 205, 0.2) !important;
  }
  
  &:active:not(:disabled) {
    border-color: var(--blue, #1376CD) !important;
    box-shadow: 0 0 0 2px rgba(19, 118, 205, 0.2) !important;
  }
`;

const SelectTrigger = styled.div<{
  disabled?: boolean;
  grayBackground?: boolean;
  grayWhenDisabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: 100%;
  font-size: 14px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  color: var(--black, #000000);
  width: 100%;
  box-sizing: border-box;
  
  ${props => props.disabled && `
    color: var(--gray2, #8c8c8c);
  `}
`;

const SelectValue = styled.span<{
  placeholder?: boolean;
}>`
  flex: 1;
  color: ${props => props.placeholder ? 'var(--gray2, #8c8c8c)' : 'inherit'};
`;

const SelectArrow = styled.div<{
  isOpen?: boolean;
  disabled?: boolean;
}>`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--gray2, #8c8c8c);
  transition: transform 0.2s ease;
  margin-left: 8px;
  
  ${props => props.isOpen && `
    transform: rotate(180deg);
  `}
  
  ${props => props.disabled && `
    border-top-color: var(--gray2, #8c8c8c);
  `}
`;

const Dropdown = styled.div<{
  isOpen?: boolean;
}>`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  right: 0;
  background-color: var(--white, #ffffff);
  border: 1px solid var(--gray2, #8c8c8c);
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const Option = styled.div<{
  selected?: boolean;
  disabled?: boolean;
  isGroupHeader?: boolean;
}>`
  padding: 8px 12px;
  font-size: 14px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  cursor: ${props => props.disabled || props.isGroupHeader ? 'default' : 'pointer'};
  background-color: ${props => props.selected ? 'var(--blue, #1976d2)' : 'transparent'};
  color: ${props => {
    if (props.selected) return 'var(--white, #ffffff)';
    if (props.disabled) return 'var(--gray2, #8c8c8c)';
    if (props.isGroupHeader) return 'var(--gray1, #595959)';
    return 'var(--black, #000000)';
  }};
  font-weight: ${props => props.isGroupHeader ? '500' : 'normal'};
  
  &:hover {
    background-color: ${props => {
      if (props.disabled || props.isGroupHeader) return 'transparent';
      if (props.selected) return 'var(--blue, #1976d2)';
      return 'var(--gray3, #d9d9d9)';
    }};
  }
`;

const GroupHeader = styled(Option)`
  font-weight: bold;
  color: var(--gray1, #595959);
  background-color: transparent;
  border-bottom: none;
  margin: 0;
  padding: 8px 12px 4px 12px;
  
  &:hover {
    background-color: transparent;
  }
`;

const IndentedOption = styled(Option)`
  padding-left: 24px;
`;

const LoadingSpinner = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border: 2px solid var(--gray3, #d9d9d9);
  border-top: 2px solid var(--blue, #1976d2);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: translateY(-50%) rotate(0deg); }
    100% { transform: translateY(-50%) rotate(360deg); }
  }
`;

const Hint = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: var(--gray1, #595959);
  margin-top: 0px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`;

const Error = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: var(--red, #d72919);
  margin-top: 0px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`;

const Suffix = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: var(--gray1, #595959);
  pointer-events: none;
`;

export const FSPSelect: React.FC<FSPSelectProps> = ({
  value,
  onChange,
  onBlur,
  onFocus,
  label,
  placeholder,
  hint,
  errorMessage,
  required = false,
  disabled = false,
  options = [],
  multiple = false,
  groups = [],
  labelSize = 'regular',
  labelPosition = 'top',
  fullWidth = true,
  grayBackground = false,
  grayWhenDisabled = false,
  displayInline = false,
  removeMinWidth = false,
  preventFullWidthOnMobile = false,
  loading = false,
  hasError = false,
  errorStateFromParent = false,
  className,
  id,
  name,
  cypressSelector = 'fsp-select'
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (newValue: any) => {
    setInternalValue(newValue);
    onChange?.(newValue);
    setIsOpen(false);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    // Only blur if focus is moving outside the select component
    if (!selectRef.current?.contains(event.relatedTarget as Node)) {
      setIsOpen(false);
      onBlur?.(event as any);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    onFocus?.(event as any);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!disabled && !loading) {
        setIsOpen(!isOpen);
      }
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const showError = hasError || errorStateFromParent || (errorMessage && errorMessage.length > 0);

  const getDisplayValue = () => {
    if (multiple && Array.isArray(internalValue)) {
      if (internalValue.length === 0) return placeholder || 'Select options';
      if (internalValue.length === 1) {
        const option = [...options, ...groups.flatMap(g => g.options)].find(opt => opt.value === internalValue[0]);
        return option?.label || internalValue[0];
      }
      return `${internalValue.length} selected`;
    }
    
    if (internalValue === undefined || internalValue === null || internalValue === '') {
      return placeholder || 'Select an option';
    }
    
    const allOptions = [...options, ...groups.flatMap(g => g.options)];
    const option = allOptions.find(opt => opt.value === internalValue);
    return option?.label || internalValue;
  };

  const renderOptions = () => {
    if (groups.length > 0) {
      return groups.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          <GroupHeader isGroupHeader>{group.name}</GroupHeader>
          {group.options.map((option, optionIndex) => (
            <IndentedOption
              key={`${groupIndex}-${optionIndex}`}
              selected={multiple ? internalValue?.includes(option.value) : internalValue === option.value}
              disabled={option.disabled}
              onClick={() => !option.disabled && handleChange(
                multiple 
                  ? (internalValue || []).includes(option.value)
                    ? (internalValue || []).filter(v => v !== option.value)
                    : [...(internalValue || []), option.value]
                  : option.value
              )}
            >
              {option.label}
            </IndentedOption>
          ))}
        </React.Fragment>
      ));
    }
    
    return options.map((option, index) => (
      <Option
        key={index}
        selected={multiple ? internalValue?.includes(option.value) : internalValue === option.value}
        disabled={option.disabled}
        onClick={() => !option.disabled && handleChange(
          multiple 
            ? (internalValue || []).includes(option.value)
              ? (internalValue || []).filter(v => v !== option.value)
              : [...(internalValue || []), option.value]
            : option.value
        )}
      >
        {option.label}
      </Option>
    ));
  };

  return (
    <SelectContainer
      fullWidth={fullWidth}
      labelPosition={labelPosition}
      displayInline={displayInline}
      className={className}
    >
      {label && (
        <Label
          htmlFor={id}
          size={labelSize}
          required={required}
          disabled={disabled}
          error={showError}
          position={labelPosition}
        >
          {required && <span className="required-asterisk">*</span>}
          {label}
        </Label>
      )}
      
      <SelectWrapper
        fullWidth={fullWidth}
        hasError={showError}
        disabled={disabled}
        grayBackground={grayBackground}
        grayWhenDisabled={grayWhenDisabled}
        removeMinWidth={removeMinWidth}
        preventFullWidthOnMobile={preventFullWidthOnMobile}
      >
        <CustomSelect
          ref={selectRef}
          hasError={showError}
          disabled={disabled}
          grayBackground={grayBackground}
          grayWhenDisabled={grayWhenDisabled}
          isOpen={isOpen}
          tabIndex={disabled || loading ? -1 : 0}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onClick={() => !disabled && !loading && setIsOpen(!isOpen)}
          data-cy={cypressSelector}
        >
          <SelectTrigger
            disabled={disabled}
            grayBackground={grayBackground}
            grayWhenDisabled={grayWhenDisabled}
          >
            <SelectValue placeholder={!internalValue || (Array.isArray(internalValue) && internalValue.length === 0)}>
              {getDisplayValue()}
            </SelectValue>
            <SelectArrow isOpen={isOpen} disabled={disabled} />
          </SelectTrigger>
          
          <Dropdown isOpen={isOpen}>
            {renderOptions()}
          </Dropdown>
        </CustomSelect>
        
        {loading && <LoadingSpinner />}
      </SelectWrapper>
      
      {hint && !showError && (
        <Hint>{hint}</Hint>
      )}
      
      {showError && errorMessage && (
        <Error>{errorMessage}</Error>
      )}
    </SelectContainer>
  );
};
