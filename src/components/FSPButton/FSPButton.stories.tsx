import type { Meta, StoryObj } from '@storybook/react';
import { FSPButton } from './FSPButton';

const meta: Meta<typeof FSPButton> = {
  title: 'FSP/Button',
  component: FSPButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'red', 'green', 'white'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    fullWidthOnMobile: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
    children: 'Red Button',
  },
};

export const Green: Story = {
  args: {
    variant: 'green',
    children: 'Green Button',
  },
};

export const White: Story = {
  args: {
    variant: 'white',
    children: 'White Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    variant: 'primary',
    children: 'Large Button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <FSPButton variant="primary">Primary</FSPButton>
      <FSPButton variant="secondary">Secondary</FSPButton>
      <FSPButton variant="red">Red</FSPButton>
      <FSPButton variant="green">Green</FSPButton>
      <FSPButton variant="white">White</FSPButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FSPButton size="default" variant="primary">Default</FSPButton>
      <FSPButton size="large" variant="primary">Large</FSPButton>
    </div>
  ),
};
