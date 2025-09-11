import React from 'react';
import styled from 'styled-components';

export interface FSPContainerProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large' | 'xlarge';
  maxWidth?: string;
  fullWidth?: boolean;
  centered?: boolean;
  background?: 'white' | 'gray3' | 'gray4' | 'gray5' | 'light-blue';
}

const Container = styled.div<{
  padding?: string;
  maxWidth?: string;
  fullWidth?: boolean;
  centered?: boolean;
  background?: string;
}>`
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  max-width: ${props => props.maxWidth || 'none'};
  margin: ${props => props.centered ? '0 auto' : '0'};
  padding: ${props => {
    switch (props.padding) {
      case 'none': return '0';
      case 'small': return '10px';
      case 'medium': return '20px';
      case 'large': return '30px';
      case 'xlarge': return '40px';
      default: return '20px';
    }
  }};
  background-color: ${props => {
    switch (props.background) {
      case 'white': return 'var(--white, #ffffff)';
      case 'gray3': return 'var(--gray3, #d9d9d9)';
      case 'gray4': return 'var(--gray4, #f0f0f0)';
      case 'gray5': return 'var(--gray5, #fafafa)';
      case 'light-blue': return 'var(--lightBlue, #E7F1FA)';
      default: return 'transparent';
    }
  }};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  @media (max-width: 599px) {
    padding: ${props => {
      switch (props.padding) {
        case 'none': return '0';
        case 'small': return '8px';
        case 'medium': return '16px';
        case 'large': return '24px';
        case 'xlarge': return '32px';
        default: return '16px';
      }
    }};
  }
`;

export const FSPContainer: React.FC<FSPContainerProps> = ({
  children,
  className,
  padding = 'medium',
  maxWidth,
  fullWidth = false,
  centered = false,
  background
}) => {
  return (
    <Container
      className={className}
      padding={padding}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      centered={centered}
      background={background}
    >
      {children}
    </Container>
  );
};
