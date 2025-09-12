import React from 'react';
import styled from 'styled-components';

export interface FSPBreadcrumbProps {
  previousPage: string;
  onBack?: () => void;
  className?: string;
  href?: string;
}

export interface FSPBreadcrumbWrapperProps {
  children: React.ReactNode;
  breadcrumb?: React.ReactNode;
  className?: string;
}

const BreadcrumbWrapper = styled.div`
  position: relative;
`;

const BreadcrumbContainer = styled.div`
  position: absolute;
  top: -34px; /* Position above the content area */
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 14px;
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  z-index: 1;
`;

const ContentContainer = styled.div`
  /* No margin needed - breadcrumb is positioned above */
`;

const BreadcrumbLink = styled.a<{
  onClick?: () => void;
}>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--gray1, #595959);
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--blue, #1376CD);
  }
  
  &:focus {
    outline: 2px solid var(--blue, #1376CD);
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const ChevronIcon = styled.span`
  font-size: 12px;
  line-height: 14px;
  margin-right: 4px;
  color: inherit;
`;

const PageName = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: inherit;
`;

export const FSPBreadcrumb: React.FC<FSPBreadcrumbProps> = ({
  previousPage,
  onBack,
  className,
  href
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onBack) {
      e.preventDefault();
      onBack();
    }
  };

  return (
    <BreadcrumbContainer className={className}>
      <BreadcrumbLink 
        href={href || '#'} 
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label={`Go back to ${previousPage}`}
      >
        <ChevronIcon>‹</ChevronIcon>
        <PageName>{previousPage}</PageName>
      </BreadcrumbLink>
    </BreadcrumbContainer>
  );
};

export const FSPBreadcrumbWrapper: React.FC<FSPBreadcrumbWrapperProps> = ({
  children,
  breadcrumb,
  className
}) => {
  return (
    <BreadcrumbWrapper className={className}>
      {breadcrumb}
      <ContentContainer>
        {children}
      </ContentContainer>
    </BreadcrumbWrapper>
  );
};
