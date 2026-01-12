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
  title: 'Example/Card',
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

export const FullExample: Story = {
  args: {
    variant: 'elevated',
    clickable: true,
    onClick: fn(),
  },
  render: (args) => (
    <Card {...args} style={{ width: '380px' }}>
      <CardImage
        src="https://images.unsplash.com/photo-1518791415579-10f6a46e5c8c?w=400&h=300&fit=crop"
        alt="Tech workspace"
        aspectRatio="video"
      />
      <CardHeader>
        <CardTitle>Complete Card Example</CardTitle>
        <CardDescription>
          This card showcases all features: image, title, description, content, and footer with actions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
            Featured
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-option-selected text-text-dark">
            New
          </span>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-sm text-text-dark/60">Updated 2h ago</span>
        <button
          className="px-4 py-2 rounded-full border-none bg-primary text-white hover:opacity-90 transition-opacity text-sm"
          onClick={(e) => {
            e.stopPropagation();
            alert('View More clicked');
          }}
        >
          View More
        </button>
      </CardFooter>
    </Card>
  ),
};

export const ImageAspectRatios: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Card variant="elevated" style={{ width: '280px' }}>
        <CardImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
          alt="Square aspect"
          aspectRatio="square"
        />
        <CardHeader>
          <CardTitle>Square</CardTitle>
          <CardDescription>1:1 aspect ratio</CardDescription>
        </CardHeader>
      </Card>

      <Card variant="elevated" style={{ width: '320px' }}>
        <CardImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          alt="Video aspect"
          aspectRatio="video"
        />
        <CardHeader>
          <CardTitle>Video</CardTitle>
          <CardDescription>16:9 aspect ratio</CardDescription>
        </CardHeader>
      </Card>

      <Card variant="elevated" style={{ width: '380px' }}>
        <CardImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=200&fit=crop"
          alt="Wide aspect"
          aspectRatio="wide"
        />
        <CardHeader>
          <CardTitle>Wide</CardTitle>
          <CardDescription>21:9 aspect ratio</CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Card variant="outlined" style={{ width: '320px' }} className="hover:border-success">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-primary">Custom Styled Card</CardTitle>
        <CardDescription className="text-primary/70">
          All components accept className for custom styling
        </CardDescription>
      </CardHeader>
      <CardContent className="bg-option-selected/20">
        <p className="text-sm text-text-dark">
          You can customize each section independently with Tailwind classes.
        </p>
      </CardContent>
      <CardFooter className="bg-gray-50 justify-center">
        <button className="px-6 py-2 rounded-full bg-primary text-white hover:opacity-90 transition-opacity">
          Learn More
        </button>
      </CardFooter>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: '300px' }}>
      <CardImage
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
        alt="Product"
        aspectRatio="square"
      />
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>Premium Headphones</CardTitle>
          <span className="text-2xl font-bold text-primary">$299</span>
        </div>
        <CardDescription>
          High-quality wireless headphones with active noise cancellation.
        </CardDescription>
      </CardHeader>
      <CardFooter className="gap-2">
        <button className="flex-1 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors">
          Add to Cart
        </button>
        <button className="px-4 py-2 rounded-full bg-primary text-white hover:opacity-90 transition-opacity">
          Buy Now
        </button>
      </CardFooter>
    </Card>
  ),
};
