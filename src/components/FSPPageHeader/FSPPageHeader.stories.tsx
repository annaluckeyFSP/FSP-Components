import type { Meta, StoryObj } from '@storybook/react';
import { FSPPageHeader } from './FSPPageHeader';
import { FSPButton } from '../FSPButton/FSPButton';

const meta: Meta<typeof FSPPageHeader> = {
  title: 'FSP/PageHeader',
  component: FSPPageHeader,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'with-tabs', 'with-breadcrumbs', 'with-tight-breadcrumbs'],
    },
    spaceBetween: {
      control: 'boolean',
    },
    noEllipsis: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Page Title',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Dashboard',
    subtitle: 'Overview of your flight school',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Students',
    actions: (
      <div style={{ display: 'flex', gap: '10px' }}>
        <FSPButton variant="secondary">Export</FSPButton>
        <FSPButton variant="primary">Add Student</FSPButton>
      </div>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    title: 'Settings',
    spaceBetween: true,
    actions: (
      <FSPButton variant="primary">Save Changes</FSPButton>
    ),
  },
};

export const WithTabs: Story = {
  args: {
    title: 'Reports',
    variant: 'with-tabs',
    actions: (
      <FSPButton variant="secondary">Generate Report</FSPButton>
    ),
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: 'Student Details',
    variant: 'with-breadcrumbs',
    actions: (
      <div style={{ display: 'flex', gap: '10px' }}>
        <FSPButton variant="secondary">Edit</FSPButton>
        <FSPButton variant="primary">Save</FSPButton>
      </div>
    ),
  },
};

export const WithTightBreadcrumbs: Story = {
  args: {
    title: 'Course Details',
    variant: 'with-tight-breadcrumbs',
    actions: (
      <FSPButton variant="primary">Enroll Student</FSPButton>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Flight Schedule',
    titleWithIcon: <span style={{ color: 'var(--blue, #1376CD)' }}>✈️</span>,
    actions: (
      <FSPButton variant="primary">Add Flight</FSPButton>
    ),
  },
};

export const WithTooltip: Story = {
  args: {
    title: 'Advanced Settings',
    tooltip: '?',
    actions: (
      <FSPButton variant="primary">Configure</FSPButton>
    ),
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long page title that should be truncated with ellipsis when it exceeds the available space',
    actions: (
      <FSPButton variant="primary">Action</FSPButton>
    ),
  },
};

export const LongTitleNoEllipsis: Story = {
  args: {
    title: 'This is a very long page title that should wrap to multiple lines instead of being truncated',
    noEllipsis: true,
    actions: (
      <FSPButton variant="primary">Action</FSPButton>
    ),
  },
};

export const ComplexExample: Story = {
  args: {
    title: 'Student Management',
    subtitle: 'Manage your flight school students',
    spaceBetween: true,
    titleWithIcon: <span style={{ color: 'var(--blue, #1376CD)' }}>👨‍🎓</span>,
    tooltip: '?',
    actions: (
      <div style={{ display: 'flex', gap: '10px' }}>
        <FSPButton variant="secondary">Filter</FSPButton>
        <FSPButton variant="secondary">Export</FSPButton>
        <FSPButton variant="primary">Add Student</FSPButton>
      </div>
    ),
  },
};
