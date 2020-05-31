import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const withResponse = (Component) => (props) => {
  const isDesktopScreen = useMediaQuery({ query: '(min-device-width: 769px)' });

  return (
    <Component
      {...props}
      isDesktopScreen={isDesktopScreen}
    />
  );
};
