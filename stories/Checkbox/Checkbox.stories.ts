import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    label: 'Logo',
    withBackground: true,
  },
};

export const Checked: Story = {
  args: {
    label: 'Logo',
    checked: true,
    withBackground: true,
  },
};

export const WithoutBackground: Story = {
  args: {
    label: 'Logo',
    withBackground: false,
  },
};

export const WithoutLabel: Story = {
  args: {
    withBackground: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Logo',
    checked: true,
    disabled: true,
    withBackground: true,
  },
};
