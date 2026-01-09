import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Slider } from './Slider';

const meta = {
  title: 'Example/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 10,
    label: 'Slider',
    min: 0,
    max: 100,
  },
};

export const CustomRange: Story = {
  args: {
    value: 5,
    label: 'Slider',
    min: 0,
    max: 10,
  },
};

export const WithStep: Story = {
  args: {
    value: 25,
    label: 'Slider',
    min: 0,
    max: 100,
    step: 25,
  },
};

export const Disabled: Story = {
  args: {
    value: 50,
    label: 'Slider',
    min: 0,
    max: 100,
    disabled: true,
  },
};
