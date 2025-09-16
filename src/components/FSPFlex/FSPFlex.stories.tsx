import type { Meta, StoryObj } from '@storybook/react';
import { FSPFlex } from './FSPFlex';
import { FSPButton } from '../FSPButton/FSPButton';

const meta: Meta<typeof FSPFlex> = {
  title: 'FSP/Flex',
  component: FSPFlex,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
    },
    responsive: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const FlexItem = ({ children, color = 'var(--blue, #1376CD)', height = '60px' }: { 
  children: React.ReactNode; 
  color?: string; 
  height?: string;
}) => (
  <div style={{
    backgroundColor: color,
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: '500',
    height: height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    {children}
  </div>
);

export const Basic: Story = {
  args: {
    children: (
      <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    gap: 15,
    children: (
      <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    justifyContent: 'space-between',
    children: (
      <>
        <FlexItem color="var(--red, #d72919)">Left</FlexItem>
        <FlexItem color="var(--green, #1F8446)">Center</FlexItem>
        <FlexItem color="var(--orange, #DC7418)">Right</FlexItem>
      </>
    ),
  },
};

export const Center: Story = {
  args: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    children: (
      <>
        <FlexItem color="var(--blue, #1376CD)">Centered</FlexItem>
        <FlexItem color="var(--purple, #5200D8)">Items</FlexItem>
      </>
    ),
  },
};

export const Wrap: Story = {
  args: {
    wrap: 'wrap',
    gap: 10,
    children: (
      <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
        <FlexItem>Item 4</FlexItem>
        <FlexItem>Item 5</FlexItem>
        <FlexItem>Item 6</FlexItem>
        <FlexItem>Item 7</FlexItem>
        <FlexItem>Item 8</FlexItem>
      </>
    ),
  },
};

export const Responsive: Story = {
  args: {
    direction: 'row',
    responsive: true,
    mobileDirection: 'column',
    gap: 15,
    children: (
      <>
        <FlexItem color="var(--blue, #1376CD)">Desktop: Row</FlexItem>
        <FlexItem color="var(--green, #1F8446)">Mobile: Column</FlexItem>
        <FlexItem color="var(--orange, #DC7418)">Responsive</FlexItem>
      </>
    ),
  },
};

export const ButtonGroup: Story = {
  args: {
    gap: 10,
    children: (
      <>
        <FSPButton variant="primary">Save</FSPButton>
        <FSPButton variant="secondary">Cancel</FSPButton>
        <FSPButton variant="white">Reset</FSPButton>
      </>
    ),
  },
};

export const FormLayout: Story = {
  args: {
    direction: 'column',
    gap: 20,
    children: (
      <>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Name</label>
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
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
          <input 
            type="email" 
            style={{ 
              width: '100%', 
              padding: '8px', 
              border: '1px solid var(--gray2, #8c8c8c)',
              borderRadius: '4px'
            }} 
          />
        </div>
        <FSPFlex justifyContent="end" gap={10}>
          <FSPButton variant="secondary">Cancel</FSPButton>
          <FSPButton variant="primary">Submit</FSPButton>
        </FSPFlex>
      </>
    ),
  },
};

export const HeaderLayout: Story = {
  args: {
    justifyContent: 'space-between',
    alignItems: 'center',
    children: (
      <>
        <div>
          <h2 style={{ margin: 0, fontSize: '20px' }}>Page Title</h2>
          <p style={{ margin: '5px 0 0 0', color: 'var(--gray1, #595959)', fontSize: '14px' }}>
            Page subtitle or description
          </p>
        </div>
        <FSPFlex gap={10}>
          <FSPButton variant="secondary">Export</FSPButton>
          <FSPButton variant="primary">Add New</FSPButton>
        </FSPFlex>
      </>
    ),
  },
};

export const CardStack: Story = {
  args: {
    direction: 'column',
    gap: 15,
    children: (
      <>
        <div style={{
          backgroundColor: 'var(--white, #ffffff)',
          border: '1px solid var(--gray3, #d9d9d9)',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Card 1</h4>
          <p style={{ margin: '0', color: 'var(--gray1, #595959)' }}>First card content.</p>
        </div>
        <div style={{
          backgroundColor: 'var(--white, #ffffff)',
          border: '1px solid var(--gray3, #d9d9d9)',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Card 2</h4>
          <p style={{ margin: '0', color: 'var(--gray1, #595959)' }}>Second card content.</p>
        </div>
        <div style={{
          backgroundColor: 'var(--white, #ffffff)',
          border: '1px solid var(--gray3, #d9d9d9)',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Card 3</h4>
          <p style={{ margin: '0', color: 'var(--gray1, #595959)' }}>Third card content.</p>
        </div>
      </>
    ),
  },
};

export const InlineFlex: Story = {
  args: {
    inline: true,
    gap: 10,
    children: (
      <>
        <span>Inline</span>
        <FlexItem color="var(--blue, #1376CD)" height="30px">Flex</FlexItem>
        <span>Items</span>
      </>
    ),
  },
};
