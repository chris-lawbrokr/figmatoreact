import type { Meta, StoryObj } from '@storybook/react';
import { DocumentUpload } from './DocumentUpload';

const meta = {
  title: 'Components/DocumentUpload',
  component: DocumentUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DocumentUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Drag and drop your logo here, or:',
    accept: 'image/*',
    onFileSelect: (file: File) => {
      console.log('File selected:', file.name);
    },
  },
};

export const WithCustomLabel: Story = {
  args: {
    label: 'Drag and drop your document here, or:',
    accept: '.pdf,.doc,.docx',
    onFileSelect: (file: File) => {
      console.log('File selected:', file.name);
    },
  },
};

export const WithMaxSize: Story = {
  args: {
    label: 'Drag and drop your logo here (max 5MB), or:',
    accept: 'image/*',
    maxSize: 5 * 1024 * 1024, // 5MB
    onFileSelect: (file: File) => {
      console.log('File selected:', file.name);
    },
  },
};
