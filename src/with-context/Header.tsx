import React from 'react';

import User from './User';

const Header: React.FC = () => {
  console.log("[Context] Header render");

  return (
    <User />
  );
};

export default React.memo(Header);
