import type { Meta, StoryObj } from '@storybook/react';
import { FSPGrid } from './FSPGrid';
import { FSPButton } from '../FSPButton/FSPButton';

const meta: Meta<typeof FSPGrid> = {
  title: 'FSP/Grid',
  component: FSPGrid,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    columns: {
      control: 'number',
    },
    rows: {
      control: 'number',
    },
    gap: {
      control: 'number',
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

const GridItem = ({ children, color = 'var(--blue, #1376CD)', style }: { children: React.ReactNode; color?: string; style?: React.CSSProperties }) => (
  <div style={{
    backgroundColor: color,
    color: 'white',
    padding: '20px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: '500',
    ...style
  }}>
    {children}
  </div>
);

export const Basic: Story = {
  args: {
    columns: 3,
    gap: 20,
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: 15,
    children: (
      <>
        <GridItem>Left Column</GridItem>
        <GridItem>Right Column</GridItem>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: 10,
    children: (
      <>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
      </>
    ),
  },
};

export const CustomTemplate: Story = {
  args: {
    templateColumns: '1fr 2fr 1fr',
    templateRows: 'auto 1fr auto',
    gap: 20,
    children: (
      <>
        <GridItem color="var(--red, #d72919)">Header</GridItem>
        <GridItem color="var(--gray3, #d9d9d9)">Sidebar</GridItem>
        <GridItem color="var(--blue, #1376CD)">Main Content</GridItem>
        <GridItem color="var(--gray3, #d9d9d9)">Sidebar</GridItem>
        <GridItem color="var(--green, #1F8446)">Footer</GridItem>
      </>
    ),
  },
};

export const Responsive: Story = {
  args: {
    columns: 4,
    gap: 15,
    responsive: true,
    tabletColumns: 2,
    mobileColumns: 1,
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </>
    ),
  },
};

export const WithAlignment: Story = {
  args: {
    columns: 3,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    children: (
      <>
        <GridItem color="var(--orange, #DC7418)">Small</GridItem>
        <GridItem color="var(--blue, #1376CD)" style={{ padding: '40px 20px' }}>Large Item</GridItem>
        <GridItem color="var(--green, #1F8446)">Medium</GridItem>
      </>
    ),
  },
};

export const CardGrid: Story = {
  args: {
    columns: 3,
    gap: 20,
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
          <p style={{ margin: '0', color: 'var(--gray1, #595959)' }}>This is a card with content.</p>
        </div>
        <div style={{
          backgroundColor: 'var(--white, #ffffff)',
          border: '1px solid var(--gray3, #d9d9d9)',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Card 2</h4>
          <p style={{ margin: '0', color: 'var(--gray1, #595959)' }}>Another card with different content.</p>
        </div>
        <div style={{
          backgroundColor: 'var(--white, #ffffff)',
          border: '1px solid var(--gray3, #d9d9d9)',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Card 3</h4>
          <p style={{ margin: '0', color: 'var(--gray1, #595959)' }}>Third card in the grid.</p>
        </div>
      </>
    ),
  },
};

export const ButtonGrid: Story = {
  args: {
    columns: 4,
    gap: 10,
    children: (
      <>
        <FSPButton variant="primary" fullWidth>Primary</FSPButton>
        <FSPButton variant="secondary" fullWidth>Secondary</FSPButton>
        <FSPButton variant="outline" fullWidth>Outline</FSPButton>
        <FSPButton variant="ghost" fullWidth>Ghost</FSPButton>
      </>
    ),
  },
};

export const AutoFlow: Story = {
  args: {
    columns: 3,
    gap: 15,
    autoFlow: 'dense',
    children: (
      <>
        <GridItem color="var(--blue, #1376CD)" style={{ gridColumn: 'span 2' }}>Wide Item</GridItem>
        <GridItem color="var(--green, #1F8446)">Normal</GridItem>
        <GridItem color="var(--orange, #DC7418)">Normal</GridItem>
        <GridItem color="var(--purple, #5200D8)" style={{ gridRow: 'span 2' }}>Tall Item</GridItem>
        <GridItem color="var(--red, #d72919)">Normal</GridItem>
        <GridItem color="var(--gray1, #595959)">Normal</GridItem>
      </>
    ),
  },
};
