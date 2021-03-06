import React, { useContext } from 'react'
import { EDIT_CERTIFICATE, ADD_NEW_CERTIFICATE } from '../../../../../Utils/AppConst'
import { Context } from '../../../../../Context/ProfileContext';

export const Certifications = ({ showPopup }) => {
  const { state } = useContext(Context);
  const [profileInfo, setProfileInfo] = React.useState('');
  state.then((data) => {
    setProfileInfo(data)
  })
  const { candidateCertificatesList } = profileInfo;
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4">
          <span class="subtitle-semi-bold ml-4">Certifications</span>
        </div>
        <div class="px-4 mb-3">
          {(candidateCertificatesList) ? candidateCertificatesList.map((data) => (
            <div class="col-12 px-0 py-3">
              <div>
                <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="float-right" alt="Cinque Terre" onClick={() => showPopup(EDIT_CERTIFICATE, true, {resourceId: data.certificationId})} />
                <span class="subtitle-semi-bold">{data.certificationName}</span>
              </div>
              {/* <p class="normal-text-light mb-0">Quisque congue dignissim efficitur. Vestibulum ultrices pulvinar ex, a dignissim neque tincidunt sed.</p> */}
              <div><span class="normal-text-light">Issued on {data.issueMonth}{data.issueYear && data.issueMonth ? ' , ' : ''}{data.issueYear} | {data.expirationMonth || data.expirationYear ? `${data.expirationMonth} ${data.expirationMonth && data.expirationYear ? ' , ' : ''} ${data.expirationYear}` : 'No Expiration Date'}</span></div>
              <div><span class="normal-text-light">Credential ID {data.credentialId}</span></div>
              <a className="forgot_link" target="_blank" href={data.credentialURL}>{data.credentialURL}</a>
            </div>
          )) : null}
        </div>
        <div class="d-flex flex-row-reverse">
          <button class="btn btn-outline-info btn-add" onClick={() => showPopup(ADD_NEW_CERTIFICATE, true)}>Add</button>
        </div>
      </div>
    </div>
  )
}