import React from 'react';

import User from './User';

const Header: React.FC = () => {
  console.log("[Redux] Header render");

  return (
    <User />
  );
};

export default React.memo(Header);
