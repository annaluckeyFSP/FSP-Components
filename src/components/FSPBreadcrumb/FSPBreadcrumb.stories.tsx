import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FSPBreadcrumb, FSPBreadcrumbWrapper } from './FSPBreadcrumb';
import { FSPPageHeader } from '../FSPPageHeader/FSPPageHeader';
import { FSPContainer } from '../FSPContainer/FSPContainer';
import { FSPLayout } from '../FSPLayout/FSPLayout';

const meta: Meta<typeof FSPBreadcrumb> = {
  title: 'FSP/Navigation',
  component: FSPBreadcrumb,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    previousPage: {
      control: 'text',
      description: 'Name of the previous page to display',
    },
    onBack: {
      action: 'back clicked',
      description: 'Callback function when breadcrumb is clicked',
    },
    href: {
      control: 'text',
      description: 'URL to navigate to when clicked',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SidebarContent = () => (
  <div style={{ padding: '20px', color: 'var(--black, #000000)' }}>
    <h3 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Navigation</h3>
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <a href="#" style={{ color: 'var(--blue, #1376CD)', textDecoration: 'none' }}>Dashboard</a>
      <a href="#" style={{ color: 'var(--gray1, #595959)', textDecoration: 'none' }}>Students</a>
      <a href="#" style={{ color: 'var(--gray1, #595959)', textDecoration: 'none' }}>Schedule</a>
      <a href="#" style={{ color: 'var(--gray1, #595959)', textDecoration: 'none' }}>Reports</a>
      <a href="#" style={{ color: 'var(--gray1, #595959)', textDecoration: 'none' }}>Settings</a>
    </nav>
  </div>
);

const HeaderContent = ({ onToggleSidebar }: { onToggleSidebar?: () => void; sidebarOpen?: boolean }) => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '10px 20px',
    backgroundColor: 'var(--white, #ffffff)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <button 
        onClick={onToggleSidebar}
        style={{ 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          fontSize: '18px',
          color: 'var(--black, #000000)',
          padding: '0',
          margin: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        ☰
      </button>
      <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'normal' }}>FSP Application</h3>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <a href="#" style={{ 
        color: 'var(--gray1, #595959)', 
        textDecoration: 'none',
        fontSize: '14px',
        fontFamily: 'var(--mainFont, "Roboto", Arial, Helvetica, sans-serif)'
      }}>
        Help
      </a>
      <a href="#" style={{ 
        color: 'var(--gray1, #595959)', 
        textDecoration: 'none',
        fontSize: '14px',
        fontFamily: 'var(--mainFont, "Roboto", Arial, Helvetica, sans-serif)'
      }}>
        Settings
      </a>
      <a href="#" style={{ 
        color: 'var(--gray1, #595959)', 
        textDecoration: 'none',
        fontSize: '14px',
        fontFamily: 'var(--mainFont, "Roboto", Arial, Helvetica, sans-serif)'
      }}>
        Username
      </a>
    </div>
  </div>
);

export const Sidebar: Story = {
  render: () => (
    <FSPLayout
      sidebar={<SidebarContent />}
      header={<HeaderContent />}
      children={
        <FSPContainer>
          <FSPPageHeader title="Dashboard" />
          <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
            <h3>Welcome to FSP</h3>
            <p>This is the main content area of the application.</p>
          </div>
        </FSPContainer>
      }
    />
  ),
};

export const Breadcrumb: Story = {
  render: () => (
    <FSPContainer>
      <FSPBreadcrumbWrapper
        breadcrumb={
          <FSPBreadcrumb 
            previousPage="Dashboard" 
            onBack={() => console.log('Back to Dashboard')}
          />
        }
      >
        <FSPPageHeader title="Student Details" />
        <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
          <h3>Student Information</h3>
          <p>This shows how the breadcrumb appears between the header and page title without moving the H1.</p>
        </div>
      </FSPBreadcrumbWrapper>
    </FSPContainer>
  ),
};