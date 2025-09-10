import type { Meta, StoryObj } from '@storybook/react';
import { FSPList, FSPButtonList, FSPCheckboxList, FSPActionList } from './FSPList';
import { FSPButton } from '../FSPButton/FSPButton';
import { FSPChip } from '../FSPChip/FSPChip';

const meta: Meta<typeof FSPList> = {
  title: 'FSP/List',
  component: FSPList,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'button-list', 'checkbox-list', 'action-list'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    id: '1',
    text: 'First Item',
    secondaryText: 'This is a description of the first item',
  },
  {
    id: '2',
    text: 'Second Item',
    secondaryText: 'This is a description of the second item',
  },
  {
    id: '3',
    text: 'Third Item',
    secondaryText: 'This is a description of the third item',
  },
];

export const Basic: Story = {
  args: {
    items: sampleItems,
  },
};

export const WithHeader: Story = {
  args: {
    header: 'List Header',
    items: sampleItems,
  },
};

export const WithActions: Story = {
  args: {
    header: 'Items with Actions',
    items: [
      {
        id: '1',
        text: 'Edit Item',
        actions: <FSPButton variant="secondary" size="default">Edit</FSPButton>,
      },
      {
        id: '2',
        text: 'Delete Item',
        actions: <FSPButton variant="red" size="default">Delete</FSPButton>,
      },
      {
        id: '3',
        text: 'View Item',
        actions: <FSPButton variant="primary" size="default">View</FSPButton>,
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    header: 'Items with Icons',
    items: [
      {
        id: '1',
        text: 'User Profile',
        icon: '👤',
        secondaryText: 'Manage your account settings',
      },
      {
        id: '2',
        text: 'Settings',
        icon: '⚙️',
        secondaryText: 'Configure application preferences',
      },
      {
        id: '3',
        text: 'Help',
        icon: '❓',
        secondaryText: 'Get support and documentation',
      },
    ],
  },
};

export const ActiveItems: Story = {
  args: {
    header: 'Active Items',
    items: [
      {
        id: '1',
        text: 'Inactive Item',
        secondaryText: 'This item is not selected',
      },
      {
        id: '2',
        text: 'Active Item',
        secondaryText: 'This item is currently selected',
        active: true,
      },
      {
        id: '3',
        text: 'Another Inactive Item',
        secondaryText: 'This item is not selected',
      },
    ],
  },
};

export const WithLeftBorders: Story = {
  args: {
    header: 'Items with Status Borders',
    items: [
      {
        id: '1',
        text: 'Success Item',
        secondaryText: 'This item has a green left border',
        leftBorder: 'green',
      },
      {
        id: '2',
        text: 'Info Item',
        secondaryText: 'This item has a blue left border',
        leftBorder: 'blue',
      },
      {
        id: '3',
        text: 'Warning Item',
        secondaryText: 'This item has an orange left border',
        leftBorder: 'orange',
      },
      {
        id: '4',
        text: 'Error Item',
        secondaryText: 'This item has a red left border',
        leftBorder: 'red',
      },
    ],
  },
};

export const Draggable: Story = {
  args: {
    header: 'Draggable Items',
    items: [
      {
        id: '1',
        text: 'Draggable Item 1',
        secondaryText: 'This item can be dragged to reorder',
        draggable: true,
      },
      {
        id: '2',
        text: 'Draggable Item 2',
        secondaryText: 'This item can also be dragged',
        draggable: true,
      },
      {
        id: '3',
        text: 'Draggable Item 3',
        secondaryText: 'Drag these items to reorder the list',
        draggable: true,
      },
    ],
  },
};

export const ButtonList: Story = {
  args: {
    header: 'Button List',
    items: [
      {
        id: '1',
        text: 'Primary Action',
        secondaryText: 'This is a primary action button',
        actions: <FSPButton variant="primary" size="default">Action</FSPButton>,
      },
      {
        id: '2',
        text: 'Secondary Action',
        secondaryText: 'This is a secondary action button',
        actions: <FSPButton variant="secondary" size="default">Action</FSPButton>,
      },
      {
        id: '3',
        text: 'Danger Action',
        secondaryText: 'This is a danger action button',
        actions: <FSPButton variant="red" size="default">Action</FSPButton>,
      },
    ],
  },
  render: (args) => <FSPButtonList {...args} />,
};

export const CheckboxList: Story = {
  args: {
    header: 'Checkbox List',
    items: [
      {
        id: '1',
        text: 'Option 1',
        secondaryText: 'Select this option',
      },
      {
        id: '2',
        text: 'Option 2',
        secondaryText: 'Select this option',
      },
      {
        id: '3',
        text: 'Option 3',
        secondaryText: 'Select this option',
      },
    ],
  },
  render: (args) => <FSPCheckboxList {...args} />,
};

export const ActionList: Story = {
  args: {
    header: 'Action List',
    items: [
      {
        id: '1',
        text: 'Edit Profile',
        secondaryText: 'Update your personal information',
        actions: <FSPButton variant="secondary" size="default">Edit</FSPButton>,
      },
      {
        id: '2',
        text: 'Change Password',
        secondaryText: 'Update your account password',
        actions: <FSPButton variant="secondary" size="default">Change</FSPButton>,
      },
      {
        id: '3',
        text: 'Delete Account',
        secondaryText: 'Permanently remove your account',
        actions: <FSPButton variant="red" size="default">Delete</FSPButton>,
      },
    ],
  },
  render: (args) => <FSPActionList {...args} />,
};

export const ComplexList: Story = {
  args: {
    header: 'Complex List with Multiple Features',
    items: [
      {
        id: '1',
        text: 'Project Alpha',
        secondaryText: 'A comprehensive project management solution',
        icon: '📊',
        leftBorder: 'green',
        actions: (
          <div style={{ display: 'flex', gap: '8px' }}>
            <FSPChip variant="green" size="small">Active</FSPChip>
            <FSPButton variant="secondary" size="default">Edit</FSPButton>
          </div>
        ),
      },
      {
        id: '2',
        text: 'Project Beta',
        secondaryText: 'An advanced analytics dashboard',
        icon: '📈',
        leftBorder: 'blue',
        active: true,
        actions: (
          <div style={{ display: 'flex', gap: '8px' }}>
            <FSPChip variant="blue" size="small">In Progress</FSPChip>
            <FSPButton variant="primary" size="default">View</FSPButton>
          </div>
        ),
      },
      {
        id: '3',
        text: 'Project Gamma',
        secondaryText: 'A mobile-first application',
        icon: '📱',
        leftBorder: 'orange',
        actions: (
          <div style={{ display: 'flex', gap: '8px' }}>
            <FSPChip variant="orange" size="small">Pending</FSPChip>
            <FSPButton variant="secondary" size="default">Edit</FSPButton>
          </div>
        ),
      },
    ],
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Default List</h3>
        <FSPList
          header="Basic List"
          items={[
            { id: '1', text: 'Item 1' },
            { id: '2', text: 'Item 2' },
            { id: '3', text: 'Item 3' },
          ]}
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Button List</h3>
        <FSPButtonList
          header="Button List"
          items={[
            { id: '1', text: 'Button Item 1', actions: <FSPButton variant="primary" size="default">Action</FSPButton> },
            { id: '2', text: 'Button Item 2', actions: <FSPButton variant="secondary" size="default">Action</FSPButton> },
          ]}
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Checkbox List</h3>
        <FSPCheckboxList
          header="Checkbox List"
          items={[
            { id: '1', text: 'Checkbox Item 1' },
            { id: '2', text: 'Checkbox Item 2' },
            { id: '3', text: 'Checkbox Item 3' },
          ]}
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Action List</h3>
        <FSPActionList
          header="Action List"
          items={[
            { id: '1', text: 'Action Item 1', actions: <FSPButton variant="secondary" size="default">Edit</FSPButton> },
            { id: '2', text: 'Action Item 2', actions: <FSPButton variant="red" size="default">Delete</FSPButton> },
          ]}
        />
      </div>
    </div>
  ),
};
