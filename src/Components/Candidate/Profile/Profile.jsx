import React, { useEffect } from 'react'
import LeftNavCandidate from '../../CommonComp/LeftNavCandidate'
import HeaderAll from '../../CommonComp/HeaderAll'
import { Information, NavBar, LanguageKnown } from './details';
import { Breadcrumbs } from '../../CommonComp/breadcrumbs/index';
import { PopupContent } from './PopupContent';
import ScrollUpButton from "react-scroll-up-button";
import './profile.css';
import '../../../Assets/css/Candidate.css'
import ApiServicesOrgCandidate from '../../../Services/ApiServicesOrgCandidate'
export const Profile = () => {
    const [isPopupVisible, setPopupVisible] = React.useState(false);
    const [popupTitle, setPopupTitle] = React.useState('');
    const [candidateProfile, setCandidateProfile] = React.useState('');
    useEffect(() => {
        ApiServicesOrgCandidate.fetchProfileInfo().then(response => {
            setCandidateProfile(response.candidateInfo)
        }).catch(error => { });
    }, [])
    const showPopup = (title, isVisible) => {
        setPopupTitle(title);
        setPopupVisible(isVisible);
    }
    return (
        <div>
            <LeftNavCandidate />
            <div className="maincontent toggled">
                <HeaderAll isCandidate={true} />
                <div class='container-fluid px-5 py-4 right-panel'>
                    {isPopupVisible ? <PopupContent
                        title={popupTitle}
                        showPopup={setPopupVisible}
                    /> : null}
                    <div class="pb-2 mt-5">
                        <Breadcrumbs />
                    </div>
                    <Information
                        showPopup={showPopup}
                        candidateProfile={candidateProfile}
                    />
                    <NavBar showPopup={showPopup} />
                    <ScrollUpButton />
                </div>
            </div>
        </div>
    )
}