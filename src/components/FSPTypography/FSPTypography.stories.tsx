import type { Meta, StoryObj } from '@storybook/react';
import { FSPTypography } from './FSPTypography';

const meta: Meta<typeof FSPTypography> = {
  title: 'FSP/Typography',
  component: FSPTypography,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'body', 'secondary', 'caption', 'error', 'hint'],
    },
    color: {
      control: { type: 'select' },
      options: ['black', 'gray1', 'gray2', 'blue', 'red', 'green', 'orange', 'white'],
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'bold'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    underline: {
      control: { type: 'boolean' },
    },
    noMargin: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text - This is the default body text style used throughout the application.',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary text - Used for less important information.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text - Used for small labels and descriptions.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    color: 'red',
    children: 'Error message - Used for validation errors and warnings.',
  },
};

export const Hint: Story = {
  args: {
    variant: 'hint',
    color: 'gray1',
    children: 'Hint text - Used for form field hints and help text.',
  },
};

export const BlueLink: Story = {
  args: {
    variant: 'body',
    color: 'blue',
    underline: true,
    children: 'Clickable link text',
  },
};

export const Bold: Story = {
  args: {
    variant: 'body',
    weight: 'bold',
    children: 'Bold text for emphasis',
  },
};

export const Centered: Story = {
  args: {
    variant: 'h3',
    align: 'center',
    children: 'Centered heading',
  },
};

export const AllHeadings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <FSPTypography variant="h1">Heading 1</FSPTypography>
      <FSPTypography variant="h2">Heading 2</FSPTypography>
      <FSPTypography variant="h3">Heading 3</FSPTypography>
      <FSPTypography variant="h4">Heading 4</FSPTypography>
      <FSPTypography variant="h5">Heading 5</FSPTypography>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#f5f5f5', padding: '16px' }}>
      <FSPTypography color="black">Black text</FSPTypography>
      <FSPTypography color="gray1">Gray1 text</FSPTypography>
      <FSPTypography color="gray2">Gray2 text</FSPTypography>
      <FSPTypography color="blue">Blue text</FSPTypography>
      <FSPTypography color="red">Red text</FSPTypography>
      <FSPTypography color="green">Green text</FSPTypography>
      <FSPTypography color="orange">Orange text</FSPTypography>
      <div style={{ backgroundColor: '#333', padding: '8px' }}>
        <FSPTypography color="white">White text</FSPTypography>
      </div>
    </div>
  ),
};

export const TypographyScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <FSPTypography variant="h1" noMargin>Typography Scale</FSPTypography>
        <FSPTypography variant="body" color="gray1" noMargin>A comprehensive text hierarchy for FSP applications</FSPTypography>
      </div>
      
      <div>
        <FSPTypography variant="h2" noMargin>Headings</FSPTypography>
        <FSPTypography variant="h3" noMargin>Subheading</FSPTypography>
        <FSPTypography variant="body" noMargin>
          This is body text that provides the main content. It should be readable and comfortable to read in long paragraphs.
        </FSPTypography>
        <FSPTypography variant="secondary" noMargin>
          Secondary text is used for less important information like timestamps or metadata.
        </FSPTypography>
      </div>
      
      <div>
        <FSPTypography variant="h4" noMargin>Form Elements</FSPTypography>
        <FSPTypography variant="caption" noMargin>Caption text for form labels</FSPTypography>
        <FSPTypography variant="hint" color="gray1" noMargin>Hint text for form field guidance</FSPTypography>
        <FSPTypography variant="error" color="red" noMargin>Error message for validation feedback</FSPTypography>
      </div>
      
      <div>
        <FSPTypography variant="h4" noMargin>Interactive Elements</FSPTypography>
        <FSPTypography variant="body" color="blue" underline noMargin>Clickable link text</FSPTypography>
        <FSPTypography variant="body" weight="bold" noMargin>Bold text for emphasis</FSPTypography>
      </div>
    </div>
  ),
};
