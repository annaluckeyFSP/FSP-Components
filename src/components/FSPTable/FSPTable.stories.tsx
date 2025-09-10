import type { Meta, StoryObj } from '@storybook/react';
import { FSPTable, StatusBox } from './FSPTable';
import { FSPButton } from '../FSPButton/FSPButton';
import { FSPTypography } from '../FSPTypography/FSPTypography';

const meta: Meta<typeof FSPTable> = {
  title: 'FSP/Table',
  component: FSPTable,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    striped: {
      control: { type: 'boolean' },
    },
    tight: {
      control: { type: 'boolean' },
    },
    contentTopAligned: {
      control: { type: 'boolean' },
    },
    clickableRows: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'active',
    role: 'Admin',
    lastLogin: '2024-01-15',
    actions: 'edit'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    status: 'inactive',
    role: 'User',
    lastLogin: '2024-01-10',
    actions: 'edit'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    status: 'pending',
    role: 'Manager',
    lastLogin: '2024-01-12',
    actions: 'edit'
  }
];

const columns = [
  {
    key: 'id',
    label: 'ID',
    width: '80px',
    align: 'center' as const,
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true,
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    key: 'status',
    label: 'Status',
    align: 'center' as const,
    render: (value: string) => (
      <StatusBox status={value === 'active' ? 'green' : value === 'inactive' ? 'gray' : 'light-orange'}>
        {value.charAt(0).toUpperCase()}
      </StatusBox>
    ),
  },
  {
    key: 'role',
    label: 'Role',
    sortable: true,
  },
  {
    key: 'lastLogin',
    label: 'Last Login',
    sortable: true,
  },
  {
    key: 'actions',
    label: 'Actions',
    align: 'center' as const,
    render: () => (
      <FSPButton variant="secondary" size="default">
        Edit
      </FSPButton>
    ),
  },
];

export const Basic: Story = {
  args: {
    columns,
    data: sampleData,
  },
};

export const Striped: Story = {
  args: {
    columns,
    data: sampleData,
    striped: true,
  },
};

export const Tight: Story = {
  args: {
    columns,
    data: sampleData,
    tight: true,
  },
};

export const ClickableRows: Story = {
  args: {
    columns,
    data: sampleData,
    clickableRows: true,
    onRowClick: (row) => console.log('Row clicked:', row),
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyText: 'No data available',
  },
};

export const EmptyWithIcon: Story = {
  args: {
    columns,
    data: [],
    emptyText: 'No users found',
    emptyIcon: '👥',
  },
};

export const WithSorting: Story = {
  args: {
    columns,
    data: sampleData,
    onSort: (column, direction) => console.log(`Sorting by ${column} ${direction}`),
  },
};

export const StatusIndicators: Story = {
  args: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'status', label: 'Status', align: 'center' as const },
      { key: 'description', label: 'Description' },
    ],
    data: [
      {
        name: 'System Online',
        status: 'green',
        description: 'All systems operational'
      },
      {
        name: 'Maintenance Mode',
        status: 'orange',
        description: 'Scheduled maintenance in progress'
      },
      {
        name: 'Service Down',
        status: 'gray',
        description: 'Service temporarily unavailable'
      },
      {
        name: 'Warning',
        status: 'light-orange',
        description: 'Minor issues detected'
      }
    ],
    striped: true,
  },
  render: (args) => (
    <FSPTable
      {...args}
      columns={[
        { key: 'name', label: 'Name' },
        { 
          key: 'status', 
          label: 'Status', 
          align: 'center' as const,
          render: (value: string) => (
            <StatusBox status={value as any}>
              {value === 'green' ? '✓' : value === 'orange' ? '⚠' : value === 'gray' ? '✗' : '!'}
            </StatusBox>
          )
        },
        { key: 'description', label: 'Description' },
      ]}
    />
  ),
};

export const ComplexData: Story = {
  args: {
    columns: [
      { key: 'id', label: 'ID', width: '60px', align: 'center' as const },
      { key: 'name', label: 'Name', sortable: true },
      { key: 'email', label: 'Email', sortable: true },
      { 
        key: 'status', 
        label: 'Status', 
        align: 'center' as const,
        render: (value: string) => (
          <StatusBox status={value === 'active' ? 'green' : 'gray'}>
            {value === 'active' ? 'A' : 'I'}
          </StatusBox>
        )
      },
      { key: 'role', label: 'Role', sortable: true },
      { key: 'lastLogin', label: 'Last Login', sortable: true },
      { 
        key: 'actions', 
        label: 'Actions', 
        align: 'center' as const,
        render: (row: any) => (
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <FSPButton variant="primary" size="default">Edit</FSPButton>
            <FSPButton variant="red" size="default">Delete</FSPButton>
          </div>
        )
      },
    ],
    data: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        status: 'active',
        role: 'Administrator',
        lastLogin: '2024-01-15 10:30 AM'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        status: 'inactive',
        role: 'User',
        lastLogin: '2024-01-10 2:15 PM'
      },
      {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        status: 'active',
        role: 'Manager',
        lastLogin: '2024-01-12 9:45 AM'
      },
      {
        id: 4,
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
        status: 'active',
        role: 'User',
        lastLogin: '2024-01-14 4:20 PM'
      }
    ],
    striped: true,
    clickableRows: true,
  },
};

export const AllStatusBoxes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <FSPTypography variant="h3">Status Box Variants</FSPTypography>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <StatusBox status="green">✓</StatusBox>
          <FSPTypography variant="caption">Green</FSPTypography>
        </div>
        <div style={{ textAlign: 'center' }}>
          <StatusBox status="gray">✗</StatusBox>
          <FSPTypography variant="caption">Gray</FSPTypography>
        </div>
        <div style={{ textAlign: 'center' }}>
          <StatusBox status="light-green">L</StatusBox>
          <FSPTypography variant="caption">Light Green</FSPTypography>
        </div>
        <div style={{ textAlign: 'center' }}>
          <StatusBox status="light-gray">L</StatusBox>
          <FSPTypography variant="caption">Light Gray</FSPTypography>
        </div>
        <div style={{ textAlign: 'center' }}>
          <StatusBox status="light-orange">W</StatusBox>
          <FSPTypography variant="caption">Light Orange</FSPTypography>
        </div>
        <div style={{ textAlign: 'center' }}>
          <StatusBox status="orange">!</StatusBox>
          <FSPTypography variant="caption">Orange</FSPTypography>
        </div>
      </div>
    </div>
  ),
};
