import React from 'react';
import styled from 'styled-components';

export interface FSPInputProps {
  // Basic props
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  
  // Label and display
  label?: string;
  placeholder?: string;
  hint?: string;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  
  // Input configuration
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  maxLength?: number;
  min?: number;
  max?: number;
  
  // Styling and layout
  labelSize?: 'small' | 'regular';
  labelPosition?: 'top' | 'left';
  fullWidth?: boolean;
  noMarginTop?: boolean;
  noMarginBottom?: boolean;
  
  // Icons and prefixes
  icon?: string;
  iconTooltip?: string;
  iconTooltipPosition?: 'before' | 'after';
  prefix?: string;
  suffix?: string;
  
  // Currency support
  currencySymbol?: string;
  allowNegative?: boolean;
  placesAfterDecimal?: number;
  
  // Counter options
  showCounter?: boolean;
  counterPosition?: 'inline' | 'bottom';
  
  // Validation
  hasError?: boolean;
  grayWhenDisabled?: boolean;
  
  // Other
  className?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
}

const InputContainer = styled.div<{ 
  fullWidth?: boolean; 
  labelPosition?: string;
  noMarginTop?: boolean;
  noMarginBottom?: boolean;
}>`
  display: flex;
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
  
  .icon {
    font-size: 14px;
    color: var(--gray2, #919191);
  }
`;

const InputWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['fullWidth', 'hasError', 'disabled', 'grayWhenDisabled', 'hasPrefix', 'hasSuffix'].includes(prop),
})<{ 
  fullWidth?: boolean;
  hasError?: boolean;
  disabled?: boolean;
  grayWhenDisabled?: boolean;
  hasPrefix?: boolean;
  hasSuffix?: boolean;
}>`
  position: relative;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  .input-field {
    width: 100%;
    height: 31px;
    padding: 0 8px;
    border: 1px solid var(--gray2, #919191);
    border-radius: 2px;
    background-color: var(--white, #ffffff);
    font-size: 14px;
    line-height: 16px;
    color: var(--black, #000000);
    font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
    box-sizing: border-box;
    transition: all 0.2s ease;
    
    ${props => props.hasPrefix && `
      padding-left: 26px;
    `}
    
    ${props => props.hasSuffix && `
      padding-right: 26px;
    `}
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--lightBlue2, #cce4f7);
      border-color: var(--blue, #1374c9);
    }
    
    &:disabled {
      color: var(--gray2, #919191);
      background-color: ${props => props.grayWhenDisabled ? 'var(--gray4, #f5f5f5)' : 'var(--white, #ffffff)'};
      cursor: not-allowed;
    }
    
    &::placeholder {
      color: var(--gray2, #919191);
    }
    
    ${props => props.hasError && `
      border-color: var(--red, #d72919) !important;
    `}
  }
`;

const PrefixSuffix = styled.span<{ position: 'prefix' | 'suffix' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray1, #595959);
  font-size: 14px;
  line-height: 16px;
  pointer-events: none;
  z-index: 1;
  
  ${props => props.position === 'prefix' && `
    left: 10px;
  `}
  
  ${props => props.position === 'suffix' && `
    right: 10px;
  `}
`;

const Counter = styled.div<{ position: 'inline' | 'bottom' }>`
  font-size: 12px;
  line-height: 14px;
  color: var(--gray1, #595959);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${props => props.position === 'inline' && `
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    font-size: 12px;
    line-height: 14px;
  `}
  
  ${props => props.position === 'bottom' && `
    display: flex;
    justify-content: flex-end;
    margin-top: 0px;
  `}
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

export const FSPInput: React.FC<FSPInputProps> = ({
  value = '',
  onChange,
  onBlur,
  onFocus,
  onKeyUp,
  label,
  placeholder,
  hint,
  errorMessage,
  required = false,
  disabled = false,
  type = 'text',
  inputMode,
  maxLength,
  min,
  max,
  labelSize = 'regular',
  labelPosition = 'top',
  fullWidth = true,
  noMarginTop = false,
  noMarginBottom = false,
  icon,
  prefix,
  suffix,
  currencySymbol,
  showCounter = false,
  counterPosition = 'bottom',
  hasError = false,
  grayWhenDisabled = false,
  className,
  id,
  name,
  autoComplete,
}) => {
  const [internalValue, setInternalValue] = React.useState(value);

  React.useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyUp?.(event);
  };

  const displayValue = internalValue || '';
  const currentLength = displayValue.length;
  const showError = hasError || (errorMessage && errorMessage.length > 0);

  return (
    <InputContainer
      fullWidth={fullWidth}
      labelPosition={labelPosition}
      noMarginTop={noMarginTop}
      noMarginBottom={noMarginBottom}
      className={className}
    >
      {label && (
        <Label
          htmlFor={id}
          size={labelSize}
          required={!!required}
          disabled={!!disabled}
          error={!!showError}
          position={labelPosition}
        >
          {required && <span className="required-asterisk">*</span>}
          {icon && <span className="icon">{icon}</span>}
          {label}
        </Label>
      )}
      
      <InputWrapper
        fullWidth={!!fullWidth}
        hasError={!!showError}
        disabled={!!disabled}
        grayWhenDisabled={!!grayWhenDisabled}
        hasPrefix={!!(prefix || currencySymbol)}
        hasSuffix={!!(suffix || (showCounter && counterPosition === 'inline'))}
      >
        <input
          id={id}
          name={name}
          type={type}
          inputMode={inputMode}
          value={displayValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          min={min}
          max={max}
          autoComplete={autoComplete}
          className="input-field"
        />
        
        {(prefix || currencySymbol) && (
          <PrefixSuffix position="prefix">
            {currencySymbol || prefix}
          </PrefixSuffix>
        )}
        
        {suffix && (
          <PrefixSuffix position="suffix">
            {suffix}
          </PrefixSuffix>
        )}
        
        {showCounter && counterPosition === 'inline' && maxLength && (
          <Counter position="inline">
            {currentLength}/{maxLength}
          </Counter>
        )}
      </InputWrapper>
      
      {showCounter && counterPosition === 'bottom' && maxLength && (
        <Counter position="bottom">
          {currentLength}/{maxLength}
        </Counter>
      )}
      
      {hint && !showError && (
        <Hint>{hint}</Hint>
      )}
      
      {showError && errorMessage && (
        <Error>{errorMessage}</Error>
      )}
    </InputContainer>
  );
};
