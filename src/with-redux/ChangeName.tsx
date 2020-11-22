import React from 'react';
import { connect } from 'react-redux'

interface ChangeNameProps {
  profile: any;
}

const ChangeName: React.FC<ChangeNameProps> = ({ profile }) => {
  console.log('[Redux] ChangeName render', profile);

  return (
    <p>{JSON.stringify(profile)}</p>
  );
}

const mapStateToProps = (state: any) => ({
  profile: state,
});

export default connect(
  mapStateToProps,
)(ChangeName)
