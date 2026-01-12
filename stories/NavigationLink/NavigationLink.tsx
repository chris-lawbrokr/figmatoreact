import './navigationlink.css';
import React from 'react';

export interface NavigationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link text */
  label: string;
  /** Direction of arrow icon */
  direction?: 'prev' | 'next';
  /** Click handler */
  onClick?: () => void;
}

/** Navigation link with arrow icon for multi-step flows */
export const NavigationLink = React.forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ label, direction = 'next', onClick, className = '', ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    };

    return (
      <a
        ref={ref}
        className={`navigation-link text-sm font-normal leading-[150%] text-black font-helvetica text-center cursor-pointer hover:underline inline-flex items-center gap-1 ${className}`}
        onClick={handleClick}
        {...props}
      >
        {direction === 'prev' && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 9L4.5 6L7.5 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {label}
        {direction === 'next' && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 3L7.5 6L4.5 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </a>
    );
  }
);

NavigationLink.displayName = 'NavigationLink';
