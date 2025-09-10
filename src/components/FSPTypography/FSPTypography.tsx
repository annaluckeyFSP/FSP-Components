import React from 'react';
import styled from 'styled-components';

export interface FSPTypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'secondary' | 'caption' | 'error' | 'hint';
  color?: 'black' | 'gray1' | 'gray2' | 'blue' | 'red' | 'green' | 'orange' | 'white';
  weight?: 'normal' | 'bold';
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  underline?: boolean;
  noMargin?: boolean;
}

const getTypographyStyles = (variant: FSPTypographyProps['variant']) => {
  const baseStyles = `
    font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
    margin: 0;
    letter-spacing: normal;
  `;

  const variantStyles = {
    h1: `
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
      @media (max-width: 599px) {
        font-size: 20px;
        line-height: 24px;
      }
    `,
    h2: `
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
      @media (max-width: 599px) {
        font-size: 18px;
        line-height: 21px;
      }
    `,
    h3: `
      font-size: 18px;
      line-height: 21px;
      font-weight: 400;
      @media (max-width: 599px) {
        font-size: 16px;
        line-height: 19px;
      }
    `,
    h4: `
      font-size: 16px;
      line-height: 19px;
      font-weight: 400;
      @media (max-width: 599px) {
        font-size: 14px;
        line-height: 16px;
      }
    `,
    h5: `
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    `,
    body: `
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
    `,
    secondary: `
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    `,
    caption: `
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    `,
    error: `
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    `,
    hint: `
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    `
  };

  return `
    ${baseStyles}
    ${variantStyles[variant || 'body']}
  `;
};

const getColorStyles = (color: FSPTypographyProps['color']) => {
  const colorMap = {
    black: 'var(--black, #000000)',
    gray1: 'var(--gray1, #595959)',
    gray2: 'var(--gray2, #919191)',
    blue: 'var(--blue, #1374c9)',
    red: 'var(--red, #d72919)',
    green: 'var(--green, #1f8446)',
    orange: 'var(--orange, #dc7418)',
    white: 'var(--white, #ffffff)'
  };

  return `color: ${colorMap[color || 'black']};`;
};

const StyledTypography = styled.div<FSPTypographyProps>`
  ${({ variant }) => getTypographyStyles(variant)}
  ${({ color }) => getColorStyles(color)}
  ${({ weight }) => weight === 'bold' && 'font-weight: bold;'}
  ${({ align }) => align && `text-align: ${align};`}
  ${({ underline }) => underline && 'text-decoration: underline;'}
  ${({ noMargin }) => noMargin && 'margin: 0 !important;'}
  
  /* Link styles for blue text */
  ${({ color, variant }) => color === 'blue' && variant !== 'h1' && variant !== 'h2' && variant !== 'h3' && variant !== 'h4' && variant !== 'h5' && `
    cursor: pointer;
    
    &:hover {
      text-decoration: none;
    }
  `}
`;

export const FSPTypography: React.FC<FSPTypographyProps> = ({
  variant = 'body',
  color = 'black',
  weight = 'normal',
  align,
  children,
  className,
  as,
  underline = false,
  noMargin = false,
  ...props
}) => {
  const Component = as || (variant?.startsWith('h') ? variant : 'div') as keyof JSX.IntrinsicElements;

  return (
    <StyledTypography
      as={Component}
      variant={variant}
      color={color}
      weight={weight}
      align={align}
      underline={underline}
      noMargin={noMargin}
      className={className}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};
