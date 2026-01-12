import './card.css';
import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card variant style */
  variant?: 'elevated' | 'outlined' | 'flat';
  /** Is card clickable */
  clickable?: boolean;
  /** Remove background color */
  noBackground?: boolean;
}

/** Main card container component */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { variant = 'elevated', clickable = false, noBackground = false, className = '', children, onClick, ...props },
    ref
  ) => {
    // Base card classes
    const baseClasses = `p-6 ${noBackground ? '' : 'bg-white'} rounded-lg w-full flex flex-col gap-6`;

    // Variant classes (skip if noBackground is true)
    const variantClasses = {
      elevated: 'shadow-lg hover:shadow-xl',
      outlined: 'border-2 border-border-gray hover:border-primary',
      flat: 'border border-border-gray/50',
    };

    // Clickable classes
    const clickableClasses = clickable || onClick ? 'cursor-pointer hover:-translate-y-1' : '';

    // Combine all classes
    const cardClasses = `${baseClasses} ${noBackground ? '' : variantClasses[variant]} ${clickableClasses} ${className}`;

    return (
      <div
        ref={ref}
        className={cardClasses}
        onClick={onClick}
        role={clickable || onClick ? 'button' : undefined}
        tabIndex={clickable || onClick ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Card header section */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`flex flex-col gap-2 p-6 ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

/** Card title component */
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`text-2xl font-bold leading-tight text-text-dark font-helvetica ${className}`}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = 'CardTitle';

export interface CardSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/** Card subtitle component */
export const CardSubtitle = React.forwardRef<HTMLParagraphElement, CardSubtitleProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-lg font-normal leading-[150%] text-gray-500 font-helvetica ${className}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);

CardSubtitle.displayName = 'CardSubtitle';

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/** Card description component */
export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-base text-text-dark/70 tracking-[-0.3px] leading-relaxed ${className}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Card content section */
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`p-6 pt-0 ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

/** Card footer section */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`flex items-center p-6 pt-0 ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional aspect ratio class */
  aspectRatio?: 'square' | 'video' | 'wide';
}

/** Card image component */
export const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ src, alt, aspectRatio = 'video', className = '', ...props }, ref) => {
    const aspectClasses = {
      square: 'aspect-square',
      video: 'aspect-video',
      wide: 'aspect-[21/9]',
    };

    return (
      <div className={`w-full overflow-hidden ${aspectClasses[aspectRatio]}`}>
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          {...props}
        />
      </div>
    );
  }
);

CardImage.displayName = 'CardImage';
