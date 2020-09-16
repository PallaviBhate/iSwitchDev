import React from 'react'
import CandidateLeftNav from '../../CommonComp/CandidateLeftNav'
import HeaderAll from '../../CommonComp/HeaderAll'
import { Information, NavBar, LanguageKnown } from './details';
import { Breadcrumbs } from '../../CommonComp/breadcrumbs/index';
import { PopupContent } from './PopupContent';
import ScrollUpButton from "react-scroll-up-button";
import './profile.css';
import '../../../Assets/css/Candidate.css'

export const Profile = () => {
    const [isPopupVisible, setPopupVisible] = React.useState(false);
    const [popupTitle, setPopupTitle] = React.useState('');
    const showPopup = (title, isVisible) => {
        setPopupTitle(title);
        setPopupVisible(isVisible);
    }
    return (
        <div>
            <CandidateLeftNav />
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
                    <Information showPopup={showPopup} />
                    <NavBar showPopup={showPopup} />
                    <ScrollUpButton />
                </div>
            </div>
        </div>
    )
}