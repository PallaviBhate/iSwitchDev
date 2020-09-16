import React from 'react'
import UploadFile from '../../../../CommonComp/UploadFile'

export const Resume = () => {
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4 align-items-center">
          <img src="/images/Dashboard-assets/resume-icon.svg" alt="Cinque Terre" class="mr-2" />
          <span class="subtitle-semi-bold">Upload Resume</span>
        </div>
      </div>
      <div class="col-12 mb-3">
        <img src="/images/Dashboard-assets/candidate/push-chevron-down-o.png" alt="Cinque Terre" class="ml-4 mr-2 left-sec-icon" />
        <span class="mr-3" style={{ color: '#007EFF' }}>John Doe Resume.pdf</span>
        <span>Last updated on 10 sept 2020</span>
      </div>
      <div class="col">
        <UploadFile />
      </div>
    </div>
  )
}