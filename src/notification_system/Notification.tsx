import React from 'react';
import { MdError } from 'react-icons/md';
import { PiInfoFill } from 'react-icons/pi';
import { HiCheckCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { NotificationProps, NotificationType } from './NotificationTypes.d';

// Icon Function
const getIconForType = (type: NotificationType) => {
  switch (type) {
    case NotificationType.Warning:
      return <MdError className="text-2xl" />;
    case NotificationType.Info:
      return <PiInfoFill className="text-2xl" />;
    case NotificationType.Error:
      return <MdError className="text-2xl" />;
    case NotificationType.Success:
      return <HiCheckCircle className="text-2xl" />;
    default:
      return null;
  }
};

// Background Color Function
const getBackgroundColorForType = (type: NotificationType) => {
  switch (type) {
    case NotificationType.Warning:
      return 'bg-orange-light dark:bg-orange-dark';
    case NotificationType.Info:
      return 'bg-blueInfo-light dark:bg-blueInfo-dark';
    case NotificationType.Error:
      return 'bg-red-light dark:bg-red-dark';
    case NotificationType.Success:
      return 'bg-green-light dark:bg-green-dark';
    default:
      return 'bg-pink';
  }
};

const notificationVariants = {
  initial: { opacity: 0, y: -50, scale: 0.3, zIndex: 1 },
  animate: { opacity: 1, y: 0, scale: 1, zIndex: 1 },
  exit: { opacity: 0, y: -50, scale: 0.5, zIndex: 0 },
};

// Notification Component
const Notification: React.FC<NotificationProps> = ({ id, message, type }) => {
  return (
    <motion.div
      layout
      id={`notification-${id}`}
      className={`flex items-center py-1 pl-1 pr-2 ${getBackgroundColorForType(type)} rounded-lg text-black dark:text-white w-fit max-w-md`}
      variants={notificationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex-shrink-0">{getIconForType(type)}</div>
      <span className="ml-1 break-words">{message}</span>
    </motion.div>
  );
};

export default Notification;
