import type { Meta, StoryObj } from '@storybook/react';
import { FSPSelect } from './FSPSelect';
import { useState } from 'react';

const meta: Meta<typeof FSPSelect> = {
  title: 'FSP/Select',
  component: FSPSelect,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    labelSize: {
      control: { type: 'select' },
      options: ['small', 'regular'],
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['top', 'left'],
    },
    multiple: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    hasError: {
      control: 'boolean',
    },
    grayBackground: {
      control: 'boolean',
    },
    grayWhenDisabled: {
      control: 'boolean',
    },
    displayInline: {
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

const basicOptions = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
  { id: '4', label: 'Option 4', value: 'option4' },
];

const groupedOptions = [
  {
    name: 'Fruits',
    options: [
      { id: '1', label: 'Apple', value: 'apple' },
      { id: '2', label: 'Banana', value: 'banana' },
      { id: '3', label: 'Orange', value: 'orange' },
    ]
  },
  {
    name: 'Vegetables',
    options: [
      { id: '4', label: 'Carrot', value: 'carrot' },
      { id: '5', label: 'Broccoli', value: 'broccoli' },
      { id: '6', label: 'Spinach', value: 'spinach' },
    ]
  }
];

export const Basic: Story = {
  args: {
    label: 'Select Option',
    options: basicOptions,
    placeholder: 'Choose an option',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Selected Option',
    options: basicOptions,
    value: 'option2',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    options: basicOptions,
    required: true,
    placeholder: 'Please select',
  },
};

export const WithError: Story = {
  args: {
    label: 'Error State',
    options: basicOptions,
    hasError: true,
    errorMessage: 'This field is required',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Select with Hint',
    options: basicOptions,
    hint: 'Choose the best option for your needs',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: basicOptions,
    disabled: true,
    value: 'option1',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading State',
    options: basicOptions,
    loading: true,
  },
};

export const Multiple: Story = {
  args: {
    label: 'Multiple Selection',
    options: basicOptions,
    multiple: true,
    placeholder: 'Select multiple options',
  },
};

export const Grouped: Story = {
  args: {
    label: 'Grouped Options',
    groups: groupedOptions,
    placeholder: 'Choose from categories',
  },
};

export const SmallLabel: Story = {
  args: {
    label: 'Small Label',
    labelSize: 'small',
    options: basicOptions,
    hint: 'This has a small gray label',
  },
};

export const LeftLabel: Story = {
  args: {
    label: 'Left Positioned Label',
    labelPosition: 'left',
    options: basicOptions,
  },
};

export const GrayBackground: Story = {
  args: {
    label: 'Gray Background',
    options: basicOptions,
    grayBackground: true,
  },
};

export const Inline: Story = {
  args: {
    label: 'Inline Select',
    options: basicOptions,
    displayInline: true,
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: '',
      state: '',
      category: '',
    });

    const handleChange = (field: string) => (value: any) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    const countries = [
      { id: '1', label: 'United States', value: 'us' },
      { id: '2', label: 'Canada', value: 'ca' },
      { id: '3', label: 'United Kingdom', value: 'uk' },
    ];

    const states = [
      { id: '1', label: 'California', value: 'ca' },
      { id: '2', label: 'New York', value: 'ny' },
      { id: '3', label: 'Texas', value: 'tx' },
    ];

    const categories = [
      { id: '1', label: 'Technology', value: 'tech' },
      { id: '2', label: 'Healthcare', value: 'health' },
      { id: '3', label: 'Education', value: 'edu' },
    ];

    return (
      <div style={{ maxWidth: '400px' }}>
        <h3 style={{ marginBottom: '20px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>
          Form with Selects
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <FSPSelect
            label="Country"
            options={countries}
            value={formData.country}
            onChange={handleChange('country')}
            required
            placeholder="Select country"
          />
          <FSPSelect
            label="State"
            options={states}
            value={formData.state}
            onChange={handleChange('state')}
            placeholder="Select state"
          />
          <FSPSelect
            label="Category"
            options={categories}
            value={formData.category}
            onChange={handleChange('category')}
            placeholder="Select category"
          />
        </div>
        <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Form Data:</h4>
          <pre style={{ margin: 0, fontSize: '12px', fontFamily: 'monospace' }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};
