import React from 'react';

import ProfileForm from './ProfileForm';

const Main: React.FC = () => {
  console.log('[Redux] Main render');

  return (
    <ProfileForm />
  );
};

export default Main;
