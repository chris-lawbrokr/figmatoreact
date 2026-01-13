import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { NavigationLink } from './NavigationLink';

const meta = {
  title: 'Components/NavigationLink',
  component: NavigationLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['prev', 'next'],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof NavigationLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Previous: Story = {
  args: {
    label: 'Go back',
    direction: 'prev',
  },
};

export const Next: Story = {
  args: {
    label: 'Skip this step',
    direction: 'next',
  },
};

export const BothDirections = {
  render: () => (
    <div className="flex justify-between w-80">
      <NavigationLink label="Go back" direction="prev" onClick={() => console.log('Go back')} />
      <NavigationLink label="Skip this step" direction="next" onClick={() => console.log('Skip')} />
    </div>
  ),
};
