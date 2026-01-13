import type { Meta, StoryObj } from '@storybook/react';
import { IconGallery } from './IconGallery';
import { Icon } from './Icon';
import { icons } from './icons.config';

const meta = {
  title: 'Components/Icon',
  component: IconGallery,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    iconSize: {
      control: { type: 'number', min: 16, max: 64, step: 8 },
    },
    columns: {
      control: { type: 'number', min: 2, max: 8, step: 1 },
    },
  },
} satisfies Meta<typeof IconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  args: {
    icons: icons,
    iconSize: 24,
    columns: 4,
  },
};

export const LargeIcons: Story = {
  args: {
    icons: icons,
    iconSize: 48,
    columns: 3,
  },
};

export const SmallIcons: Story = {
  args: {
    icons: icons,
    iconSize: 16,
    columns: 6,
  },
};

export const TwoColumns: Story = {
  args: {
    icons: icons,
    iconSize: 32,
    columns: 2,
  },
};

// Individual icon examples
export const PauseIcon: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Icon name="pause" src="/icons/pause.svg" size={16} />
      <Icon name="pause" src="/icons/pause.svg" size={24} />
      <Icon name="pause" src="/icons/pause.svg" size={32} />
      <Icon name="pause" src="/icons/pause.svg" size={48} />
    </div>
  ),
};

export const XCircleIcon: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Icon name="x-circle" src="/icons/x-circle.svg" size={16} />
      <Icon name="x-circle" src="/icons/x-circle.svg" size={24} />
      <Icon name="x-circle" src="/icons/x-circle.svg" size={32} />
      <Icon name="x-circle" src="/icons/x-circle.svg" size={48} />
    </div>
  ),
};
