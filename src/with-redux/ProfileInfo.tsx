import React from 'react';
import { connect } from 'react-redux'

interface ProfileInfoProps {
  profile: any;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }) => {
  console.log('[Redux] ProfileInfo render', profile);

  return (
    <p>{JSON.stringify(profile)}</p>
  );
}

const mapStateToProps = (state: any) => ({
  profile: state,
});

export default connect(
  mapStateToProps,
)(ProfileInfo)
