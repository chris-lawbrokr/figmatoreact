import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number', min: 50, max: 500, step: 10 },
    },
    height: {
      control: { type: 'number', min: 20, max: 200, step: 10 },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 150,
    height: 50,
  },
};

export const Large: Story = {
  args: {
    width: 300,
    height: 100,
  },
};

export const Small: Story = {
  args: {
    width: 100,
    height: 33,
  },
};
