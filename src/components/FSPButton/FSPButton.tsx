import React from 'react';
import styled from 'styled-components';

export interface FSPButtonProps {
  variant?: 'primary' | 'secondary' | 'red' | 'green' | 'white';
  size?: 'default' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  fullWidthOnMobile?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  'data-cy'?: string;
}

const StyledButton = styled.button<FSPButtonProps>`
  font-family: var(--mainFont, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  font-size: 14px;
  font-weight: 400;
  height: ${props => props.size === 'large' ? '45px' : '31px'};
  line-height: ${props => props.size === 'large' ? '19px' : 'normal'};
  padding: 0 20px;
  border: 2px solid transparent;
  border-radius: 2px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: var(--gray2, #f5f5f5);
  }
  
  /* Primary variant */
  ${props => props.variant === 'primary' && `
    background-color: var(--blue, #1376CD);
    color: var(--white, #ffffff);
    
    &:hover:not(:disabled) {
      background-color: var(--darkBlue, #0d5ba3);
    }
    
    &:disabled {
      opacity: 0.25;
    }
  `}
  
  /* Secondary variant (default) */
  ${props => (!props.variant || props.variant === 'secondary') && `
    background-color: var(--gray3, #e5e5e5);
    color: var(--black, #000000);
  `}
  
  /* Red variant */
  ${props => props.variant === 'red' && `
    background-color: var(--red, #D72919);
    color: var(--white, #ffffff);
    
    &:hover:not(:disabled),
    &:active {
      background-color: var(--darkRed, #b01e12);
    }
    
    &:active {
      border: 2px solid var(--red, #D72919);
    }
    
    &:disabled {
      opacity: 0.25;
      color: var(--white, #ffffff);
      background-color: var(--red, #D72919);
    }
  `}
  
  /* Green variant */
  ${props => props.variant === 'green' && `
    background-color: var(--green, #1F8446);
    color: var(--white, #ffffff);
    
    &:hover:not(:disabled),
    &:active {
      background-color: var(--darkGreen, #155d32);
    }
    
    &:active {
      border: 2px solid var(--green, #1F8446);
    }
    
    &:disabled {
      opacity: 0.25;
      color: var(--white, #ffffff);
      background-color: var(--green, #1F8446);
    }
  `}
  
  /* White variant */
  ${props => props.variant === 'white' && `
    background-color: var(--white, #ffffff);
    border: 1px solid var(--blue, #1376CD);
    color: var(--blue, #1376CD);
    
    &:hover:not(:disabled),
    &:active {
      background-color: var(--lightBlue, #e6f2ff);
    }
    
    &:active {
      border: 2px solid var(--blue, #1376CD);
    }
    
    &:disabled {
      opacity: 0.25;
      color: var(--blue, #1376CD);
      background-color: var(--white, #ffffff);
    }
  `}
  
  /* Large size */
  ${props => props.size === 'large' && `
    font-size: 16px;
  `}
  
  /* Mobile full width */
  @media (max-width: 667px) {
    ${props => props.fullWidthOnMobile && `
      width: 100%;
    `}
  }
`;

const ButtonContent = styled.span<{ loading?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  opacity: ${props => props.loading ? 0 : 1};
  transition: opacity 0.2s ease;
`;

const LoadingSpinner = styled.div<{ size?: 'default' | 'large' }>`
  width: ${props => props.size === 'large' ? '30px' : '18px'};
  height: ${props => props.size === 'large' ? '30px' : '18px'};
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const FSPButton: React.FC<FSPButtonProps> = ({
  variant = 'secondary',
  size = 'default',
  disabled = false,
  loading = false,
  fullWidth = false,
  fullWidthOnMobile = false,
  children,
  onClick,
  type = 'button',
  className,
  'data-cy': dataCy = 'fsp-button',
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      fullWidthOnMobile={fullWidthOnMobile}
      onClick={onClick}
      type={type}
      className={className}
      data-cy={dataCy}
      {...props}
    >
      <ButtonContent loading={loading}>
        {children}
      </ButtonContent>
      {loading && (
        <LoadingSpinner size={size} />
      )}
    </StyledButton>
  );
};
