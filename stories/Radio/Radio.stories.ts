import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { RadioGroup } from './Radio';

const meta = {
  title: 'Example/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'radio-group',
    options: [
      { value: 'option1' },
      { value: 'option2' },
      { value: 'option3' },
    ],
  },
};

export const WithSelection: Story = {
  args: {
    name: 'radio-group-selected',
    options: [
      { value: 'option1' },
      { value: 'option2' },
      { value: 'option3' },
    ],
    value: 'option3',
  },
};

export const WithLabels: Story = {
  args: {
    name: 'radio-group-labels',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    name: 'radio-group-disabled',
    options: [
      { value: 'option1' },
      { value: 'option2' },
      { value: 'option3' },
    ],
    value: 'option2',
    disabled: true,
  },
};
