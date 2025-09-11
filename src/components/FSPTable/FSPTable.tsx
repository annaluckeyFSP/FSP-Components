import React from 'react';
import styled from 'styled-components';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  width?: string;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface FSPTableProps {
  columns: TableColumn[];
  data: any[];
  loading?: boolean;
  emptyText?: string;
  emptyIcon?: React.ReactNode;
  striped?: boolean;
  tight?: boolean;
  contentTopAligned?: boolean;
  clickableRows?: boolean;
  noBorderBottom?: boolean;
  className?: string;
  onRowClick?: (row: any, index: number) => void;
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
  // Responsive options
  responsive?: boolean;
  mobileLayout?: 'two-column' | 'stacked';
  mobileBreakpoint?: number;
}

const TableContainer = styled.div<{ noTopMargin?: boolean; noBottomMargin?: boolean }>`
  width: 100%;
  margin-top: ${props => props.noTopMargin ? '0' : '10px'};
  margin-bottom: ${props => props.noBottomMargin ? '0' : '15px'};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`;

const StyledTable = styled.table<{
  striped?: boolean;
  tight?: boolean;
  contentTopAligned?: boolean;
  clickableRows?: boolean;
  responsive?: boolean;
  breakpoint?: number;
}>`
  width: 100%;
  border-collapse: collapse;
  
  ${props => props.responsive && `
    @media (max-width: ${props.breakpoint || 768}px) {
      display: none;
    }
  `}
  
  ${props => props.tight && `
    td {
      padding: 10px 20px;
    }
  `}
  
  ${props => props.contentTopAligned && `
    td {
      vertical-align: top;
    }
  `}
  
  ${props => props.striped && `
    tr:nth-child(even) td {
      background: var(--gray5, #fafafa);
    }
  `}
`;

const TableHeader = styled.th<{ sortable?: boolean; align?: string; width?: string }>`
  color: var(--black, #000000);
  background-color: var(--lightBlue, #e7f1fa);
  padding: 10px 20px;
  text-align: ${props => props.align || 'left'};
  width: ${props => props.width || 'auto'};
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid var(--gray3, #e5e5e5);
  
  ${props => props.sortable && `
    cursor: pointer;
    user-select: none;
    
    &:hover {
      background-color: var(--lightBlue2, #cce4f7);
    }
  `}
`;

const TableRow = styled.tr<{ clickable?: boolean; noBorderBottom?: boolean }>`
  border-bottom: ${props => props.noBorderBottom ? 'none' : '1px solid var(--gray3, #e5e5e5)'};
  
  ${props => props.clickable && `
    cursor: pointer;
    
    &:hover {
      background-color: var(--gray4, #f5f5f5);
    }
  `}
`;

const TableCell = styled.td<{ align?: string }>`
  padding: 15px 20px;
  color: var(--black, #000000);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  font-size: 14px;
  line-height: normal;
  text-align: ${props => props.align || 'left'};
  
  a {
    color: var(--blue, #1374c9);
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
    
    &.isSelected {
      text-decoration: underline !important;
    }
  }
  
  b {
    background-color: var(--yellow, #fffba3);
    font-weight: bold;
  }
  
  .warning {
    color: var(--orange, #dc7418);
    font-weight: bold;
  }
  
  .expired,
  .misconfigured,
  .error {
    color: var(--red, #d72919);
    font-weight: bold;
  }
`;

const EmptyState = styled.div<{ withIcon?: boolean }>`
  display: ${props => props.withIcon ? 'grid' : 'block'};
  grid-auto-flow: ${props => props.withIcon ? 'column' : 'initial'};
  gap: ${props => props.withIcon ? '15px' : '0'};
  justify-content: ${props => props.withIcon ? 'start' : 'initial'};
  align-items: ${props => props.withIcon ? 'center' : 'initial'};
  color: var(--gray1, #595959);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  font-size: 14px;
  padding: 0 20px 15px 20px;
  margin-top: 15px;
  
  .big-icon {
    font-size: 50px;
    color: var(--gray3, #e5e5e5);
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: var(--blue, #1374c9);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  font-size: 14px;
`;

// Responsive table components
const ResponsiveTable = styled.div<{ mobileLayout?: string; breakpoint?: number }>`
  display: none;
  
  @media (max-width: ${props => props.breakpoint || 768}px) {
    display: block;
  }
`;

const MobileTableContainer = styled.div<{ mobileLayout?: string }>`
  ${props => props.mobileLayout === 'two-column' && `
    .mobile-table-row {
      display: grid;
      grid-template-columns: 120px 1fr;
      gap: 20px;
      align-items: start;
      
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  `}
  
  ${props => props.mobileLayout === 'stacked' && `
    .mobile-table-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0;
      align-items: start;
      
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  `}
`;

const MobileTableRow = styled.div`
  display: grid;
  align-items: start;
  
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const MobileTableItem = styled.div`
  border-bottom: 1px solid var(--gray3, #e5e5e5);
  padding: 15px 20px;
  
  &:first-of-type {
    border-top: 1px solid var(--gray3, #e5e5e5);
    margin-top: 15px;
  }
`;

const MobileLabel = styled.label`
  font-size: 12px;
  line-height: 16px;
  color: var(--gray1, #595959);
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
`;

const MobileValue = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: var(--black, #000000);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  word-wrap: break-word;
  
  a {
    color: var(--blue, #1374c9);
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
  
  b {
    background-color: var(--yellow, #fffba3);
    font-weight: bold;
  }
  
  .warning {
    color: var(--orange, #dc7418);
    font-weight: bold;
  }
  
  .expired,
  .misconfigured,
  .error {
    color: var(--red, #d72919);
    font-weight: bold;
  }
`;

const StatusBox = styled.div<{ status: 'green' | 'gray' | 'light-green' | 'light-gray' | 'light-orange' | 'orange' }>`
  border-radius: 3px;
  color: var(--white, #ffffff);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  line-height: 36px;
  text-align: center;
  text-transform: capitalize;
  width: 36px;
  display: inline-block;
  
  ${props => props.status === 'green' && `
    background-color: var(--green, #1f8446);
  `}
  
  ${props => props.status === 'gray' && `
    background-color: var(--gray1, #595959);
  `}
  
  ${props => props.status === 'light-green' && `
    background-color: var(--lightGreen, #e8f2ec);
    color: var(--green, #1f8446);
    border: 1px solid var(--green, #1f8446);
    
    &:hover {
      background-color: var(--lightGreen2, #c0e4cf);
    }
  `}
  
  ${props => props.status === 'light-gray' && `
    background-color: var(--gray3, #e5e5e5);
    color: var(--gray1, #595959);
    border: 1px solid var(--gray1, #595959);
    
    &:hover {
      background-color: var(--gray2, #919191);
    }
  `}
  
  ${props => props.status === 'light-orange' && `
    background-color: var(--lightOrange, #fbf1e7);
    color: var(--orange, #dc7418);
    border: 1px solid var(--orange, #dc7418);
    
    &:hover {
      background-color: var(--lightOrange2, #f3ceae);
    }
  `}
  
  ${props => props.status === 'orange' && `
    background-color: var(--orange, #dc7418);
  `}
`;

export const FSPTable: React.FC<FSPTableProps> = ({
  columns,
  data,
  loading = false,
  emptyText,
  emptyIcon,
  striped = false,
  tight = false,
  contentTopAligned = false,
  clickableRows = false,
  noBorderBottom = false,
  className,
  onRowClick,
  onSort,
  responsive = false,
  mobileLayout = 'two-column',
  mobileBreakpoint = 768,
}) => {
  const [sortColumn, setSortColumn] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

  const handleSort = (column: string) => {
    const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newDirection);
    onSort?.(column, newDirection);
  };

  const renderCell = (column: TableColumn, row: any, rowIndex: number) => {
    if (column.render) {
      return column.render(row[column.key], row);
    }
    return row[column.key];
  };

  const renderMobileTable = () => {
    if (!responsive || !data || data.length === 0) return null;

    return (
      <ResponsiveTable mobileLayout={mobileLayout} breakpoint={mobileBreakpoint}>
        <MobileTableContainer mobileLayout={mobileLayout}>
          {data.map((row, rowIndex) => (
            <MobileTableItem key={rowIndex}>
              {columns.map((column) => (
                <MobileTableRow 
                  key={column.key} 
                  className="mobile-table-row"
                  onClick={() => clickableRows && onRowClick?.(row, rowIndex)}
                  style={{ cursor: clickableRows ? 'pointer' : 'default' }}
                >
                  <MobileLabel className="secondary-text">
                    {column.label}
                  </MobileLabel>
                  <MobileValue>
                    {renderCell(column, row, rowIndex)}
                  </MobileValue>
                </MobileTableRow>
              ))}
            </MobileTableItem>
          ))}
        </MobileTableContainer>
      </ResponsiveTable>
    );
  };

  if (loading) {
    return (
      <TableContainer className={className}>
        <LoadingSpinner>Loading...</LoadingSpinner>
      </TableContainer>
    );
  }

  if (!data || data.length === 0) {
    if (emptyText) {
      return (
        <TableContainer className={className}>
          <EmptyState withIcon={!!emptyIcon}>
            {emptyIcon && <div className="big-icon">{emptyIcon}</div>}
            {emptyText}
          </EmptyState>
        </TableContainer>
      );
    }
    return null;
  }

  return (
    <TableContainer className={className}>
      <StyledTable
        striped={striped}
        tight={tight}
        contentTopAligned={contentTopAligned}
        clickableRows={clickableRows}
        responsive={responsive}
        breakpoint={mobileBreakpoint}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <TableHeader
                key={column.key}
                sortable={column.sortable}
                align={column.align}
                width={column.width}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                {column.label}
                {column.sortable && sortColumn === column.key && (
                  <span>{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              clickable={clickableRows}
              noBorderBottom={noBorderBottom}
              onClick={() => clickableRows && onRowClick?.(row, rowIndex)}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  align={column.align}
                >
                  {renderCell(column, row, rowIndex)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      {renderMobileTable()}
    </TableContainer>
  );
};

// Export StatusBox as a separate component for use in table cells
export { StatusBox };
