import React from 'react';
import Popup from '../../CommonComp/Popup';
import ProfileName from './updation/ProfileName';
import { EDIT_PROFILE_NAME, EDIT_ABOUT, EDIT_CTC, EDIT_SKILL, EDIT_CERTIFICATE, EDIT_EMPLOYMENT, EDIT_EDUCATION, EDIT_PERSONAL, EDIT_LANGUAGE, ADD_NEW_CERTIFICATE, ADD_NEW_EDUCATION, ADD_NEW_EMPLOYMENT, ADD_NEW_LANGUAGE, ADD_NEW_SKILL, EDIT_CAREER_PROFILE } from '../../../Utils/AppConst';
import Language from './updation/Language';
import About from './updation/About';
import CTC from './updation/CTC';
import Skill from './updation/Skill';
import Certification from './updation/Certification';
import Employment from './updation/Employment';
import Education from './updation/Education';
import Personal from './updation/Personal';
import CareerProfile from './updation/CareerProfile';
export const PopupContent = ({ title, showPopup, dataAttributes, id }) => {
    let bodyComponent;
    switch (title) {
        case EDIT_PROFILE_NAME:
            bodyComponent = <ProfileName />
            break;
        case EDIT_ABOUT:
            bodyComponent = <About />
            break;
        case EDIT_CTC:
            bodyComponent = <CTC />
            break;
        case EDIT_SKILL:
            bodyComponent = <Skill dataAttributes={dataAttributes} />
            break;
        case ADD_NEW_SKILL:
            bodyComponent = <Skill />
            break;
        case EDIT_CERTIFICATE:
            bodyComponent = <Certification dataAttributes={dataAttributes} />
            break;
        case ADD_NEW_CERTIFICATE:
            bodyComponent = <Certification />
            break;
        case EDIT_EMPLOYMENT:
            bodyComponent = <Employment />
            break;
        case ADD_NEW_EMPLOYMENT:
            bodyComponent = <Employment />
            break;
        case EDIT_EDUCATION:
            bodyComponent = <Education />
            break;
        case ADD_NEW_EDUCATION:
            bodyComponent = <Education />
            break;
        case EDIT_PERSONAL:
            bodyComponent = <Personal />
            break;
        case EDIT_CAREER_PROFILE:
            bodyComponent = <CareerProfile />
            break;
        case EDIT_LANGUAGE:
            bodyComponent = <Language id={dataAttributes} />
            break;
        case ADD_NEW_LANGUAGE:
            bodyComponent = <Language />
            break;
        default:
            break;
    }
    return (
        <Popup
            showPopup={showPopup}
            title={title}
            body={bodyComponent}
        />

    );
}