import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import IconTextButton from '../../../components/buttons/icon_text_button';
import { MdArrowBack } from 'react-icons/md';
import { useNotifications } from '../../../notification_system/useNotifications';
import { NotificationType } from '../../../notification_system/NotificationTypes.d';

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();
  const { addNotification } = useNotifications();

  const goBack = () => {
    addNotification('You returned to the previous page', NotificationType.Info);
    navigate(-1); // Turn back to previous page
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong.</h1>
      {error && <p className="text-lg">{error?.statusText || error?.message}</p>}
      <p className="text-black-lightest dark:text-white-darker ">Please refresh the page or contact the administrator.</p>
      <IconTextButton Icon={MdArrowBack} title="Go Back" onClick={goBack} />
    </div>
  );
};

export default ErrorPage;
