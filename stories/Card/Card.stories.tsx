import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
} from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'flat'],
    },
    clickable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
  },
  render: (args) => (
    <Card {...args} style={{ width: '320px' }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a card with elevated style that has a shadow effect. It provides a nice depth to the UI.
        </CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => (
    <Card {...args} style={{ width: '320px' }}>
      <CardHeader>
        <CardTitle>Outlined Card</CardTitle>
        <CardDescription>
          This card has a subtle border instead of a shadow. It provides a clean, minimal look.
        </CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const Flat: Story = {
  args: {
    variant: 'flat',
  },
  render: (args) => (
    <Card {...args} style={{ width: '320px' }}>
      <CardHeader>
        <CardTitle>Flat Card</CardTitle>
        <CardDescription>
          This card has minimal styling with just a light border. Perfect for content-focused designs.
        </CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const WithImage: Story = {
  args: {
    variant: 'elevated',
  },
  render: (args) => (
    <Card {...args} style={{ width: '320px' }}>
      <CardImage
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
        alt="Beautiful landscape"
        aspectRatio="video"
      />
      <CardHeader>
        <CardTitle>Beautiful Landscape</CardTitle>
        <CardDescription>
          This card includes an image at the top, perfect for visual content like blog posts or products.
        </CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const WithContent: Story = {
  args: {
    variant: 'elevated',
  },
  render: (args) => (
    <Card {...args} style={{ width: '320px' }}>
      <CardHeader>
        <CardTitle>Card with Content</CardTitle>
        <CardDescription>
          This demonstrates the CardContent section for additional body content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-text-dark/60">Additional content can go here.</p>
          <ul className="list-disc list-inside text-sm text-text-dark/60 space-y-1">
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  args: {
    variant: 'elevated',
  },
  render: (args) => (
    <Card {...args} style={{ width: '320px' }}>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>
          This card demonstrates footer content which can contain actions or additional information.
        </CardDescription>
      </CardHeader>
      <CardFooter className="gap-2">
        <button
          className="px-4 py-2 rounded-full border border-border-gray bg-white hover:bg-gray-50 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            alert('Cancel clicked');
          }}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 rounded-full border-none bg-primary text-white hover:opacity-90 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            alert('Action clicked');
          }}
        >
          Action
        </button>
      </CardFooter>
    </Card>
  ),
};

export const Clickable: Story = {
  args: {
    variant: 'elevated',
    clickable: true,
    onClick: fn(),
  },
  render: (args) => (
    <Card {...args} style={{ width: '320px' }}>
      <CardHeader>
        <CardTitle>Clickable Card</CardTitle>
        <CardDescription>
          This card can be clicked and will trigger an action. It has hover effects to indicate interactivity.
        </CardDescription>
      </CardHeader>
    </Card>
  ),
};
