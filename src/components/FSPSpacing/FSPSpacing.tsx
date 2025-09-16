import React from 'react';
import styled from 'styled-components';

export interface FSPSpacingProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  margin?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  padding?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  gap?: number | string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'none';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

const SpacingWrapper = styled.div<{
  margin?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  padding?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  gap?: number | string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
}>`
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  height: ${props => props.fullHeight ? '100%' : 'auto'};
  display: ${props => props.display || 'block'};
  
  /* Margin */
  ${props => props.margin !== undefined && `
    margin: ${typeof props.margin === 'number' ? `${props.margin}px` : props.margin};
  `}
  
  ${props => props.marginTop !== undefined && `
    margin-top: ${typeof props.marginTop === 'number' ? `${props.marginTop}px` : props.marginTop};
  `}
  
  ${props => props.marginRight !== undefined && `
    margin-right: ${typeof props.marginRight === 'number' ? `${props.marginRight}px` : props.marginRight};
  `}
  
  ${props => props.marginBottom !== undefined && `
    margin-bottom: ${typeof props.marginBottom === 'number' ? `${props.marginBottom}px` : props.marginBottom};
  `}
  
  ${props => props.marginLeft !== undefined && `
    margin-left: ${typeof props.marginLeft === 'number' ? `${props.marginLeft}px` : props.marginLeft};
  `}
  
  /* Padding */
  ${props => props.padding !== undefined && `
    padding: ${typeof props.padding === 'number' ? `${props.padding}px` : props.padding};
  `}
  
  ${props => props.paddingTop !== undefined && `
    padding-top: ${typeof props.paddingTop === 'number' ? `${props.paddingTop}px` : props.paddingTop};
  `}
  
  ${props => props.paddingRight !== undefined && `
    padding-right: ${typeof props.paddingRight === 'number' ? `${props.paddingRight}px` : props.paddingRight};
  `}
  
  ${props => props.paddingBottom !== undefined && `
    padding-bottom: ${typeof props.paddingBottom === 'number' ? `${props.paddingBottom}px` : props.paddingBottom};
  `}
  
  ${props => props.paddingLeft !== undefined && `
    padding-left: ${typeof props.paddingLeft === 'number' ? `${props.paddingLeft}px` : props.paddingLeft};
  `}
  
  /* Gap */
  ${props => props.gap !== undefined && `
    gap: ${typeof props.gap === 'number' ? `${props.gap}px` : props.gap};
  `}
  
  /* Flex properties */
  ${props => props.flexDirection && `
    flex-direction: ${props.flexDirection};
  `}
  
  ${props => props.justifyContent && `
    justify-content: ${props.justifyContent};
  `}
  
  ${props => props.alignItems && `
    align-items: ${props.alignItems};
  `}
`;

export const FSPSpacing: React.FC<FSPSpacingProps> = ({
  children,
  className,
  style,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  gap,
  fullWidth = false,
  fullHeight = false,
  display,
  flexDirection,
  justifyContent,
  alignItems
}) => {
  return (
    <SpacingWrapper
      className={className}
      style={style}
      margin={margin}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      padding={padding}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      gap={gap}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </SpacingWrapper>
  );
};

// Utility classes for common spacing patterns
export const spacingUtilities = {
  // Margin utilities
  m0: { margin: 0 },
  m5: { margin: 5 },
  m10: { margin: 10 },
  m15: { margin: 15 },
  m20: { margin: 20 },
  m25: { margin: 25 },
  m30: { margin: 30 },
  m35: { margin: 35 },
  m40: { margin: 40 },
  
  // Padding utilities
  p0: { padding: 0 },
  p5: { padding: 5 },
  p10: { padding: 10 },
  p15: { padding: 15 },
  p20: { padding: 20 },
  p25: { padding: 25 },
  p30: { padding: 30 },
  p35: { padding: 35 },
  p40: { padding: 40 },
  
  // Gap utilities
  gap0: { gap: 0 },
  gap5: { gap: 5 },
  gap10: { gap: 10 },
  gap15: { gap: 15 },
  gap20: { gap: 20 },
  gap25: { gap: 25 },
  gap30: { gap: 30 },
  gap35: { gap: 35 },
  gap40: { gap: 40 },
};
