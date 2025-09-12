import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FSPBreadcrumb } from './FSPBreadcrumb';
import { FSPPageHeader } from '../FSPPageHeader/FSPPageHeader';
import { FSPContainer } from '../FSPContainer/FSPContainer';

const meta: Meta<typeof FSPBreadcrumb> = {
  title: 'FSP/Navigation',
  component: FSPBreadcrumb,
  parameters: {
    layout: 'padded',
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

export const Basic: Story = {
  args: {
    previousPage: 'Dashboard',
  },
};

export const WithCallback: Story = {
  args: {
    previousPage: 'Students',
    onBack: () => console.log('Navigating back to Students'),
  },
};

export const WithHref: Story = {
  args: {
    previousPage: 'Reports',
    href: '/reports',
  },
};

export const LongPageName: Story = {
  args: {
    previousPage: 'Student Management System',
  },
};

export const InPageLayout: Story = {
  render: () => (
    <FSPContainer>
      <FSPBreadcrumb 
        previousPage="Dashboard" 
        onBack={() => console.log('Back to Dashboard')}
      />
      <FSPPageHeader title="Student Details" />
      <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
        <h3>Student Information</h3>
        <p>This shows how the breadcrumb appears between the header and page title.</p>
      </div>
    </FSPContainer>
  ),
};

export const MultipleBreadcrumbs: Story = {
  render: () => (
    <FSPContainer>
      <FSPBreadcrumb 
        previousPage="Dashboard" 
        onBack={() => console.log('Back to Dashboard')}
      />
      <FSPPageHeader title="Students" />
      <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
        <h3>Student List</h3>
        <p>This shows how breadcrumbs work in a typical page hierarchy.</p>
        <div style={{ marginTop: '20px' }}>
          <FSPBreadcrumb 
            previousPage="Students" 
            onBack={() => console.log('Back to Students')}
          />
          <FSPPageHeader title="John Doe" />
          <div style={{ padding: '20px', backgroundColor: 'var(--white, #ffffff)', borderRadius: '8px', border: '1px solid var(--gray3, #d9d9d9)' }}>
            <h3>Student Details</h3>
            <p>Individual student information page with breadcrumb navigation.</p>
          </div>
        </div>
      </div>
    </FSPContainer>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState('Student Details');
    const [previousPage, setPreviousPage] = React.useState('Students');
    
    const handleBack = () => {
      if (currentPage === 'Student Details') {
        setCurrentPage('Students');
        setPreviousPage('Dashboard');
      } else if (currentPage === 'Students') {
        setCurrentPage('Dashboard');
        setPreviousPage('');
      }
    };
    
    return (
      <FSPContainer>
        {previousPage && (
          <FSPBreadcrumb 
            previousPage={previousPage} 
            onBack={handleBack}
          />
        )}
        <FSPPageHeader title={currentPage} />
        <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
          <h3>Interactive Navigation</h3>
          <p>Click the breadcrumb to navigate back through the page hierarchy.</p>
          <p>Notice how the H1 position remains consistent - it only moves when the breadcrumb appears/disappears.</p>
          <p>Current page: <strong>{currentPage}</strong></p>
          <p>Previous page: <strong>{previousPage || 'None'}</strong></p>
        </div>
      </FSPContainer>
    );
  },
};

export const ConsistentPositioning: Story = {
  render: () => {
    const [showBreadcrumb, setShowBreadcrumb] = React.useState(true);
    
    return (
      <FSPContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>Consistent H1 Positioning</h2>
          <button 
            onClick={() => setShowBreadcrumb(!showBreadcrumb)}
            style={{
              background: 'var(--blue, #1376CD)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {showBreadcrumb ? 'Hide' : 'Show'} Breadcrumb
          </button>
        </div>
        
        {showBreadcrumb && (
          <FSPBreadcrumb 
            previousPage="Dashboard" 
            onBack={() => console.log('Back to Dashboard')}
          />
        )}
        
        <FSPPageHeader title="Student Details" />
        <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
          <h3>H1 Position Consistency</h3>
          <p>The H1 (Student Details) always appears in the same relative position.</p>
          <p>When breadcrumb is present: H1 is pushed down by the breadcrumb space.</p>
          <p>When breadcrumb is hidden: H1 moves up to fill the available space.</p>
          <p>This ensures consistent layout behavior regardless of breadcrumb presence.</p>
        </div>
      </FSPContainer>
    );
  },
};
