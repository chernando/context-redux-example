import React from 'react';

import ProfileInfo from './ProfileInfo';

const User: React.FC = () => {
  console.log('[Context] User render');

  return (
    <ProfileInfo />
  );
}

export default User;
