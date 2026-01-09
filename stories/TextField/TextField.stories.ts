import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { TextField } from './TextField';

const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
