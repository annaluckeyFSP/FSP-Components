import type { Meta, StoryObj } from '@storybook/react';
import { FSPChip, StatusChip, CountChip, WeatherChip } from './FSPChip';

const meta: Meta<typeof FSPChip> = {
  title: 'FSP/Chip',
  component: FSPChip,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['blue', 'green', 'red', 'gray', 'dark-gray', 'orange', 'light-orange', 'gray-text', 'transparent', 'flat'],
    },
    shape: {
      control: { type: 'select' },
      options: ['round', 'square'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    removable: {
      control: { type: 'boolean' },
    },
    count: {
      control: { type: 'number' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Basic Chip',
  },
};

export const Blue: Story = {
  args: {
    variant: 'blue',
    children: 'Blue Chip',
  },
};

export const Green: Story = {
  args: {
    variant: 'green',
    children: 'Green Chip',
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
    children: 'Red Chip',
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    children: 'Gray Chip',
  },
};

export const DarkGray: Story = {
  args: {
    variant: 'dark-gray',
    children: 'Dark Gray Chip',
  },
};

export const Orange: Story = {
  args: {
    variant: 'orange',
    children: 'Orange Chip',
  },
};

export const LightOrange: Story = {
  args: {
    variant: 'light-orange',
    children: 'Light Orange Chip',
  },
};

export const Round: Story = {
  args: {
    variant: 'blue',
    shape: 'round',
    children: 'Round Chip',
  },
};

export const Square: Story = {
  args: {
    variant: 'green',
    shape: 'square',
    children: 'Square Chip',
  },
};

export const Small: Story = {
  args: {
    variant: 'red',
    size: 'small',
    children: 'Small Chip',
  },
};

export const Medium: Story = {
  args: {
    variant: 'blue',
    size: 'medium',
    children: 'Medium Chip',
  },
};

export const Removable: Story = {
  args: {
    variant: 'blue',
    removable: true,
    children: 'Removable Chip',
    onRemove: () => console.log('Chip removed'),
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'green',
    children: 'Chip with Icon',
    icon: '✓',
  },
};

export const WithCount: Story = {
  args: {
    variant: 'gray',
    children: 'Items',
    count: 5,
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    children: 'Flat Chip',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'Transparent Chip',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <FSPChip variant="blue">Blue</FSPChip>
      <FSPChip variant="green">Green</FSPChip>
      <FSPChip variant="red">Red</FSPChip>
      <FSPChip variant="gray">Gray</FSPChip>
      <FSPChip variant="dark-gray">Dark Gray</FSPChip>
      <FSPChip variant="orange">Orange</FSPChip>
      <FSPChip variant="light-orange">Light Orange</FSPChip>
      <FSPChip variant="gray-text">Gray Text</FSPChip>
      <FSPChip variant="flat">Flat</FSPChip>
    </div>
  ),
};

export const AllShapes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <FSPChip variant="blue" shape="round">Round</FSPChip>
      <FSPChip variant="green" shape="square">Square</FSPChip>
      <FSPChip variant="red" shape="round">Round</FSPChip>
      <FSPChip variant="gray" shape="square">Square</FSPChip>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
      <FSPChip variant="blue" size="small">Small</FSPChip>
      <FSPChip variant="green" size="medium">Medium</FSPChip>
      <FSPChip variant="red" size="small">Small</FSPChip>
      <FSPChip variant="gray" size="medium">Medium</FSPChip>
    </div>
  ),
};

export const StatusChips: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <StatusChip>Active</StatusChip>
      <StatusChip>Online</StatusChip>
      <StatusChip>Connected</StatusChip>
      <StatusChip>Ready</StatusChip>
    </div>
  ),
};

export const CountChips: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <CountChip count={5}>Messages</CountChip>
      <CountChip count={12}>Notifications</CountChip>
      <CountChip count={3}>Alerts</CountChip>
      <CountChip count={0}>Empty</CountChip>
    </div>
  ),
};

export const WeatherChips: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <WeatherChip weatherType="vfr">VFR</WeatherChip>
      <WeatherChip weatherType="mvfr">MVFR</WeatherChip>
      <WeatherChip weatherType="ifr">IFR</WeatherChip>
      <WeatherChip weatherType="lifr">LIFR</WeatherChip>
    </div>
  ),
};

export const InteractiveChips: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <FSPChip 
        variant="blue" 
        removable 
        onRemove={() => console.log('Blue chip removed')}
        onClick={() => console.log('Blue chip clicked')}
      >
        Clickable & Removable
      </FSPChip>
      <FSPChip 
        variant="green" 
        removable 
        onRemove={() => console.log('Green chip removed')}
      >
        Removable Only
      </FSPChip>
      <FSPChip 
        variant="red" 
        onClick={() => console.log('Red chip clicked')}
      >
        Clickable Only
      </FSPChip>
    </div>
  ),
};

export const ChipCollection: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Status Indicators</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <FSPChip variant="green" shape="round">✓ Active</FSPChip>
          <FSPChip variant="red" shape="round">✗ Inactive</FSPChip>
          <FSPChip variant="orange" shape="round">⚠ Warning</FSPChip>
          <FSPChip variant="gray" shape="round">○ Pending</FSPChip>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Categories</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <FSPChip variant="blue">Technology</FSPChip>
          <FSPChip variant="green">Science</FSPChip>
          <FSPChip variant="orange">Design</FSPChip>
          <FSPChip variant="red">Urgent</FSPChip>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Counts & Metrics</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <FSPChip variant="gray" count={25}>Users</FSPChip>
          <FSPChip variant="blue" count={8}>Projects</FSPChip>
          <FSPChip variant="green" count={156}>Tasks</FSPChip>
          <FSPChip variant="orange" count={3}>Issues</FSPChip>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Removable Tags</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <FSPChip variant="blue" removable onRemove={() => console.log('Removed')}>React</FSPChip>
          <FSPChip variant="green" removable onRemove={() => console.log('Removed')}>TypeScript</FSPChip>
          <FSPChip variant="orange" removable onRemove={() => console.log('Removed')}>Storybook</FSPChip>
          <FSPChip variant="red" removable onRemove={() => console.log('Removed')}>Styled Components</FSPChip>
        </div>
      </div>
    </div>
  ),
};
