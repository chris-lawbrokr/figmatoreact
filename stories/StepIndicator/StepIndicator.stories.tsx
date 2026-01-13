import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StepIndicator } from './StepIndicator';

const meta = {
  title: 'Components/StepIndicator',
  component: StepIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstStep: Story = {
  args: {
    steps: [
      { label: 'Personal Info', status: 'active' },
      { label: 'Account Info', status: 'inactive' },
      { label: 'Confirmation', status: 'inactive' },
    ],
  },
};

export const SecondStep: Story = {
  args: {
    steps: [
      { label: 'Personal Info', status: 'completed' },
      { label: 'Account Info', status: 'active' },
      { label: 'Confirmation', status: 'inactive' },
    ],
  },
};

export const ThirdStep: Story = {
  args: {
    steps: [
      { label: 'Personal Info', status: 'completed' },
      { label: 'Account Info', status: 'completed' },
      { label: 'Confirmation', status: 'active' },
    ],
  },
};

export const AllCompleted: Story = {
  args: {
    steps: [
      { label: 'Personal Info', status: 'completed' },
      { label: 'Account Info', status: 'completed' },
      { label: 'Confirmation', status: 'completed' },
    ],
  },
};
