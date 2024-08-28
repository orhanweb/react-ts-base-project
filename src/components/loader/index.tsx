import React from 'react';
import { lineSpinner } from 'ldrs';

lineSpinner.register();

/**
 * Loader component to display a loading spinner and optional messages.
 * @param {LoaderProps} props - The props for the Loader component.
 * @param {boolean} props.isLoading - Indicates whether the loader should be visible.
 * @param {string[]} [props.messages] - Optional array of messages to display below the spinner.
 */

interface LoaderProps {
  isLoading: boolean;
  messages?: string[];
}

const Loader: React.FC<LoaderProps> = ({ isLoading, messages }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-[200]" role="alert" aria-live="assertive">
      <div className="flex flex-col justify-center items-center gap-4">
        <l-line-spinner size="60" stroke="5" speed="1" color="#7C3AED" />
        {messages && messages.length > 0 ? (
          messages.map((message, index) => (
            <p key={index} className="text-text-lightest text-lg">
              {message}
            </p>
          ))
        ) : (
          <p className="text-text-lightest text-lg">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Loader;
