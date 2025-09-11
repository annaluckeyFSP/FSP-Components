import React from 'react';
import styled from 'styled-components';

export interface FSPGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: number | string;
  rows?: number | string;
  gap?: number | string;
  columnGap?: number | string;
  rowGap?: number | string;
  templateColumns?: string;
  templateRows?: string;
  templateAreas?: string;
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
  fullWidth?: boolean;
  responsive?: boolean;
  mobileColumns?: number | string;
  tabletColumns?: number | string;
}

const Grid = styled.div<{
  columns?: number | string;
  rows?: number | string;
  gap?: number | string;
  columnGap?: number | string;
  rowGap?: number | string;
  templateColumns?: string;
  templateRows?: string;
  templateAreas?: string;
  autoFlow?: string;
  alignItems?: string;
  justifyItems?: string;
  alignContent?: string;
  justifyContent?: string;
  fullWidth?: boolean;
  responsive?: boolean;
  mobileColumns?: number | string;
  tabletColumns?: number | string;
}>`
  display: grid;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  /* Grid template */
  grid-template-columns: ${props => {
    if (props.templateColumns) return props.templateColumns;
    if (props.columns) {
      if (typeof props.columns === 'number') {
        return `repeat(${props.columns}, 1fr)`;
      }
      return props.columns;
    }
    return '1fr';
  }};
  
  grid-template-rows: ${props => {
    if (props.templateRows) return props.templateRows;
    if (props.rows) {
      if (typeof props.rows === 'number') {
        return `repeat(${props.rows}, 1fr)`;
      }
      return props.rows;
    }
    return 'auto';
  }};
  
  ${props => props.templateAreas && `
    grid-template-areas: ${props.templateAreas};
  `}
  
  /* Gap */
  gap: ${props => {
    if (props.gap) {
      return typeof props.gap === 'number' ? `${props.gap}px` : props.gap;
    }
    return '0';
  }};
  
  ${props => props.columnGap && `
    column-gap: ${typeof props.columnGap === 'number' ? `${props.columnGap}px` : props.columnGap};
  `}
  
  ${props => props.rowGap && `
    row-gap: ${typeof props.rowGap === 'number' ? `${props.rowGap}px` : props.rowGap};
  `}
  
  /* Auto flow */
  ${props => props.autoFlow && `
    grid-auto-flow: ${props.autoFlow};
  `}
  
  /* Alignment */
  ${props => props.alignItems && `
    align-items: ${props.alignItems};
  `}
  
  ${props => props.justifyItems && `
    justify-items: ${props.justifyItems};
  `}
  
  ${props => props.alignContent && `
    align-content: ${props.alignContent};
  `}
  
  ${props => props.justifyContent && `
    justify-content: ${props.justifyContent};
  `}
  
  /* Responsive breakpoints */
  ${props => props.responsive && `
    @media (max-width: 991px) {
      grid-template-columns: ${props.tabletColumns ? 
        (typeof props.tabletColumns === 'number' ? `repeat(${props.tabletColumns}, 1fr)` : props.tabletColumns) :
        '1fr'
      };
    }
    
    @media (max-width: 599px) {
      grid-template-columns: ${props.mobileColumns ? 
        (typeof props.mobileColumns === 'number' ? `repeat(${props.mobileColumns}, 1fr)` : props.mobileColumns) :
        '1fr'
      };
    }
  `}
`;

export const FSPGrid: React.FC<FSPGridProps> = ({
  children,
  className,
  columns,
  rows,
  gap,
  columnGap,
  rowGap,
  templateColumns,
  templateRows,
  templateAreas,
  autoFlow,
  alignItems,
  justifyItems,
  alignContent,
  justifyContent,
  fullWidth = false,
  responsive = false,
  mobileColumns,
  tabletColumns
}) => {
  return (
    <Grid
      className={className}
      columns={columns}
      rows={rows}
      gap={gap}
      columnGap={columnGap}
      rowGap={rowGap}
      templateColumns={templateColumns}
      templateRows={templateRows}
      templateAreas={templateAreas}
      autoFlow={autoFlow}
      alignItems={alignItems}
      justifyItems={justifyItems}
      alignContent={alignContent}
      justifyContent={justifyContent}
      fullWidth={fullWidth}
      responsive={responsive}
      mobileColumns={mobileColumns}
      tabletColumns={tabletColumns}
    >
      {children}
    </Grid>
  );
};
