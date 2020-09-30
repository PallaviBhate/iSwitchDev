import React, { useContext, useState } from 'react';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Context } from '../../../../Context/ProfileContext';
import { MONTH_NAMES } from '../../../../Utils/AppConst';
import { usePrevious } from '../../../../Utils/usePrevious';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Education = ({ dataAttributes, showPopup }) => {
  const [inputData, setFormInputData] = React.useState({ educationType: '', board: '', course: '', specialization: '', university: '', courseType: '', passingOutYear: '', medium: '', marks: '' })
  const [educationInfo, setEducationInfo] = React.useState('');
  const [isExpirationDate, setIsExpirationDate] = React.useState(true)
  const { state, getProfileInfo } = useContext(Context);
  const resourceId = dataAttributes && dataAttributes.resourceId;
  const prevCourse = usePrevious(inputData.course);
  const prevSpecialization = usePrevious(inputData.specialization);
  const prevUniversity = usePrevious(inputData.university);
  const prevCourseType = usePrevious(inputData.courseType);
  const prevBoard = usePrevious(inputData.board);
  const prevMedium = usePrevious(inputData.medium);
  const prevEducationType = usePrevious(inputData.educationType);
  const [singleInstitute, setSingleInstitute] = useState('');
  const [institute, setInstitute] = useState([]);
  const [singleBoards, setSingleBoards] = useState('');
  const [boards, setBoards] = useState([]);
  const [singleEducationType, setSingleEducationType] = useState('');
  const [educationTypes, setEducationTypes] = useState([]);
  const isSchoolEducation = inputData.educationType === '10th' || inputData.educationType === '12th'
  React.useEffect(() => {
    ApiServicesOrgCandidate.getListOfInstitutes().then((response) => {
      if (response) {
        const result = Object.keys(response.data.responseObject).map((key, index) => response.data.responseObject[key].institute);
        console.log(result)
        setInstitute(result);
      } else {
        setInstitute('');
      }
    })
    ApiServicesOrgCandidate.getListOfBoards().then((response) => {
      if (response) {
        const result = Object.keys(response.data.responseObject).map((key, index) => response.data.responseObject[key].board_name);
        console.log(result)
        setBoards(result);
      } else {
        setBoards('');
      }
    })
    ApiServicesOrgCandidate.getListOfEducationType().then((response) => {
      if (response) {
        const result = Object.keys(response.data.responseObject).map((key, index) => response.data.responseObject[key].eduType);
        console.log(result)
        setEducationTypes(result);
      } else {
        setEducationTypes('');
      }
    })
    state.then((response) => {
      if (response && response.educationDetailsList) {
        const educationInfoObject = response.educationDetailsList.filter(education => {
          return education.educationId === resourceId
        })[0]
        setEducationInfo(educationInfoObject);
        setSingleBoards([educationInfoObject.board])
        setSingleInstitute([educationInfoObject.university])
      }
    })
  }, []);
  React.useEffect(() => {
    if (resourceId && educationInfo) {
      const { educationType, board, course, specialization, university, courseType, passingOutYear, medium, marks } = educationInfo;
      console.log(resourceId)
      // if (!(expirationMonth && expirationYear)) {
      //   setIsExpirationDate(false)
      // }
      setFormInputData({
        educationType: educationType,
        board: board,
        course: course,
        specialization: specialization,
        university: university,
        courseType: courseType,
        passingOutYear: passingOutYear,
        medium: medium,
        marks: marks
      });
    }
  }, [educationInfo]);

  const handleFormInputData = (e) => {
    if (e.target.name === 'educationType') {
      if (e.target.value === '10th' || e.target.value === '12th') {
        // if (prevEducationType === 'Post Graduate' || prevEducationType === 'Graduate or Diploma' || prevEducationType === '') {
        inputData.course = null;
        inputData.specialization = null;
        inputData.university = null;
        inputData.courseType = null;
        inputData.board = prevBoard;
        inputData.medium = prevMedium;
        // }
      }
      else {
        // if (prevEducationType === '10th' || prevEducationType === '12th') {
        inputData.course = prevCourse;
        inputData.specialization = prevSpecialization;
        inputData.university = prevUniversity;
        inputData.courseType = prevCourseType;
        inputData.board = null;
        inputData.medium = null;
        // }
      }
    }
    return (
      setFormInputData({
        ...inputData,
        [e.target.name]: e.target.value
      })
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      "educationType": singleEducationType.toString(),
      "board": singleBoards.toString(),
      "course": inputData.course,
      "specialization": inputData.specialization,
      "university": singleInstitute.toString(),
      "courseType": inputData.courseType,
      "passingOutYear": inputData.passingOutYear,
      "medium": inputData.medium,
      "marks": inputData.marks
    }
    if (resourceId) {
      ApiServicesOrgCandidate.updateEducation({ ...data, educationId: resourceId }, getProfileInfo, showPopup);
    } else {
      ApiServicesOrgCandidate.addEducation(data, getProfileInfo, showPopup);
    }
  }

  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label htmlFor="educationType">Education Type<span class="required">*</span></label>
            {/*
              <Typeahead
                id="basic-typeahead-board"
                labelKey="educationType"
                onChange={setSingleEducationType}
                options={educationTypes}
                placeholder="Choose a Education Type..."
                selected={singleEducationType}
              />
            */}

            <select id="educationType" className="form-control" name="educationType" value={inputData.educationType} onChange={(e) => handleFormInputData(e)}>
              <option>Select Education</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Graduate or Diploma">Graduate or Diploma</option>
            </select>
          </div>
          {isSchoolEducation ? <div className="form-group">
            <label htmlFor="board">Board<span class="required">*</span></label>
            {/* <select id="board" className="form-control" name="board" value={inputData.board} onChange={(e) => handleFormInputData(e)}>
              <option>Select Board</option>
              <option>CBSE</option>
              <option>CISCE</option>
              <option>IB</option>
              <option>State board</option>
            </select> */}
            <Typeahead
              id="basic-typeahead-board"
              labelKey="board"
              onChange={setSingleBoards}
              options={boards}
              placeholder="Choose a Board..."
              selected={singleBoards}
            />
          </div> : null}
          {!isSchoolEducation ? <div>
            <div className="form-group">
              <label htmlFor="course">Course<span class="required">*</span></label>
              <select id="course" className="form-control" name="course" value={inputData.course} onChange={(e) => handleFormInputData(e)}>
                <option>Select Course</option>
                <option>C.A.</option>
                <option>M.A.</option>
                <option>M.B.A.</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="specialization">Specialization<span class="required">*</span></label>
              <select id="specialization" className="form-control" name="specialization" value={inputData.specialization} onChange={(e) => handleFormInputData(e)}>
                <option>Select Specialization</option>
                <option>Computers</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="university">University/Institute<span class="required">*</span></label>
              {/* <select id="university" className="form-control" name="university" value={inputData.university} onChange={(e) => handleFormInputData(e)}>
                <option>Select University/Institute</option>
                <option>IIT Delhi</option>
                <option>NIT Delhi</option>
                <option>MIT Pune</option>
              </select> */}
              <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setSingleInstitute}
                options={institute}
                placeholder="Choose a Institute..."
                selected={singleInstitute}
              />
            </div>
            <div className="form-group">
              <label htmlFor="University">Course Type</label>
              <div>
                <div class={inputData.courseType === 'fullTime' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                  <input
                    type="radio"
                    class="form-check-input mr-2"
                    id="courseType"
                    name="courseType"
                    value="fullTime"
                    checked={inputData.courseType === 'fullTime'}
                    onChange={handleFormInputData}
                  />
                  <label class="radio-inline form-check-label" for="materialChecked2">Full Time</label>
                </div>
                <div class={inputData.courseType === 'partTime' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                  <input
                    type="radio"
                    class="form-check-input mr-2"
                    id="courseType"
                    name="courseType"
                    value="partTime"
                    checked={inputData.courseType === 'partTime'}
                    onChange={handleFormInputData}
                  />
                  <label class="modal-label radio-inline form-check-label" for="materialChecked2">Part Time</label>
                </div>
                <div class={inputData.courseType === 'correspondence' ? "modal-label form-check" : "modal-label form-check form-check-inline modal-fade"}>
                  <input
                    type="radio"
                    class="form-check-input"
                    id="courseType"
                    name="courseType"
                    value="correspondence"
                    checked={inputData.courseType === 'correspondence'}
                    onChange={handleFormInputData}
                  />
                  <label class="modal-label radio-inline form-check-label" for="materialChecked2">Correspondence/Distance Learning</label>
                </div>
              </div>
            </div>
          </div> : null}
          <div className="form-group">
            <label htmlFor="passingOutYear">Passing out year<span class="required">*</span></label>
            <div class="form-row">
              <div className="col">
                <select id="passingOutYear" className="form-control" name="passingOutYear" value={inputData.passingOutYear} onChange={(e) => handleFormInputData(e)}>
                  {Array(50).fill().map((_, i) => (
                    <option key={`${i}_years`}>{parseInt(new Date().getFullYear()) - i}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {inputData.ed}<div className="form-group">
            <label htmlFor="University">Marks<span class="required">*</span></label>
            <input class="form-control" type="text"
              name="marks"
              value={inputData.marks}
              onChange={(e) => handleFormInputData(e)} placeholder="Enter Marks" />
          </div>
        </div>
        <button class="btn lightBlue float-right px-5" onClick={handleSubmit}>Save</button>
      </form>
    </>
  );
}
export default Education