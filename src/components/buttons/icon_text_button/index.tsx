import React, { ButtonHTMLAttributes, FC } from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import ScaleAnimated from '../../scale_animated';

interface IconTextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: IconType;
  iconSize?: number;
  title: string;
  isLoading?: boolean;
}

const IconTextButton: FC<IconTextButtonProps> = ({ Icon, iconSize = 20, isLoading = false, title, className, ...props }) => {
  return (
    <ScaleAnimated isEnabled={!isLoading}>
      <button
        className={twMerge(
          'px-4 py-2 flex gap-2 items-center justify-center rounded-lg bg-purple-light dark:bg-purple-dark',
          className,
          isLoading && 'bg-white-darkest dark:bg-black-lightest cursor-not-allowed pointer-events-none',
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <l-line-spinner size={iconSize} stroke="3" speed="1" color="var(--loader-color)" />
        ) : (
          Icon && React.createElement(Icon, { size: iconSize })
        )}
        <span className="font-medium">{title}</span>
      </button>
    </ScaleAnimated>
  );
};

export default IconTextButton;
