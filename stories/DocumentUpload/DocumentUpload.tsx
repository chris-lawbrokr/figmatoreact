'use client';
import { useRef, useState } from 'react';

export interface DocumentUploadProps {
  /** Callback when file is selected */
  onFileSelect?: (file: File) => void;
  /** Accepted file types */
  accept?: string;
  /** Label text for the upload area */
  label?: string;
  /** Maximum file size in bytes */
  maxSize?: number;
}

/** Document upload component with drag and drop functionality */
export const DocumentUpload = ({
  onFileSelect,
  accept = 'image/*',
  label = 'Drag and drop your logo here, or:',
  maxSize,
}: DocumentUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (maxSize && file.size > maxSize) {
      console.error(`File size exceeds maximum of ${maxSize} bytes`);
      return;
    }
    onFileSelect?.(file);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        flex flex-col justify-center items-center gap-2 self-stretch
        rounded-lg border-2 border-dashed
        py-4 px-12
        transition-colors duration-200
        ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-200 bg-gray-50'}
      `}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileInput}
        className="hidden"
      />

      <p className="text-base text-gray-500 mb-2">{label}</p>

      {/* Monitor Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_612_10035)">
            <path
              d="M14.4 0H1.6C1.17565 0 0.768687 0.168571 0.468629 0.468629C0.168571 0.768687 0 1.17565 0 1.6V10.4C0 10.8243 0.168571 11.2313 0.468629 11.5314C0.768687 11.8314 1.17565 12 1.6 12H7.2V14.4H4.8C4.58783 14.4 4.38434 14.4843 4.23431 14.6343C4.08429 14.7843 4 14.9878 4 15.2C4 15.4122 4.08429 15.6157 4.23431 15.7657C4.38434 15.9157 4.58783 16 4.8 16H11.2C11.4122 16 11.6157 15.9157 11.7657 15.7657C11.9157 15.6157 12 15.4122 12 15.2C12 14.9878 11.9157 14.7843 11.7657 14.6343C11.6157 14.4843 11.4122 14.4 11.2 14.4H8.8V12H14.4C14.8243 12 15.2313 11.8314 15.5314 11.5314C15.8314 11.2313 16 10.8243 16 10.4V1.6C16 1.17565 15.8314 0.768687 15.5314 0.468629C15.2313 0.168571 14.8243 0 14.4 0ZM14.4 1.6V8H1.6V1.6H14.4Z"
              fill="#665687"
            />
          </g>
          <defs>
            <clipPath id="clip0_612_10035">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Browse Button */}
      <button
        type="button"
        onClick={handleBrowseClick}
        className="text-base text-gray-700 font-medium hover:text-primary transition-colors cursor-pointer"
      >
        Browse
      </button>
    </div>
  );
};
