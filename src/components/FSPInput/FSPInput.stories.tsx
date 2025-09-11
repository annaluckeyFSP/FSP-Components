import type { Meta, StoryObj } from '@storybook/react';
import { FSPInput } from './FSPInput';
import { useState } from 'react';

const meta: Meta<typeof FSPInput> = {
  title: 'FSP/Input',
  component: FSPInput,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    labelSize: {
      control: { type: 'select' },
      options: ['small', 'regular'],
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['top', 'left'],
    },
    counterPosition: {
      control: { type: 'select' },
      options: ['inline', 'bottom'],
    },
    inputMode: {
      control: { type: 'select' },
      options: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Name',
  },
};

export const InlineHint: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: 'john.doe@example.com',
    placeholder: 'Enter your email',
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    type: 'password',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: 'invalid-email',
    errorMessage: 'Please enter a valid email address',
    hasError: true,
  },
};

export const WithHint: Story = {
  args: {
    label: 'Phone Number',
    type: 'tel',
    hint: 'Include country code for international numbers',
  },
};

export const WithCounter: Story = {
  args: {
    label: 'Description',
    maxLength: 100,
    showCounter: true,
    counterPosition: 'bottom',
  },
};

export const InlineCounter: Story = {
  args: {
    label: 'Title',
    maxLength: 50,
    showCounter: true,
    counterPosition: 'inline',
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'Website',
    type: 'url',
    prefix: 'https://',
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Price',
    type: 'number',
    suffix: 'USD',
  },
};

export const Currency: Story = {
  args: {
    label: 'Amount',
    type: 'number',
    currencySymbol: '$',
    placesAfterDecimal: 2,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Search',
    type: 'search',
    icon: '🔍',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'This field is disabled',
    disabled: true,
  },
};

export const GrayWhenDisabled: Story = {
  args: {
    label: 'Gray Disabled Field',
    value: 'This field is disabled with gray background',
    disabled: true,
    grayWhenDisabled: true,
  },
};

export const LeftLabel: Story = {
  args: {
    label: 'Left Label',
    labelPosition: 'left',
    fullWidth: false,
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Quantity',
    type: 'number',
    inputMode: 'numeric',
    min: 0,
    max: 100,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <FSPInput
          label="Controlled Input"
          value={value}
          onChange={setValue}
          placeholder="Type something..."
        />
        <div style={{ padding: '8px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '4px' }}>
          <strong>Current value:</strong> {value || '(empty)'}
        </div>
      </div>
    );
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <FSPInput
        label="Text Input"
        type="text"
      />
      <FSPInput
        label="Email Input"
        type="email"
      />
      <FSPInput
        label="Password Input"
        type="password"
      />
      <FSPInput
        label="Number Input"
        type="number"
      />
      <FSPInput
        label="Phone Input"
        type="tel"
      />
      <FSPInput
        label="URL Input"
        type="url"
      />
      <FSPInput
        label="Search Input"
        type="search"
      />
    </div>
  ),
};

export const SmallLabel: Story = {
  args: {
    label: 'Small Label',
    labelSize: 'small',
    hint: 'This input has a small gray label',
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
    });

    const handleChange = (field: string) => (value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
      <div style={{ maxWidth: '400px' }}>
        <h3 style={{ marginBottom: '20px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>
          Contact Information
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <FSPInput
            label="First Name"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            required
          />
          <FSPInput
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            required
          />
          <FSPInput
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            required
          />
          <FSPInput
            label="Phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange('phone')}
          />
          <FSPInput
            label="Company"
            value={formData.company}
            onChange={handleChange('company')}
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
