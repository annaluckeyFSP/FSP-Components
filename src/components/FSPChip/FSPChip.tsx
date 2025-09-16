import React from 'react';
import styled from 'styled-components';

export interface FSPChipProps {
  variant?: 'blue' | 'green' | 'red' | 'gray' | 'dark-gray' | 'orange' | 'light-orange' | 'gray-text' | 'transparent' | 'flat';
  shape?: 'round' | 'square';
  size?: 'small' | 'medium';
  removable?: boolean;
  children: React.ReactNode;
  className?: string;
  onRemove?: () => void;
  onClick?: () => void;
  icon?: React.ReactNode;
  count?: number;
}

const getChipStyles = (variant: FSPChipProps['variant'], shape: FSPChipProps['shape'], size: FSPChipProps['size']) => {
  const baseStyles = `
    display: inline-block;
    height: ${size === 'small' ? '20px' : '24px'};
    line-height: ${size === 'small' ? '20px' : '24px'};
    max-width: 96%;
    padding: 0 ${size === 'small' ? '10px' : '12px'};
    font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
    font-size: ${size === 'small' ? '12px' : '14px'};
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    border: none;
    outline: none;
    cursor: ${variant === 'transparent' ? 'default' : 'pointer'};
    transition: all 0.2s ease;
  `;

  const shapeStyles = {
    round: 'border-radius: 10px;',
    square: 'border-radius: 3px;'
  };

  const variantStyles = {
    blue: `
      background-color: var(--blue, #1374c9);
      color: var(--white, #ffffff);
      font-weight: 500;
    `,
    green: `
      background-color: var(--green, #1f8446);
      color: var(--white, #ffffff);
    `,
    red: `
      background-color: var(--red, #d72919);
      color: var(--white, #ffffff);
    `,
    gray: `
      color: var(--black, #000000);
      background-color: var(--gray3, #e5e5e5);
    `,
    'dark-gray': `
      color: var(--white, #ffffff);
      background-color: var(--gray1, #595959);
    `,
    orange: `
      color: var(--white, #ffffff);
      background-color: var(--orange, #dc7418);
    `,
    'light-orange': `
      background-color: var(--lightOrange, #fbf1e7);
      color: var(--black, #000000);
    `,
    'gray-text': `
      color: var(--gray1, #595959);
      background-color: var(--gray3, #e5e5e5);
    `,
    transparent: `
      background-color: transparent;
      padding: 0;
      cursor: default;
    `,
    flat: `
      background-color: var(--white, #ffffff);
      border: 1px solid var(--gray1, #595959);
      color: var(--gray1, #595959);
      font-size: 14px;
      font-weight: normal;
    `
  };

  return `
    ${baseStyles}
    ${shapeStyles[shape || 'square']}
    ${variantStyles[variant || 'gray']}
  `;
};

const StyledChip = styled.span.withConfig({
  shouldForwardProp: (prop) => !['variant', 'shape', 'size', 'disabled', 'removable', 'count'].includes(prop),
})<FSPChipProps>`
  ${({ variant, shape, size }) => getChipStyles(variant, shape, size)}
  
  &:hover:not(.transparent) {
    opacity: 0.8;
  }
  
  /* Flat variant specific styles */
  ${props => props.variant === 'flat' && `
    &.green {
      border-color: var(--green, #1f8446);
      color: var(--green, #1f8446);
    }
    
    &.red {
      border-color: var(--red, #d72919);
      color: var(--red, #d72919);
    }
  `}
`;

const ChipContent = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RemoveButton = styled.button.withConfig({
  shouldForwardProp: () => true,
})`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  margin-left: 5px;
  padding: 0;
  font-size: 12px;
  opacity: 0.7;
  
  &:hover {
    opacity: 1;
  }
`;

const Count = styled.span`
  font-weight: bold;
  margin-left: 10px;
`;

export const FSPChip: React.FC<FSPChipProps> = ({
  variant = 'gray',
  shape = 'square',
  size = 'medium',
  removable = false,
  children,
  className,
  onRemove,
  onClick,
  icon,
  count,
  ...props
}) => {
  const handleClick = () => {
    onClick?.();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <StyledChip
      variant={variant}
      shape={shape}
      size={size}
      className={`${className || ''} ${variant === 'transparent' ? 'transparent' : ''}`}
      onClick={handleClick}
      {...props}
    >
      <ChipContent>
        {icon && <span>{icon}</span>}
        {children}
        {count !== undefined && <Count>{count}</Count>}
        {removable && (
          <RemoveButton onClick={handleRemove} type="button">
            ×
          </RemoveButton>
        )}
      </ChipContent>
    </StyledChip>
  );
};

// Specialized chip components
export const StatusChip: React.FC<Omit<FSPChipProps, 'variant' | 'shape'>> = (props) => (
  <FSPChip {...props} variant="blue" shape="round" />
);

export const CountChip: React.FC<Omit<FSPChipProps, 'variant' | 'shape' | 'count'> & { count: number }> = (props) => (
  <FSPChip {...props} variant="gray" shape="square" />
);

export const WeatherChip: React.FC<Omit<FSPChipProps, 'variant' | 'shape'> & { 
  weatherType: 'vfr' | 'mvfr' | 'ifr' | 'lifr' 
}> = ({ weatherType, children, ...props }) => {
  const weatherVariants = {
    vfr: { variant: 'green' as const, shape: 'round' as const },
    mvfr: { variant: 'blue' as const, shape: 'round' as const },
    ifr: { variant: 'red' as const, shape: 'round' as const },
    lifr: { variant: 'gray' as const, shape: 'round' as const }
  };

  return (
    <FSPChip
      {...props}
      {...weatherVariants[weatherType]}
    >
      {children}
    </FSPChip>
  );
};
