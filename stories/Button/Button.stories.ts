import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outlined', 'option', 'selected-option', 'loading', 'success'],
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button',
  },
};

export const UnselectedOption: Story = {
  args: {
    variant: 'option',
    label: 'Button',
  },
};

export const SelectedOption: Story = {
  args: {
    variant: 'selected-option',
    label: 'Button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'loading',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
    disabled: true,
  },
};

export const DisabledOutlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Button',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Button',
  },
};

// Border radius variants
export const BorderRadiusNone: Story = {
  args: {
    variant: 'primary',
    borderRadius: 'none',
    label: 'Sharp Corners',
  },
};

export const BorderRadiusSm: Story = {
  args: {
    variant: 'primary',
    borderRadius: 'sm',
    label: 'Small Radius',
  },
};

export const BorderRadiusMd: Story = {
  args: {
    variant: 'primary',
    borderRadius: 'md',
    label: 'Medium Radius',
  },
};

export const BorderRadiusLg: Story = {
  args: {
    variant: 'primary',
    borderRadius: 'lg',
    label: 'Large Radius',
  },
};

export const BorderRadiusFull: Story = {
  args: {
    variant: 'primary',
    borderRadius: 'full',
    label: 'Pill Shape (Default)',
  },
};
