import React from 'react';
import styled from 'styled-components';

export interface FSPPageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'with-tabs' | 'with-breadcrumbs' | 'with-tight-breadcrumbs';
  noEllipsis?: boolean;
  spaceBetween?: boolean;
  titleWithIcon?: React.ReactNode;
  tooltip?: string;
}

const PageHeader = styled.h1<{
  variant?: string;
  noEllipsis?: boolean;
  spaceBetween?: boolean;
}>`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
  justify-content: start;
  margin: 40px 0 30px;
  font-size: 24px;
  font-weight: 500;
  color: var(--black, #000000);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  ${props => props.spaceBetween && `
    justify-content: space-between;
  `}
  
  ${props => props.variant === 'with-tabs' && `
    margin: 40px 0 0 0;
  `}
  
  ${props => props.variant === 'with-breadcrumbs' && `
    margin: 0 0 20px 0;
  `}
  
  ${props => props.variant === 'with-tight-breadcrumbs' && `
    margin-top: -2px;
  `}
  
  ${props => !props.noEllipsis && `
    h1 {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  `}
  
  @media (max-width: 599px) {
    align-items: start;
    grid-template-columns: 1fr;
    
    ${props => props.variant === 'with-breadcrumbs' && `
      margin: 0 0 10px 0;
    `}
  }
`;

const HeaderActionsWrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 10px;
  grid-auto-flow: column;
`;

const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  
  fa-icon, svg {
    color: var(--blue, #1376CD);
    margin-left: 10px;
  }
`;

const PageHeaderTooltip = styled.span`
  color: var(--blue, #1376CD);
  font-size: 14px;
  position: relative;
  top: -6px;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FSPPageHeader: React.FC<FSPPageHeaderProps> = ({
  title,
  subtitle,
  actions,
  className,
  variant = 'default',
  noEllipsis = false,
  spaceBetween = false,
  titleWithIcon,
  tooltip
}) => {
  return (
    <PageHeader
      className={className}
      variant={variant}
      noEllipsis={noEllipsis}
      spaceBetween={spaceBetween}
    >
      <Title>
        <span>{title}</span>
        {subtitle && <span style={{ fontSize: '16px', color: 'var(--gray1, #595959)' }}>{subtitle}</span>}
        {titleWithIcon && <TitleWithIcon>{titleWithIcon}</TitleWithIcon>}
        {tooltip && <PageHeaderTooltip>{tooltip}</PageHeaderTooltip>}
      </Title>
      
      {actions && (
        <HeaderActionsWrapper>
          {actions}
        </HeaderActionsWrapper>
      )}
    </PageHeader>
  );
};
