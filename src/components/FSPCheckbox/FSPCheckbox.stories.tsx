import type { Meta, StoryObj } from '@storybook/react';
import { FSPCheckbox } from './FSPCheckbox';
import { useState } from 'react';

const meta: Meta<typeof FSPCheckbox> = {
  title: 'FSP/Checkbox',
  component: FSPCheckbox,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    labelSize: {
      control: { type: 'select' },
      options: ['small', 'regular'],
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    bold: {
      control: 'boolean',
    },
    inactive: {
      control: 'boolean',
    },
    whiteSpaceWrap: {
      control: 'boolean',
    },
    inverted: {
      control: 'boolean',
    },
    hasError: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic Checkbox',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Checkbox',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    disabled: true,
    checked: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Error State',
    hasError: true,
  },
};

export const SmallLabel: Story = {
  render: () => {
    const [selections, setSelections] = useState({
      option1: false,
      option2: true,
      option3: false,
    });

    const handleChange = (key: string) => (checked: boolean) => {
      setSelections(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ 
          fontSize: '12px', 
          fontWeight: '500', 
          color: 'var(--gray1, #595959)', 
          marginBottom: '4px',
          fontFamily: 'var(--mainFont, Roboto, sans-serif)'
        }}>
          Select Options
        </label>
        <FSPCheckbox
          label="Option 1"
          checked={selections.option1}
          onChange={handleChange('option1')}
        />
        <FSPCheckbox
          label="Option 2 (Pre-selected)"
          checked={selections.option2}
          onChange={handleChange('option2')}
        />
        <FSPCheckbox
          label="Option 3"
          checked={selections.option3}
          onChange={handleChange('option3')}
        />
      </div>
    );
  },
};

export const Bold: Story = {
  args: {
    label: 'Bold Label',
    bold: true,
  },
};

export const Inactive: Story = {
  args: {
    label: 'Inactive Checkbox',
    inactive: true,
  },
};

export const Inverted: Story = {
  args: {
    label: 'Inverted Style',
    inverted: true,
    checked: true,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '4px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LongText: Story = {
  args: {
    label: 'This is a very long label that should wrap to multiple lines when the whiteSpaceWrap prop is enabled',
    whiteSpaceWrap: true,
  },
};

export const NoLabel: Story = {
  args: {
    checked: true,
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [selections, setSelections] = useState({
      option1: false,
      option2: true,
      option3: false,
    });

    const handleChange = (key: string) => (checked: boolean) => {
      setSelections(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ 
          fontSize: '14px', 
          fontWeight: '500', 
          color: 'var(--black, #000000)', 
          marginBottom: '4px',
          fontFamily: 'var(--mainFont, Roboto, sans-serif)'
        }}>
          Checkbox Group
        </label>
        <FSPCheckbox
          label="Option 1"
          checked={selections.option1}
          onChange={handleChange('option1')}
        />
        <FSPCheckbox
          label="Option 2 (Pre-selected)"
          checked={selections.option2}
          onChange={handleChange('option2')}
        />
        <FSPCheckbox
          label="Option 3"
          checked={selections.option3}
          onChange={handleChange('option3')}
        />
        <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Selections:</h4>
          <pre style={{ margin: 0, fontSize: '12px', fontFamily: 'monospace' }}>
            {JSON.stringify(selections, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};
