import type { Meta, StoryObj } from '@storybook/react';
import { FSPContainer } from './FSPContainer';
import { FSPButton } from '../FSPButton/FSPButton';

const meta: Meta<typeof FSPContainer> = {
  title: 'FSP/Container',
  component: FSPContainer,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large', 'xlarge'],
    },
    background: {
      control: { type: 'select' },
      options: ['white', 'gray3', 'gray4', 'gray5', 'light-blue'],
    },
    fullWidth: {
      control: 'boolean',
    },
    centered: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <div>
    <h3 style={{ margin: '0 0 15px 0', color: 'var(--black, #000000)' }}>Container Content</h3>
    <p style={{ margin: '0 0 15px 0', color: 'var(--gray1, #595959)' }}>
      This is sample content inside the container to demonstrate spacing and layout.
    </p>
    <div style={{ display: 'flex', gap: '10px' }}>
      <FSPButton variant="primary">Primary Action</FSPButton>
      <FSPButton variant="secondary">Secondary Action</FSPButton>
    </div>
  </div>
);

export const Basic: Story = {
  args: {
    children: <SampleContent />,
  },
};

export const NoPadding: Story = {
  args: {
    children: <SampleContent />,
    padding: 'none',
  },
};

export const SmallPadding: Story = {
  args: {
    children: <SampleContent />,
    padding: 'small',
  },
};

export const LargePadding: Story = {
  args: {
    children: <SampleContent />,
    padding: 'large',
  },
};

export const ExtraLargePadding: Story = {
  args: {
    children: <SampleContent />,
    padding: 'xlarge',
  },
};

export const WithBackground: Story = {
  args: {
    children: <SampleContent />,
    background: 'gray5',
  },
};

export const Gray3Background: Story = {
  args: {
    children: <SampleContent />,
    background: 'gray3',
  },
};

export const LightBlueBackground: Story = {
  args: {
    children: <SampleContent />,
    background: 'light-blue',
  },
};

export const FullWidth: Story = {
  args: {
    children: <SampleContent />,
    fullWidth: true,
    background: 'gray5',
  },
};

export const Centered: Story = {
  args: {
    children: <SampleContent />,
    centered: true,
    maxWidth: '600px',
    background: 'gray5',
  },
};

export const MaxWidth: Story = {
  args: {
    children: <SampleContent />,
    maxWidth: '800px',
    centered: true,
    background: 'gray5',
  },
};

export const CardStyle: Story = {
  args: {
    children: <SampleContent />,
    padding: 'large',
    background: 'white',
    maxWidth: '400px',
    centered: true,
    className: 'card-style',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        backgroundColor: 'var(--gray5, #fafafa)', 
        padding: '20px',
        borderRadius: '8px'
      }}>
        <Story />
      </div>
    ),
  ],
};

export const FormContainer: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 20px 0' }}>Student Information</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>First Name</label>
            <input 
              type="text" 
              style={{ 
                width: '100%', 
                padding: '8px', 
                border: '1px solid var(--gray2, #8c8c8c)',
                borderRadius: '4px'
              }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Last Name</label>
            <input 
              type="text" 
              style={{ 
                width: '100%', 
                padding: '8px', 
                border: '1px solid var(--gray2, #8c8c8c)',
                borderRadius: '4px'
              }} 
            />
          </div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <FSPButton variant="secondary">Cancel</FSPButton>
            <FSPButton variant="primary">Save</FSPButton>
          </div>
        </div>
      </div>
    ),
    padding: 'large',
    background: 'white',
    maxWidth: '500px',
  },
};
