import React, { useReducer } from 'react';
import creteDataContext from './CreateDataContext';
import ApiServicesOrgCandidate from '../Services/ApiServicesOrgCandidate';

const profileReducer = async (state, action) => {
  switch (action.type) {
    case 'view_profile':
      return ApiServicesOrgCandidate.fetchProfileInfo();
    default:
      return state;
  }
};

const getProfileInfo = (dispatch) => {
  return () => {
    dispatch({ type: 'view_profile' })
  }
};

export const { Context, Provider } = creteDataContext(
  profileReducer,
  { getProfileInfo },
  []
);