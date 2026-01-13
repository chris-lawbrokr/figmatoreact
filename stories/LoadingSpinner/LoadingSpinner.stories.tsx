import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

const meta = {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 16, max: 128, step: 8 },
    },
    absolute: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 32,
    absolute: false,
  },
};

export const WithTitle: Story = {
  args: {
    size: 32,
    title: 'Loading',
    absolute: false,
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    size: 32,
    title: 'Loading',
    subtitle: 'Please wait...',
    absolute: false,
  },
};

export const WithLongerText: Story = {
  args: {
    size: 32,
    title: 'Processing your request',
    subtitle: 'This may take a few moments',
    absolute: false,
  },
};

export const Small: Story = {
  args: {
    size: 16,
    absolute: false,
  },
};

export const Medium: Story = {
  args: {
    size: 32,
    absolute: false,
  },
};

export const Large: Story = {
  args: {
    size: 48,
    title: 'Loading',
    subtitle: 'Please wait...',
    absolute: false,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 64,
    title: 'Loading',
    subtitle: 'Please wait...',
    absolute: false,
  },
};

export const Absolute: Story = {
  args: {
    size: 32,
    absolute: true,
  },
  render: (args) => (
    <div
      style={{ position: 'relative', width: '200px', height: '200px', border: '2px dashed #ddd' }}
    >
      <LoadingSpinner {...args} />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <button
      className="inline-flex items-center justify-center px-8 py-3 text-xl rounded-md bg-primary text-white"
      disabled
    >
      <LoadingSpinner size={24} className="mr-4" />
      Loading...
    </button>
  ),
};

export const Centered: Story = {
  render: () => (
    <div
      style={{
        width: '300px',
        height: '200px',
        border: '2px dashed #ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LoadingSpinner size={48} title="Loading" subtitle="Please wait..." />
    </div>
  ),
};
