import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SelectButton } from './SelectButton';

const meta = {
  title: 'Components/SelectButton',
  component: SelectButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultSelected: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
  args: {
    label: 'Option 1',
    defaultSelected: false,
  },
};

export const Selected: Story = {
  args: {
    label: 'Option 1',
    defaultSelected: true,
  },
};

export const Interactive = {
  render: () => (
    <div className="flex gap-3">
      <SelectButton label="Option 1" />
      <SelectButton label="Option 2" />
      <SelectButton label="Option 3" />
    </div>
  ),
};

export const MultipleRows = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-md">
      <div className="flex gap-3">
        <SelectButton label="Small (1-10)" />
        <SelectButton label="Medium (11-50)" />
      </div>
      <div className="flex gap-3">
        <SelectButton label="Large (51-200)" />
        <SelectButton label="Enterprise (200+)" />
      </div>
    </div>
  ),
};
