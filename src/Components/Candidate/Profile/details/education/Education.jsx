import React, { useContext } from 'react'
import { EDIT_EDUCATION, ADD_NEW_EDUCATION } from '../../../../../Utils/AppConst'
import { Context } from '../../../../../Context/ProfileContext';

export const Education = ({ showPopup }) => {
  const { state } = useContext(Context);
  const [profileInfo, setProfileInfo] = React.useState('');
  state.then((data) => {
    setProfileInfo(data)
  })
  const { educationDetailsList } = profileInfo;
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4 align-items-center">

          <img src="/images/Dashboard-assets/education-icon.svg" alt="Cinque Terre" class="mr-2" />
          <span class="subtitle-semi-bold">Education</span>
        </div>
        <div class="px-4 mb-3">
          {(educationDetailsList) ? educationDetailsList.map((data) => (
            <div class="col-12 px-0 py-3">
              <div>
                <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="float-right" alt="Cinque Terre" onClick={() => showPopup(EDIT_EDUCATION, true, { resourceId: data.educationId })} />
                <span class="subtitle-semi-bold">{data.university}</span>
              </div>
              <div><span class="normal-text-semi-bold"> {data.educationType} - {data.course} {data.specialization}</span></div>
              <div><span class="normal-text-light">{data.passingOutYear} {data.courseType}</span></div>
            </div>
          )) : null}
        </div>
        <div class="d-flex flex-row-reverse">
          <button class="btn btn-outline-info btn-add" onClick={() => showPopup(ADD_NEW_EDUCATION, true)}>Add</button>
        </div>
      </div>
    </div>
  )
}