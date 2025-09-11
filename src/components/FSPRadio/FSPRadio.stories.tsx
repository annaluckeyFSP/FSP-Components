import type { Meta, StoryObj } from '@storybook/react';
import { FSPRadio, FSPRadioGroup } from './FSPRadio';
import { useState } from 'react';

const meta: Meta<typeof FSPRadioGroup> = {
  title: 'FSP/Radio',
  component: FSPRadioGroup,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    labelSize: {
      control: { type: 'select' },
      options: ['small', 'regular'],
    },
    direction: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    solid: {
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

const basicOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const disabledOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2 (Disabled)', disabled: true },
  { value: 'option3', label: 'Option 3' },
];

export const Basic: Story = {
  args: {
    label: 'Select Option',
    options: basicOptions,
    name: 'basic-radio',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Pre-selected Option',
    options: basicOptions,
    value: 'option2',
    name: 'preselected-radio',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Selection',
    options: basicOptions,
    required: true,
    name: 'required-radio',
  },
};

export const WithError: Story = {
  args: {
    label: 'Error State',
    options: basicOptions,
    hasError: true,
    name: 'error-radio',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Group',
    options: basicOptions,
    disabled: true,
    name: 'disabled-radio',
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: 'Mixed Options',
    options: disabledOptions,
    name: 'mixed-radio',
  },
};

export const SmallLabel: Story = {
  args: {
    label: 'Small Label',
    labelSize: 'small',
    options: basicOptions,
    name: 'small-radio',
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Horizontal Layout',
    options: basicOptions,
    direction: 'horizontal',
    name: 'horizontal-radio',
  },
};

export const Solid: Story = {
  args: {
    label: 'Solid Style',
    options: basicOptions,
    solid: true,
    name: 'solid-radio',
  },
};

export const Inverted: Story = {
  args: {
    label: 'Inverted Style',
    options: basicOptions,
    inverted: true,
    name: 'inverted-radio',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '4px' }}>
        <Story />
      </div>
    ),
  ],
};

export const IndividualRadio: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option2');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>
          Individual Radio Buttons
        </h3>
        <FSPRadio
          value="option1"
          selectedValue={selectedValue}
          onChange={setSelectedValue}
          label="Option 1"
          name="individual-radio"
        />
        <FSPRadio
          value="option2"
          selectedValue={selectedValue}
          onChange={setSelectedValue}
          label="Option 2 (Pre-selected)"
          name="individual-radio"
        />
        <FSPRadio
          value="option3"
          selectedValue={selectedValue}
          onChange={setSelectedValue}
          label="Option 3"
          name="individual-radio"
        />
        <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>Selected Value:</h4>
          <pre style={{ margin: 0, fontSize: '12px', fontFamily: 'monospace' }}>
            {selectedValue}
          </pre>
        </div>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      paymentMethod: '',
      subscription: '',
      notifications: '',
    });

    const handleChange = (field: string) => (value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    const paymentOptions = [
      { value: 'credit', label: 'Credit Card' },
      { value: 'debit', label: 'Debit Card' },
      { value: 'paypal', label: 'PayPal' },
    ];

    const subscriptionOptions = [
      { value: 'monthly', label: 'Monthly' },
      { value: 'yearly', label: 'Yearly' },
      { value: 'lifetime', label: 'Lifetime' },
    ];

    const notificationOptions = [
      { value: 'email', label: 'Email' },
      { value: 'sms', label: 'SMS' },
      { value: 'push', label: 'Push Notifications' },
    ];

    return (
      <div style={{ maxWidth: '500px' }}>
        <h3 style={{ marginBottom: '20px', fontFamily: 'var(--mainFont, Roboto, sans-serif)' }}>
          Form with Radio Groups
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <FSPRadioGroup
            label="Payment Method"
            options={paymentOptions}
            value={formData.paymentMethod}
            onChange={handleChange('paymentMethod')}
            required
            name="payment-method"
          />
          <FSPRadioGroup
            label="Subscription Plan"
            options={subscriptionOptions}
            value={formData.subscription}
            onChange={handleChange('subscription')}
            name="subscription"
          />
          <FSPRadioGroup
            label="Notification Preferences"
            options={notificationOptions}
            value={formData.notifications}
            onChange={handleChange('notifications')}
            name="notifications"
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
