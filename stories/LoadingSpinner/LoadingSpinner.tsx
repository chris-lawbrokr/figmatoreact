'use client';
import './loadingspinner.css';

export interface LoadingSpinnerProps {
  /** Size of the spinner in pixels */
  size?: number;
  /** Whether to use absolute positioning */
  absolute?: boolean;
  /** Custom className */
  className?: string;
  /** Optional title text */
  title?: string;
  /** Optional subtitle text */
  subtitle?: string;
}

/** Loading spinner component with animated SVG */
export const LoadingSpinner = ({
  size = 32,
  absolute = false,
  className = '',
  title,
  subtitle,
}: LoadingSpinnerProps) => {
  const positionClass = absolute ? 'absolute' : 'relative';
  const hasText = title || subtitle;

  return (
    <div
      className={`loading-spinner-container ${hasText ? 'with-text' : ''} ${positionClass} ${className}`}
    >
      <div
        className="loading-spinner"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16 1.77778C16 0.795938 16.7984 -0.010207 17.7741 0.0986638C19.5142 0.292803 21.2147 0.771705 22.8064 1.51992C24.9359 2.52088 26.8183 3.97919 28.3197 5.79093C29.821 7.60266 30.9043 9.72324 31.4923 12.0016C32.0803 14.2799 32.1586 16.6598 31.7216 18.9718C31.2845 21.2839 30.3429 23.471 28.9639 25.3775C27.5848 27.284 25.8022 28.8628 23.7432 30.0016C21.6841 31.1403 19.3992 31.8108 17.0513 31.9654C15.2963 32.081 13.5383 31.9061 11.8475 31.4517C10.8993 31.1969 10.4503 30.155 10.8086 29.2409C11.167 28.3268 12.1975 27.8899 13.1533 28.1145C14.3499 28.3956 15.5847 28.4987 16.8177 28.4176C18.6438 28.2973 20.421 27.7758 22.0225 26.8901C23.624 26.0044 25.0104 24.7764 26.083 23.2936C27.1556 21.8108 27.888 20.1097 28.2279 18.3114C28.5678 16.5132 28.5069 14.6621 28.0496 12.8901C27.5922 11.1181 26.7497 9.46874 25.582 8.05961C24.4143 6.65048 22.9501 5.51624 21.2939 4.73772C20.1756 4.21207 18.9884 3.85732 17.7718 3.68233C16.7999 3.54254 16 2.75962 16 1.77778Z"
            fill="#665687"
          />
        </svg>
      </div>
      {hasText && (
        <div className="loading-text">
          {title && <div className="loading-title">{title}</div>}
          {subtitle && <div className="loading-subtitle">{subtitle}</div>}
        </div>
      )}
    </div>
  );
};
