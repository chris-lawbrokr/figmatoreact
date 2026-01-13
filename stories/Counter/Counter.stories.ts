import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Counter } from './Counter';

const meta = {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    label: 'Counter',
  },
};

export const WithValue: Story = {
  args: {
    value: 5,
    label: 'Counter',
  },
};

export const AtMinimum: Story = {
  args: {
    value: 0,
    min: 0,
    max: 10,
    label: 'Counter',
  },
};

export const AtMaximum: Story = {
  args: {
    value: 10,
    min: 0,
    max: 10,
    label: 'Counter',
  },
};

export const Disabled: Story = {
  args: {
    value: 5,
    label: 'Counter',
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    value: 0,
  },
};
