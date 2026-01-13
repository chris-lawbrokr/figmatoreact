'use client';
import { useState } from 'react';
import { Icon } from './Icon';
import './icon.css';

export interface IconItem {
  name: string;
  src: string;
}

export interface IconGalleryProps {
  /** Array of icons to display */
  icons: IconItem[];
  /** Size of each icon in pixels */
  iconSize?: number;
  /** Number of columns in the grid */
  columns?: number;
}

/** Gallery component to display a collection of icons */
export const IconGallery = ({ icons, iconSize = 24, columns = 4 }: IconGalleryProps) => {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const handleCopyIconName = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedIcon(name);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div
      className="icon-gallery"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {icons.map((icon) => (
        <div
          key={icon.name}
          className="icon-card"
          onClick={() => handleCopyIconName(icon.name)}
          title={`Click to copy: ${icon.name}`}
        >
          <div className="icon-container">
            <Icon name={icon.name} src={icon.src} size={iconSize} />
          </div>
          <div className="icon-name">{icon.name}</div>
          {copiedIcon === icon.name && <div className="copied-tooltip">Copied!</div>}
        </div>
      ))}
    </div>
  );
};
