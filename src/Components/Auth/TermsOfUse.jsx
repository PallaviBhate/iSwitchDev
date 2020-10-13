import React from 'react';
import Header from '../CommonComp/Header'
import Footer from '../CommonComp/Footer'
const TermsofUse =()=>{
    return(
        <div className="content">
        <Header></Header>
        <div className="main">
            <h3>Welcome to TermsofUse Page</h3>
            <div>
            By choosing to visit and/or avail any Services provided by ECOSS, you agree that:
        You hereby expressly grant a consent to use and share your personal information to third parties for the purpose of availing the services under this website.
         We reserve the right to use or disclose your Personal Information and/ or resume to any of potential recruiter’s/ training company/psychometric test company etc. 
         We may share your personal information with third party service providers to perform certain processing activities on our behalf, such as Parties involved in enabling our Services.
         You have the right to provide Personal Information to us and may change that decision at any time.
         We will only use your personal data in a fair and reasonable manner
         Your Personal Information will not be retained by ECOSS any longer than it is necessary for the purposes for which the Personal Information is processed and/or in accordance with legal, regulatory, contractual or statutory obligations as applicable.
         If you do not agree to the above terms, promptly exit this page and stop accessing the Services.
         <div>
             <h7>Caution:</h7>
            Please do not click links or open attachments unless you recognize the sender and know the content is safe.
         </div>

            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default TermsofUse