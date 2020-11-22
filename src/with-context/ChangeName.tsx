import React, {useContext} from 'react';

import { Context } from './AppWithContext';

const ChangeName: React.FC = () => {
  const profile = useContext(Context);

  console.log('[Context] ChangeName render', profile);

  return (
    <p>{JSON.stringify(profile)}</p>
  );
}

export default ChangeName
