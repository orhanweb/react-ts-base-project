import React from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import ScaleAnimated from '../../scale_animated';
import '../../loader/index.css';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  size?: number;
  isLoading?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ Icon, size = 20, isLoading = false, className, ...props }) => {
  return (
    <ScaleAnimated isEnabled={!isLoading}>
      <button
        className={twMerge(
          'p-2 flex items-center justify-center rounded-lg transition-colors bg-purple-light dark:bg-purple-dark',
          className,
          isLoading && 'bg-white-darkest dark:bg-black-lightest cursor-not-allowed pointer-events-none',
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <l-line-spinner size={size} stroke="3" speed="1" color="var(--loader-color)" /> : React.createElement(Icon, { size })}
      </button>
    </ScaleAnimated>
  );
};

export default IconButton;
