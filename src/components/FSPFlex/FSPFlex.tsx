import React from 'react';
import styled from 'styled-components';

export interface FSPFlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number | string;
  alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  fullWidth?: boolean;
  fullHeight?: boolean;
  inline?: boolean;
  responsive?: boolean;
  mobileDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  tabletDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

const Flex = styled.div<{
  direction?: string;
  wrap?: string;
  gap?: number | string;
  alignItems?: string;
  justifyContent?: string;
  alignContent?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  inline?: boolean;
  responsive?: boolean;
  mobileDirection?: string;
  tabletDirection?: string;
}>`
  display: ${props => props.inline ? 'inline-flex' : 'flex'};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  height: ${props => props.fullHeight ? '100%' : 'auto'};
  
  /* Gap */
  ${props => props.gap && `
    gap: ${typeof props.gap === 'number' ? `${props.gap}px` : props.gap};
  `}
  
  /* Alignment */
  ${props => props.alignItems && `
    align-items: ${props.alignItems};
  `}
  
  ${props => props.justifyContent && `
    justify-content: ${props.justifyContent};
  `}
  
  ${props => props.alignContent && `
    align-content: ${props.alignContent};
  `}
  
  /* Responsive breakpoints */
  ${props => props.responsive && `
    @media (max-width: 991px) {
      flex-direction: ${props.tabletDirection || props.direction || 'row'};
    }
    
    @media (max-width: 599px) {
      flex-direction: ${props.mobileDirection || 'column'};
    }
  `}
`;

export const FSPFlex: React.FC<FSPFlexProps> = ({
  children,
  className,
  direction = 'row',
  wrap = 'nowrap',
  gap,
  alignItems,
  justifyContent,
  alignContent,
  fullWidth = false,
  fullHeight = false,
  inline = false,
  responsive = false,
  mobileDirection,
  tabletDirection
}) => {
  return (
    <Flex
      className={className}
      direction={direction}
      wrap={wrap}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      alignContent={alignContent}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      inline={inline}
      responsive={responsive}
      mobileDirection={mobileDirection}
      tabletDirection={tabletDirection}
    >
      {children}
    </Flex>
  );
};
