import React from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
// import 'react-web-tabs/dist/react-web-tabs.css';
import { About, CTC, DesiredProfile } from '../about';
import { Resume } from '../resume';
import { Skills } from '../skills';
import { Education, Certifications } from '../education';
import { Employment } from '../employment';
import { PersonalDetails, LanguageKnown } from '../personalDetails';

export const NavBar = ({showPopup}) => {
  return (
    <div class="align-items-center">
      <Tabs
        defaultTab="one"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList>
          <Tab tabFor="one">About</Tab>
          <Tab tabFor="two">Resume</Tab>
          <Tab tabFor="three">Skills</Tab>
          <Tab tabFor="four">Education & Certifications</Tab>
          <Tab tabFor="five">Employment</Tab>
          <Tab tabFor="six">Personal Details</Tab>
        </TabList>
        <TabPanel tabId="one">
          <About showPopup={showPopup}/>
          <CTC showPopup={showPopup}/>
          <DesiredProfile showPopup={showPopup}/>
        </TabPanel>
        <TabPanel tabId="two">
          <Resume showPopup={showPopup} />
        </TabPanel>
        <TabPanel tabId="three">
          <Skills showPopup={showPopup}/>
        </TabPanel>
        <TabPanel tabId="four">
          <Education showPopup={showPopup}/>
          <Certifications showPopup={showPopup}/>
        </TabPanel>
        <TabPanel tabId="five">
          <Employment showPopup={showPopup}/>
        </TabPanel>
        <TabPanel tabId="six">
          <PersonalDetails showPopup={showPopup}/>
          <LanguageKnown showPopup={showPopup}/>
        </TabPanel>
      </Tabs>
    </div>
  )
}