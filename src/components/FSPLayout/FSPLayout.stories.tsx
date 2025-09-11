import type { Meta, StoryObj } from '@storybook/react';
import { FSPLayout } from './FSPLayout';
import { FSPButton } from '../FSPButton/FSPButton';
import { FSPPageHeader } from '../FSPPageHeader/FSPPageHeader';
import { FSPContainer } from '../FSPContainer/FSPContainer';
import { useState } from 'react';

const meta: Meta<typeof FSPLayout> = {
  title: 'FSP/Layout',
  component: FSPLayout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    sidebarOpen: {
      control: 'boolean',
    },
    isMobile: {
      control: 'boolean',
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

const HeaderContent = ({ onToggleSidebar, sidebarOpen }: { onToggleSidebar?: () => void; sidebarOpen?: boolean }) => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '10px 20px',
    borderBottom: '1px solid var(--gray3, #d9d9d9)',
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
          color: 'var(--black, #000000)'
        }}
      >
        ☰
      </button>
      <h2 style={{ margin: 0, fontSize: '20px' }}>FSP Application</h2>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <span>User Name</span>
      <button style={{ 
        background: 'var(--blue, #1376CD)', 
        color: 'white', 
        border: 'none', 
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Settings
      </button>
    </div>
  </div>
);

export const Basic: Story = {
  args: {
    sidebar: <SidebarContent />,
    header: <HeaderContent />,
    children: (
      <FSPContainer>
        <FSPPageHeader title="Dashboard" />
        <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
          <h3>Welcome to FSP</h3>
          <p>This is the main content area of the application.</p>
        </div>
      </FSPContainer>
    ),
  },
};

export const WithSidebarClosed: Story = {
  args: {
    sidebar: <SidebarContent />,
    header: <HeaderContent />,
    sidebarOpen: false,
    children: (
      <FSPContainer>
        <FSPPageHeader title="Dashboard" />
        <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
          <h3>Welcome to FSP</h3>
          <p>This is the main content area with sidebar closed.</p>
        </div>
      </FSPContainer>
    ),
  },
};

export const MobileLayout: Story = {
  args: {
    sidebar: <SidebarContent />,
    header: <HeaderContent />,
    isMobile: true,
    children: (
      <FSPContainer>
        <FSPPageHeader title="Mobile Dashboard" />
        <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
          <h3>Mobile Layout</h3>
          <p>This layout adapts for mobile devices with a collapsible sidebar.</p>
        </div>
      </FSPContainer>
    ),
  },
};

export const WithoutSidebar: Story = {
  args: {
    header: <HeaderContent />,
    children: (
      <FSPContainer>
        <FSPPageHeader title="Simple Layout" />
        <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
          <h3>No Sidebar</h3>
          <p>This layout doesn't include a sidebar navigation.</p>
        </div>
      </FSPContainer>
    ),
  },
};

export const Interactive: Story = {
  render: () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    
    return (
      <FSPLayout
        sidebar={<SidebarContent />}
        header={<HeaderContent onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />}
        sidebarOpen={sidebarOpen}
        onSidebarToggle={setSidebarOpen}
      >
        <FSPContainer>
          <FSPPageHeader 
            title="Interactive Layout" 
            actions={
              <FSPButton 
                variant="primary" 
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                Toggle Sidebar
              </FSPButton>
            }
          />
          <div style={{ padding: '20px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' }}>
            <h3>Interactive Example</h3>
            <p>Click the toggle button or the hamburger menu to open/close the sidebar.</p>
            <p>Sidebar is currently: <strong>{sidebarOpen ? 'Open' : 'Closed'}</strong></p>
          </div>
        </FSPContainer>
      </FSPLayout>
    );
  },
};
