import type { Meta, StoryObj } from '@storybook/react';
import { FSPCard, FSPCardHeader, FSPCardContent, FSPCardInfo, FSPCardLabel, InfoIcon } from './FSPCard';
import { FSPButton } from '../FSPButton/FSPButton';
import { FSPTypography } from '../FSPTypography/FSPTypography';
import { FSPChip } from '../FSPChip/FSPChip';

const meta: Meta<typeof FSPCard> = {
  title: 'FSP/Card',
  component: FSPCard,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'white', 'primary', 'danger', 'warning'],
    },
    noPadding: {
      control: { type: 'boolean' },
    },
    noMargin: {
      control: { type: 'boolean' },
    },
    isEditing: {
      control: { type: 'boolean' },
    },
    dynamicHeight: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'This is a basic card with some content.',
  },
};

export const WithHeader: Story = {
  args: {
    header: 'Card Title',
    children: 'This card has a header with a title.',
  },
};

export const White: Story = {
  args: {
    variant: 'white',
    header: 'White Card',
    children: 'This is a white card variant.',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    header: 'Primary Card',
    children: 'This card has a blue left border indicating primary status.',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    header: 'Danger Card',
    children: 'This card has a red left border indicating danger or error status.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    header: 'Warning Card',
    children: 'This card has an orange left border indicating warning status.',
  },
};

export const WithActions: Story = {
  args: {
    header: (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <span>Card with Actions</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <FSPButton variant="secondary" size="default">Edit</FSPButton>
          <FSPButton variant="red" size="default">Delete</FSPButton>
        </div>
      </div>
    ),
    children: 'This card has action buttons in the header.',
  },
};

export const NoPadding: Story = {
  args: {
    header: 'No Padding Card',
    noPadding: true,
    children: (
      <div style={{ padding: '20px', background: 'var(--gray4)' }}>
        Content with custom padding
      </div>
    ),
  },
};

export const IsEditing: Story = {
  args: {
    header: 'Editing Card',
    isEditing: true,
    children: 'This card is in editing mode with a blue left border.',
  },
};

export const DynamicHeight: Story = {
  args: {
    header: 'Dynamic Height Card',
    dynamicHeight: true,
    children: 'This card has dynamic height that adjusts to content.',
  },
};

export const Clickable: Story = {
  args: {
    header: 'Clickable Card',
    onClick: () => console.log('Card clicked!'),
    children: 'This card is clickable and will log to console.',
  },
};

export const ComplexContent: Story = {
  args: {
    header: (
      <FSPCardHeader
        actions={
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <FSPChip variant="green" size="small">Active</FSPChip>
            <FSPButton variant="secondary" size="default">Edit</FSPButton>
          </div>
        }
      >
        <div>
          <FSPTypography variant="h3" noMargin>Project Dashboard</FSPTypography>
          <FSPTypography variant="secondary" noMargin>Last updated 2 hours ago</FSPTypography>
        </div>
      </FSPCardHeader>
    ),
    children: (
      <div>
        <FSPTypography variant="body" style={{ marginBottom: '16px' }}>
          This is a complex card with multiple elements including typography, chips, and buttons.
        </FSPTypography>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <FSPChip variant="blue">React</FSPChip>
          <FSPChip variant="green">TypeScript</FSPChip>
          <FSPChip variant="orange">Storybook</FSPChip>
        </div>
      </div>
    ),
  },
};

export const DetailCard: Story = {
  args: {
    header: 'Detail Information',
    children: (
      <FSPCardInfo gridLayout>
        <FSPCardLabel>Name:</FSPCardLabel>
        <div className="card-detail-value">John Doe</div>
        <FSPCardLabel>Email:</FSPCardLabel>
        <div className="card-detail-value">john.doe@example.com</div>
        <FSPCardLabel>Status:</FSPCardLabel>
        <div><FSPChip variant="green" size="small">Active</FSPChip></div>
        <FSPCardLabel>Last Login:</FSPCardLabel>
        <div className="card-detail-value">2024-01-15 10:30 AM</div>
      </FSPCardInfo>
    ),
  },
};

export const WithInfoIcon: Story = {
  args: {
    header: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        Card with Info
        <InfoIcon>ℹ️</InfoIcon>
      </div>
    ),
    children: 'This card has an info icon in the header for additional information.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <FSPCard variant="default" header="Default Card">
        Standard card with gray background
      </FSPCard>
      <FSPCard variant="white" header="White Card">
        Card with white background
      </FSPCard>
      <FSPCard variant="primary" header="Primary Card">
        Card with blue left border
      </FSPCard>
      <FSPCard variant="danger" header="Danger Card">
        Card with red left border
      </FSPCard>
      <FSPCard variant="warning" header="Warning Card">
        Card with orange left border
      </FSPCard>
    </div>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '20px' 
    }}>
      <FSPCard header="Project Alpha">
        <FSPTypography variant="body" style={{ marginBottom: '12px' }}>
          A comprehensive project management solution.
        </FSPTypography>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <FSPChip variant="blue">React</FSPChip>
          <FSPChip variant="green">TypeScript</FSPChip>
        </div>
      </FSPCard>
      
      <FSPCard variant="primary" header="Project Beta">
        <FSPTypography variant="body" style={{ marginBottom: '12px' }}>
          An advanced analytics dashboard.
        </FSPTypography>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <FSPChip variant="orange">Vue</FSPChip>
          <FSPChip variant="red">Python</FSPChip>
        </div>
      </FSPCard>
      
      <FSPCard variant="warning" header="Project Gamma">
        <FSPTypography variant="body" style={{ marginBottom: '12px' }}>
          A mobile-first application.
        </FSPTypography>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <FSPChip variant="gray">React Native</FSPChip>
          <FSPChip variant="blue">JavaScript</FSPChip>
        </div>
      </FSPCard>
    </div>
  ),
};

export const ResponsiveCards: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <FSPCard 
        header="Responsive Card"
        dynamicHeight
      >
        <FSPTypography variant="h4" noMargin>Mobile Optimized</FSPTypography>
        <FSPTypography variant="body" style={{ marginTop: '8px' }}>
          This card adapts to different screen sizes. On mobile devices, the header 
          will stack vertically and the font sizes will adjust accordingly.
        </FSPTypography>
      </FSPCard>
      
      <FSPCard 
        header={
          <FSPCardHeader
            actions={<FSPButton variant="primary" size="default">Action</FSPButton>}
            dynamicHeight
          >
            <div>
              <FSPTypography variant="h3" noMargin>Complex Header</FSPTypography>
              <FSPTypography variant="secondary" noMargin>With subtitle and actions</FSPTypography>
            </div>
          </FSPCardHeader>
        }
      >
        <FSPTypography variant="body">
          This card demonstrates how headers can contain multiple elements and 
          still be responsive across different screen sizes.
        </FSPTypography>
      </FSPCard>
    </div>
  ),
};
