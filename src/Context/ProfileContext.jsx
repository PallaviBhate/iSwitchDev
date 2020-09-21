import React from 'react'

const ProfileContext = React.createContext();

export const ProfileProvider = ({ children }) => {
  return <ProfileContext.Provider
    value={'profile object pass'}>{children}
  </ProfileContext.Provider>

};

export default ProfileContext;