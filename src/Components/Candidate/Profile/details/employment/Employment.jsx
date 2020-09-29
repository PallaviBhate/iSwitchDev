import React, { useContext } from 'react'
import { ADD_NEW_EMPLOYMENT, EDIT_EMPLOYMENT } from '../../../../../Utils/AppConst'
import { Context } from '../../../../../Context/ProfileContext';

export const Employment = ({ showPopup }) => {
  const { state } = useContext(Context);
  const [employmentInfo, setEmploymentInfo] = React.useState('');
  state.then((data) => {
    setEmploymentInfo(data)
  })
  const { employmentDetailsList } = employmentInfo;
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4 align-items-center">
          <img src="/images/Dashboard-assets/employment-icon.svg" alt="Cinque Terre" class="mr-2" />
          <span class="subtitle-semi-bold">Employment</span>
        </div>
        <div class="px-4 mb-3">
          {(employmentDetailsList) ? employmentDetailsList.map((employment, i) => (
            <div class="col-12 px-0 py-3">
              <div>
                <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="float-right" alt="Cinque Terre" onClick={() => showPopup(EDIT_EMPLOYMENT, true, employment.employmentId)} />
                <span class="subtitle-semi-bold">{employment.designation}</span>
              </div>
              <div><span class="normal-text-semi-bold">{employment.organization} {employment.employmentType}</span></div>
              <div><span class="normal-text-light">{employment.startedWorkingFromMonth}  {(employment.currentCompany) ? ' - Present' : null}</span></div>
              <p class="normal-text-light">{employment.description}</p>
            </div>
          )) : null}
        </div>
        <div class="d-flex flex-row-reverse">
          <button class="btn btn-outline-info btn-add" onClick={() => showPopup(ADD_NEW_EMPLOYMENT, true)}>Add</button>
        </div>
      </div>
    </div>
  )
}