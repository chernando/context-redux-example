import React, {useContext} from 'react';

import { Context } from './AppWithContext';

const ProfileInfo: React.FC = () => {
  const profile = useContext(Context);

  console.log('[Context] ProfileInfo render', profile);

  return (
    <p>{JSON.stringify(profile)}</p>
  );
}

export default ProfileInfo
