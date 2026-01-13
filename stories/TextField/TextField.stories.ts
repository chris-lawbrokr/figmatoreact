import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { TextField } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'form'],
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'focus', 'success'],
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyField: Story = {
  args: {
    state: 'default',
    label: 'Empty Field',
    placeholder: '',
    value: '',
  },
};

export const ErrorField: Story = {
  args: {
    state: 'error',
    label: 'Missing Text/Error',
    placeholder: '',
    value: 'John',
  },
};

export const FocusField: Story = {
  args: {
    state: 'focus',
    label: 'Selected/Typing',
    placeholder: '',
    value: 'John',
  },
};

export const SuccessField: Story = {
  args: {
    state: 'success',
    label: 'Success',
    placeholder: '',
    value: 'John',
  },
};

export const WithPlaceholder: Story = {
  args: {
    state: 'default',
    placeholder: 'Enter your name',
    value: '',
  },
};

export const Disabled: Story = {
  args: {
    state: 'default',
    placeholder: 'Disabled field',
    value: 'John',
    disabled: true,
  },
};

// Form variant stories
export const FormDefault: Story = {
  args: {
    variant: 'form',
    state: 'default',
    label: 'Email Address',
    placeholder: 'Enter your email',
    value: '',
  },
};

export const FormError: Story = {
  args: {
    variant: 'form',
    state: 'error',
    label: 'Email Address',
    placeholder: 'Enter your email',
    value: 'invalid@',
  },
};

export const FormFocus: Story = {
  args: {
    variant: 'form',
    state: 'focus',
    label: 'Email Address',
    placeholder: 'Enter your email',
    value: 'user@example.com',
  },
};

export const FormSuccess: Story = {
  args: {
    variant: 'form',
    state: 'success',
    label: 'Email Address',
    placeholder: 'Enter your email',
    value: 'user@example.com',
  },
};

export const FormNoLabel: Story = {
  args: {
    variant: 'form',
    state: 'default',
    placeholder: 'Search...',
    value: '',
  },
};

export const FormDisabled: Story = {
  args: {
    variant: 'form',
    state: 'default',
    label: 'Email Address',
    placeholder: 'Enter your email',
    value: 'user@example.com',
    disabled: true,
  },
};

// Border radius variants
export const BorderRadiusNone: Story = {
  args: {
    variant: 'form',
    borderRadius: 'none',
    state: 'default',
    label: 'No Border Radius',
    placeholder: 'Sharp corners',
    value: '',
  },
};

export const BorderRadiusSm: Story = {
  args: {
    variant: 'form',
    borderRadius: 'sm',
    state: 'default',
    label: 'Small Border Radius',
    placeholder: 'Slightly rounded',
    value: '',
  },
};

export const BorderRadiusMd: Story = {
  args: {
    variant: 'form',
    borderRadius: 'md',
    state: 'default',
    label: 'Medium Border Radius',
    placeholder: 'Medium rounded',
    value: '',
  },
};

export const BorderRadiusLg: Story = {
  args: {
    variant: 'form',
    borderRadius: 'lg',
    state: 'default',
    label: 'Large Border Radius (Default Form)',
    placeholder: 'Large rounded',
    value: '',
  },
};

export const BorderRadiusFull: Story = {
  args: {
    variant: 'form',
    borderRadius: 'full',
    state: 'default',
    label: 'Full Border Radius',
    placeholder: 'Pill shaped',
    value: '',
  },
};
