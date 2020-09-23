import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import RenderLoader from '../../../../CommonComp/Loader';
import { About, CTC, DesiredProfile } from '../about';
import { Certifications, Education } from '../education';
import { Employment } from '../employment';
import { LanguageKnown, PersonalDetails } from '../personalDetails';
import { Resume } from '../resume';
import { Skills } from '../skills';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this);
  }

  componentDidMount() {
    scrollToComponent(this.Blue, {
      offset: 0,
      align: 'middle',
      duration: 500,
      ease: 'inCirc',
    });
  }

  scrollToTopWithCallback() {
    let scroller = scrollToComponent(this.Violet, {
      offset: 0,
      align: 'top',
      duration: 1500,
    });
    scroller.on('end', () => console.log('Scrolling end!'));
  }

  render() {
    debugger;
    console.log('aa', this.props.candidateProfile);
    return (
      <div className='main'>
        <div className='profile__button_group'>
          {/* <div
            class="profileTabs"
            onClick={() =>
              scrollToComponent(this.Indigo, {
                offset: 0,
                align: 'bottom',
                duration: 500,
                ease: 'inExpo',
              })
            }
          >
            About
          </div> */}
          <div
            class='profileTabs'
            onClick={() =>
              scrollToComponent(this.ResumeSection, {
                offset: -200,
                align: 'middle',
                duration: 1500,
                ease: 'inCirc',
              })
            }
          >
            Resume
          </div>
          <div
            class='profileTabs'
            onClick={() =>
              scrollToComponent(this.SkillsSection, {
                offset: 0,
                align: 'middle',
                duration: 500,
                ease: 'inExpo',
              })
            }
          >
            Skills
          </div>
          <div
            class='profileTabs'
            onClick={() =>
              scrollToComponent(this.EducationSection, {
                offset: 0,
                align: 'top',
                duration: 1500,
                ease: 'inCirc',
              })
            }
          >
            Education & Certifications
          </div>
          <div
            class='profileTabs'
            onClick={() =>
              scrollToComponent(this.EmploymentSection, {
                offset: 0,
                align: 'top',
                duration: 500,
                ease: 'inCirc',
              })
            }
          >
            Employment
          </div>
          <div
            class='profileTabs'
            onClick={() =>
              scrollToComponent(this.PersonalDetailsSection, {
                offset: 0,
                align: 'top',
                duration: 500,
              })
            }
          >
            Personal Details
          </div>
        </div>
        {this.props.candidateProfile ? (
          <div class='mt-5'>
            <RenderLoader />
          </div>
        ) : (
          <div>
            {/* <section
              ref={(section) => {
                this.Violet = section;
              }}
            >
              <About
                showPopup={this.props.showPopup}
                about={this.props.candidateProfile.candidateInfo.about}
              />
              <CTC
                showPopup={this.props.showPopup}
                ctc={this.props.candidateProfile.candidateInfo}
              />
              <DesiredProfile
                showPopup={this.props.showPopup}
                careerProfile={this.props.candidateProfile.careerProfile}
              />
            </section> */}
            <section
              ref={(section) => {
                this.ResumeSection = section;
              }}
            >
              <Resume showPopup={this.props.showPopup} />
            </section>
            <section
              ref={(section) => {
                this.SkillsSection = section;
              }}
            >
              <Skills showPopup={this.props.showPopup} />
            </section>
            <section
              ref={(section) => {
                this.EducationSection = section;
              }}
            >
              <Education showPopup={this.props.showPopup} />
              <Certifications showPopup={this.props.showPopup} />
            </section>
            <section
              ref={(section) => {
                this.EmploymentSection = section;
              }}
            >
              <Employment showPopup={this.props.showPopup} />
            </section>
            <section
              ref={(section) => {
                this.PersonalDetailsSection = section;
              }}
            >
              <PersonalDetails showPopup={this.props.showPopup} />
              <LanguageKnown showPopup={this.props.showPopup} />
            </section>
          </div>
        )}
      </div>
    );
  }
}
