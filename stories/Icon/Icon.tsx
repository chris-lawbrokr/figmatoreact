'use client';
import Image from 'next/image';

export interface IconProps {
  /** Icon name */
  name: string;
  /** Icon path relative to /public */
  src: string;
  /** Icon size in pixels */
  size?: number;
  /** Custom className */
  className?: string;
}

/** Individual icon component */
export const Icon = ({ name, src, size = 16, className = '' }: IconProps) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <Image src={src} alt={name} width={size} height={size} />
    </div>
  );
};
