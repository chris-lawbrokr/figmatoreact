import Image from 'next/image';
import './logo.css';

export interface LogoProps {
  /** Logo width in pixels */
  width?: number;
  /** Logo height in pixels */
  height?: number;
  /** Alt text for accessibility */
  alt?: string;
  /** Additional CSS classes */
  className?: string;
}

/** Logo component for displaying brand logo */
export const Logo = ({
  width = 150,
  height = 50,
  alt = 'Logo',
  className = '',
}: LogoProps) => {
  return (
    <div className={`logo-container ${className}`}>
      <Image
        src="/images/logo.png"
        alt={alt}
        width={width}
        height={height}
        priority
        className="logo-image"
      />
    </div>
  );
};
