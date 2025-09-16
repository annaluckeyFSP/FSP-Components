import type { Meta, StoryObj } from '@storybook/react';
import { FSPSpacing } from './FSPSpacing';
import { FSPButton } from '../FSPButton/FSPButton';

const meta: Meta<typeof FSPSpacing> = {
  title: 'FSP/Spacing',
  component: FSPSpacing,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    margin: {
      control: 'number',
    },
    padding: {
      control: 'number',
    },
    gap: {
      control: 'number',
    },
    fullWidth: {
      control: 'boolean',
    },
    display: {
      control: { type: 'select' },
      options: ['block', 'inline', 'inline-block', 'flex', 'grid', 'none'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = ({ text, color = 'var(--blue, #1376CD)' }: { text: string; color?: string }) => (
  <div style={{
    backgroundColor: color,
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: '500'
  }}>
    {text}
  </div>
);

export const Basic: Story = {
  args: {
    children: <SampleContent text="Basic spacing" />,
  },
};

export const WithMargin: Story = {
  args: {
    margin: 20,
    children: <SampleContent text="With 20px margin" />,
  },
};

export const WithPadding: Story = {
  args: {
    padding: 30,
    children: <SampleContent text="With 30px padding" />,
  },
};

export const WithGap: Story = {
  args: {
    gap: 15,
    display: 'flex',
    children: (
      <>
        <SampleContent text="Item 1" color="var(--red, #d72919)" />
        <SampleContent text="Item 2" color="var(--green, #1F8446)" />
        <SampleContent text="Item 3" color="var(--orange, #DC7418)" />
      </>
    ),
  },
};

export const MarginVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4>Margin Top: 10px</h4>
        <FSPSpacing marginTop={10}>
          <SampleContent text="Top margin" />
        </FSPSpacing>
      </div>
      
      <div>
        <h4>Margin Right: 15px</h4>
        <FSPSpacing marginRight={15} display="inline-block">
          <SampleContent text="Right margin" />
        </FSPSpacing>
        <span>Text after</span>
      </div>
      
      <div>
        <h4>Margin Bottom: 20px</h4>
        <FSPSpacing marginBottom={20}>
          <SampleContent text="Bottom margin" />
        </FSPSpacing>
        <SampleContent text="Next item" color="var(--gray1, #595959)" />
      </div>
      
      <div>
        <h4>Margin Left: 25px</h4>
        <FSPSpacing marginLeft={25} display="inline-block">
          <SampleContent text="Left margin" />
        </FSPSpacing>
      </div>
    </div>
  ),
};

export const PaddingVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4>Padding: 10px</h4>
        <FSPSpacing padding={10} style={{ backgroundColor: 'var(--gray5, #fafafa)', border: '1px solid var(--gray3, #d9d9d9)' }}>
          <SampleContent text="All sides padding" color="var(--blue, #1376CD)" />
        </FSPSpacing>
      </div>
      
      <div>
        <h4>Padding Top: 15px</h4>
        <FSPSpacing paddingTop={15} style={{ backgroundColor: 'var(--gray5, #fafafa)', border: '1px solid var(--gray3, #d9d9d9)' }}>
          <SampleContent text="Top padding" color="var(--green, #1F8446)" />
        </FSPSpacing>
      </div>
      
      <div>
        <h4>Padding Left/Right: 20px</h4>
        <FSPSpacing paddingLeft={20} paddingRight={20} style={{ backgroundColor: 'var(--gray5, #fafafa)', border: '1px solid var(--gray3, #d9d9d9)' }}>
          <SampleContent text="Horizontal padding" color="var(--orange, #DC7418)" />
        </FSPSpacing>
      </div>
    </div>
  ),
};

export const FlexWithGap: Story = {
  args: {
    display: 'flex',
    gap: 20,
    padding: 20,
    style: { backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '8px' },
    children: (
      <>
        <SampleContent text="Flex Item 1" />
        <SampleContent text="Flex Item 2" color="var(--red, #d72919)" />
        <SampleContent text="Flex Item 3" color="var(--green, #1F8446)" />
      </>
    ),
  },
};

export const GridWithGap: Story = {
  args: {
    display: 'grid',
    gap: 15,
    padding: 20,
    style: { 
      backgroundColor: 'var(--gray5, #fafafa)', 
      borderRadius: '8px',
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    children: (
      <>
        <SampleContent text="Grid 1" />
        <SampleContent text="Grid 2" color="var(--purple, #5200D8)" />
        <SampleContent text="Grid 3" color="var(--orange, #DC7418)" />
        <SampleContent text="Grid 4" color="var(--red, #d72919)" />
        <SampleContent text="Grid 5" color="var(--green, #1F8446)" />
        <SampleContent text="Grid 6" color="var(--gray1, #595959)" />
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    padding: 20,
    style: { backgroundColor: 'var(--blue, #1376CD)' },
    children: <SampleContent text="Full Width Container" color="white" />,
  },
};

export const ButtonSpacing: Story = {
  args: {
    display: 'flex',
    gap: 10,
    margin: 20,
    children: (
      <>
        <FSPButton variant="primary">Primary</FSPButton>
        <FSPButton variant="secondary">Secondary</FSPButton>
        <FSPButton variant="white">White</FSPButton>
      </>
    ),
  },
};

export const FormSpacing: Story = {
  args: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    padding: 20,
    style: { 
      backgroundColor: 'var(--white, #ffffff)', 
      border: '1px solid var(--gray3, #d9d9d9)',
      borderRadius: '8px',
      maxWidth: '400px'
    },
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
        <FSPSpacing display="flex" justifyContent="flex-end" gap={10}>
          <FSPButton variant="secondary">Cancel</FSPButton>
          <FSPButton variant="primary">Submit</FSPButton>
        </FSPSpacing>
      </>
    ),
  },
};

export const UtilityClasses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4>Using Utility Classes</h4>
        <p>These are the predefined spacing utilities available:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '10px' }}>
          <div style={{ padding: '10px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '4px' }}>
            <strong>Margin:</strong> m0, m5, m10, m15, m20, m25, m30, m35, m40
          </div>
          <div style={{ padding: '10px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '4px' }}>
            <strong>Padding:</strong> p0, p5, p10, p15, p20, p25, p30, p35, p40
          </div>
          <div style={{ padding: '10px', backgroundColor: 'var(--gray5, #fafafa)', borderRadius: '4px' }}>
            <strong>Gap:</strong> gap0, gap5, gap10, gap15, gap20, gap25, gap30, gap35, gap40
          </div>
        </div>
      </div>
    </div>
  ),
};
