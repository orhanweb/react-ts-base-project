import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconTextButton from '../../../components/buttons/icon_text_button';
import { MdArrowBack } from 'react-icons/md';
import { useNotifications } from '../../../notification_system/useNotifications';
import { NotificationType } from '../../../notification_system/NotificationTypes.d';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { addNotification } = useNotifications();

  const goBack = () => {
    addNotification('You returned to the previous page', NotificationType.Info);
    navigate(-1); // Turn back to previous page
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-2">404 | Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <p className="text-black-lightest dark:text-white-darker">Please check the URL or return to the previous page.</p>
      <IconTextButton Icon={MdArrowBack} title="Go Back" onClick={goBack} />
    </div>
  );
};

export default NotFound;
