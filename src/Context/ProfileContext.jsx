import React,{useEffect} from 'react'
import ApiServicesOrgCandidate from '../Services/ApiServicesOrgCandidate';

const ProfileContext = React.createContext();

export const ProfileProvider = ({ children }) => {
  const [candidateProfile, setCandidateProfile] = React.useState('');
  useEffect(() => {
    ApiServicesOrgCandidate.fetchProfileInfo().then(response => {
     
      setCandidateProfile(response)
    }).catch(error => { });
  }, [])
  return <ProfileContext.Provider
    value={candidateProfile}>{children}
  </ProfileContext.Provider>

};

export default ProfileContext;