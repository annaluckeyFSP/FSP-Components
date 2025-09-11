import type { Meta, StoryObj } from '@storybook/react';
import { FSPColorPalette } from './FSPColorPalette';

const meta: Meta<typeof FSPColorPalette> = {
  title: 'FSP/Color Palette',
  component: FSPColorPalette,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive color palette showcasing all FSP-V4 design system colors with their CSS variables, hex values, and usage examples.',
      },
    },
  },
  argTypes: {
    showHexValues: {
      control: 'boolean',
      description: 'Show hex color values',
    },
    showCSSVariables: {
      control: 'boolean',
      description: 'Show CSS variable names',
    },
    showUsageExamples: {
      control: 'boolean',
      description: 'Show usage examples and descriptions',
    },
    compact: {
      control: 'boolean',
      description: 'Use compact layout with smaller cards',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FSPColorPalette>;

export const Compact: Story = {
  args: {
    showHexValues: true,
    showCSSVariables: true,
    showUsageExamples: true,
    compact: true,
  },
};
