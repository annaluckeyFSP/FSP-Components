import React from 'react';
import styled from 'styled-components';

export interface FSPCardProps {
  variant?: 'default' | 'white' | 'primary' | 'danger' | 'warning';
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  noMargin?: boolean;
  isEditing?: boolean;
  dynamicHeight?: boolean;
  onClick?: () => void;
}

export interface FSPCardHeaderProps {
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'border' | 'primary' | 'danger' | 'warning';
  isEditing?: boolean;
  dynamicHeight?: boolean;
}

export interface FSPCardContentProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  gridLayout?: boolean;
}

const getCardStyles = (variant: FSPCardProps['variant']) => {
  const baseStyles = `
    background-color: var(--gray5, #fafafa);
    margin-bottom: 20px;
    font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
    border-radius: 2px;
    overflow: hidden;
  `;

  const variantStyles = {
    default: `
      background-color: var(--gray5, #fafafa);
    `,
    white: `
      background-color: var(--white, #ffffff);
    `,
    primary: `
      background-color: var(--gray5, #fafafa);
      border-left: 4px solid var(--blue, #1374c9);
      border-top-left-radius: 4px;
    `,
    danger: `
      background-color: var(--gray5, #fafafa);
      border-left: 4px solid var(--red, #d72919);
      border-top-left-radius: 4px;
    `,
    warning: `
      background-color: var(--gray5, #fafafa);
      border-left: 4px solid var(--orange, #dc7418);
      border-top-left-radius: 4px;
    `
  };

  return `
    ${baseStyles}
    ${variantStyles[variant || 'default']}
  `;
};

const StyledCard = styled.div<FSPCardProps>`
  ${({ variant }) => getCardStyles(variant)}
  ${({ noMargin }) => noMargin && 'margin-bottom: 0;'}
  ${({ onClick }) => onClick && 'cursor: pointer;'}
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const CardHeader = styled.div<FSPCardHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--gray4, #f5f5f5);
  color: var(--black, #000000);
  padding: 10px 20px;
  height: 35px;
  font-size: 18px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  border-bottom: 1px solid var(--borderGray, #d8d8d8);
  
  ${props => props.variant === 'border' && `
    border-left: 4px solid var(--blue, #1374c9);
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  `}
  
  ${props => props.variant === 'primary' && `
    border-left: 4px solid var(--blue, #1374c9);
    border-top-left-radius: 4px;
  `}
  
  ${props => props.variant === 'danger' && `
    border-left: 4px solid var(--red, #d72919);
    border-top-left-radius: 4px;
  `}
  
  ${props => props.variant === 'warning' && `
    border-left: 4px solid var(--orange, #dc7418);
    border-top-left-radius: 4px;
  `}
  
  ${props => props.isEditing && `
    border-top-left-radius: 3px;
    border-left: 4px solid var(--blue, #1374c9);
  `}
  
  ${props => props.dynamicHeight && `
    height: auto;
    min-height: 45px;
  `}
  
  a {
    text-decoration: none !important;
    
    &:hover {
      text-decoration: underline !important;
    }
  }
  
  @media (max-width: 599px) {
    font-size: 16px;
    
    &:not(.not-stacked) {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: 5px;
      height: auto;
    }
  }
`;

const CardContent = styled.div<FSPCardContentProps>`
  padding: ${props => props.noPadding ? '0' : '20px'};
  background-color: inherit;
  
  ${props => props.gridLayout && `
    display: grid;
    gap: 0 20px;
    grid-template-columns: auto auto;
    justify-content: start;
    
    .card-detail-value {
      font-weight: bold;
    }
  `}
  
  h3 {
    margin-bottom: 10px !important;
  }
  
  p {
    font-size: 14px;
    line-height: 16px;
  }
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

const InfoIcon = styled.span`
  margin-left: 10px;
  cursor: pointer;
  color: var(--blue, #1374c9);
  font-size: 16px;
  position: relative;
`;

export const FSPCard: React.FC<FSPCardProps> = ({
  variant = 'default',
  header,
  children,
  className,
  noPadding = false,
  noMargin = false,
  isEditing = false,
  dynamicHeight = false,
  onClick,
  ...props
}) => {
  return (
    <StyledCard
      variant={variant}
      className={className}
      noMargin={noMargin}
      onClick={onClick}
      {...props}
    >
      {header && (
        <CardHeader
          variant={variant}
          isEditing={isEditing}
          dynamicHeight={dynamicHeight}
        >
          {header}
        </CardHeader>
      )}
      <CardContent noPadding={noPadding}>
        {children}
      </CardContent>
    </StyledCard>
  );
};

export const FSPCardHeader: React.FC<FSPCardHeaderProps> = ({
  children,
  actions,
  className,
  variant = 'default',
  isEditing = false,
  dynamicHeight = false,
}) => {
  return (
    <CardHeader
      className={className}
      variant={variant}
      isEditing={isEditing}
      dynamicHeight={dynamicHeight}
    >
      {children}
      {actions && <CardActions>{actions}</CardActions>}
    </CardHeader>
  );
};

export const FSPCardContent: React.FC<FSPCardContentProps> = ({
  children,
  className,
  noPadding = false,
  gridLayout = false,
}) => {
  return (
    <CardContent
      className={className}
      noPadding={noPadding}
      gridLayout={gridLayout}
    >
      {children}
    </CardContent>
  );
};

export const FSPCardInfo: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <CardContent className={className}>
      {children}
    </CardContent>
  );
};

export const FSPCardLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={className} style={{ marginBottom: '3px' }}>
      {children}
    </div>
  );
};

export { InfoIcon };
