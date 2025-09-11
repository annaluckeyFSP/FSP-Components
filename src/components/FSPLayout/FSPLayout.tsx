import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface FSPLayoutProps {
  children: React.ReactNode;
  className?: string;
  sidebarOpen?: boolean;
  onSidebarToggle?: (open: boolean) => void;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  isMobile?: boolean;
}

const DrawerContainer = styled.div<{
  isMobile?: boolean;
}>`
  display: flex;
  height: 100vh;
  background-color: var(--white, #ffffff);
  color: var(--black, #000000);
  font-family: var(--mainFont, 'Roboto', Arial, Helvetica, sans-serif);
  
  @media (max-width: 991px) {
    height: calc(100vh - 39px);
    overflow: hidden;
  }
`;

const Sidebar = styled.div<{
  isOpen?: boolean;
  isMobile?: boolean;
}>`
  width: 222px;
  background-color: var(--gray4, #f0f0f0);
  border: none;
  overflow-x: hidden;
  transition: transform 0.3s ease;
  
  ${props => props.isMobile && `
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    transform: ${props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    margin-top: 40px;
  `}
  
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const MainContent = styled.div<{
  isMobile?: boolean;
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px 30px;
  overflow-x: hidden;
  
  @media (max-width: 599px) {
    padding: 0 20px 20px 20px;
  }
`;

const ContentArea = styled.main`
  flex: 1;
  position: relative;
`;

const Backdrop = styled.div<{
  isOpen?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

export const FSPLayout: React.FC<FSPLayoutProps> = ({
  children,
  className,
  sidebarOpen = false,
  onSidebarToggle,
  sidebar,
  header,
  isMobile = false
}) => {
  const [internalSidebarOpen, setInternalSidebarOpen] = useState(sidebarOpen);

  useEffect(() => {
    setInternalSidebarOpen(sidebarOpen);
  }, [sidebarOpen]);

  const handleSidebarToggle = () => {
    const newState = !internalSidebarOpen;
    setInternalSidebarOpen(newState);
    onSidebarToggle?.(newState);
  };

  const handleBackdropClick = () => {
    if (isMobile) {
      handleSidebarToggle();
    }
  };

  return (
    <DrawerContainer className={className} isMobile={isMobile}>
      {sidebar && (
        <>
          <Sidebar isOpen={internalSidebarOpen} isMobile={isMobile}>
            {sidebar}
          </Sidebar>
          {isMobile && (
            <Backdrop isOpen={internalSidebarOpen} onClick={handleBackdropClick} />
          )}
        </>
      )}
      
      <MainContent isMobile={isMobile}>
        {header && (
          <div>
            {React.cloneElement(header as React.ReactElement, {
              onToggleSidebar: handleSidebarToggle,
              sidebarOpen: internalSidebarOpen
            })}
          </div>
        )}
        <ContentArea>
          {children}
        </ContentArea>
      </MainContent>
    </DrawerContainer>
  );
};
