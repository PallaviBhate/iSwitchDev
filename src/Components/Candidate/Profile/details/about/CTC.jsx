import React from 'react'
import { EDIT_CTC } from '../../../../../Utils/AppConst'

export const CTC = ({showPopup}) => {
  return (
    <div class="bg-white section-divider align-items-center row mx-0">
      <div class="col-6 px-4 py-4 section-divider" style={{ borderRight: '1px solid #F1F1F1'}}>
        <div class="col">
          <div class="mb-4">
            <span class="subtitle-semi-bold ml-4">Current CTC</span>
          </div>
          <div class="px-4">
            <span class="normal-text-medium">INR 9 Lakh(s) 00 Thousand</span>
          </div>
        </div>
      </div>
      <div class="col-6 px-4 py-4 section-divider">
        <div class="col">
          <div class="mb-4">
            <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="float-right" alt="Cinque Terre" onClick={() => showPopup(EDIT_CTC, true)} />
            <span class="subtitle-semi-bold">Expected CTC</span>
          </div>
          <div >
            <span class="normal-text-medium">INR 10 Lakh(s) 50 Thousand</span>
          </div>
        </div>
      </div>
    </div>
  )
}