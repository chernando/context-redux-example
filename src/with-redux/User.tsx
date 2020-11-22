import React from 'react';

import ProfileInfo from './ProfileInfo';

const User: React.FC = () => {
  console.log('[Redux] User render');

  return (
    <ProfileInfo />
  );
}

export default User;
