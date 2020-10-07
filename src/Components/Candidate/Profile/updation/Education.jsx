import React, { useContext, useState } from 'react';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Context } from '../../../../Context/ProfileContext';
import { MONTH_NAMES } from '../../../../Utils/AppConst';
import { usePrevious } from '../../../../Utils/usePrevious';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useForm } from "react-hook-form";

const Education = ({ dataAttributes, showPopup }) => {
  const [inputData, setFormInputData] = React.useState({ educationType: '', board: '', course: '', specialization: '', university: '', courseType: '', passingOutYear: '', medium: '', marks: '' })
  const [educationInfo, setEducationInfo] = React.useState('');
  const { state, getProfileInfo } = useContext(Context);
  const resourceId = dataAttributes && dataAttributes.resourceId;
  const [singleInstitute, setSingleInstitute] = useState('');
  const [institute, setInstitute] = useState([]);
  const [singleBoards, setSingleBoards] = useState('');
  const [boards, setBoards] = useState([]);
  const isSchoolEducation = inputData.educationType === '10th' || inputData.educationType === '12th'
  const { register, errors, handleSubmit } = useForm({mode: 'all'});
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
    state.then((response) => {
      if (response && response.educationDetailsList) {
        const educationInfoObject = response.educationDetailsList.filter(education => {
          return education.educationId === resourceId
        })[0]
        setEducationInfo(educationInfoObject);
        if (resourceId) {
          setSingleBoards([educationInfoObject.board])
          setSingleInstitute([educationInfoObject.university])
        }
      }
    })
  }, []);
  React.useEffect(() => {
    if (resourceId && educationInfo) {
      const { educationType, board, course, specialization, university, courseType, passingOutYear, medium, marks } = educationInfo;
      console.log(resourceId)
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
    console.log(e.target)
    if (e.target.name === 'educationType') {
      inputData.course = '';
      inputData.specialization = '';
      inputData.university = '';
      inputData.courseType = '';
      inputData.passingOutYear = '';
      inputData.board = '';
      inputData.marks = '';
      setSingleBoards('');
      setSingleInstitute('')
      console.log(inputData)
    }
    return (
      setFormInputData({
        ...inputData,
        [e.target.name]: e.target.value
      })
    )
  }
  const onSubmit = (e) => {
    // e.preventDefault();
    let data = {
      "educationType": inputData.educationType,
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-4">
          <div className="form-group">
            <label htmlFor="educationType">Education Type<span >*</span></label>

            <select id="educationType"
              className="form-control"
              name="educationType" defaultValue={inputData.educationType}
              onChange={(e) => handleFormInputData(e)}
              ref={register({ required: 'Select Education Type' })}
            >
              <option defaultValue="" disabled selected>Select Education Type</option>
              <option defaultValue="Doctorate/PhD">Doctorate/PhD</option>
              <option defaultValue="Masters/Post-Graduation">Masters/Post-Graduation</option>
              <option defaultValue="Graduation/Diploma">Graduation/Diploma</option>
              <option defaultValue="12th">12th</option>
              <option defaultValue="10th">10th</option>
            </select>
            {errors.educationType && <div class="errorMsg">Please Enter Education Type</div>}
          </div>
          {isSchoolEducation ? <div className="form-group">
            <label htmlFor="board">Board<span >*</span></label>
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
              <label htmlFor="course">Course<span >*</span></label>
              <input class="form-control" type="text"
                name="course"
                defaultValue={inputData.course}
                ref={register({ required: true })}
                onChange={(e) => handleFormInputData(e)} placeholder="Enter Course" />
              {errors.course && <div class="errorMsg">Please Enter Course</div>}
            </div>
            <div className="form-group">
              <label htmlFor="specialization">Specialization<span >*</span></label>
              <input class="form-control" type="text"
                name="specialization"
                defaultValue={inputData.specialization}
                ref={register({ required: true })}
                onChange={(e) => handleFormInputData(e)} placeholder="Enter Specialization" />
              {errors.specialization && <div class="errorMsg">Please Enter Specialization</div>}
            </div>
            <div className="form-group">
              <label htmlFor="university">University/Institute<span >*</span></label>
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
                    defaultValue="fullTime"
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
                    defaultValue="partTime"
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
                    defaultValue="correspondence"
                    checked={inputData.courseType === 'correspondence'}
                    onChange={handleFormInputData}
                  />
                  <label class="modal-label radio-inline form-check-label" for="materialChecked2">Correspondence/Distance Learning</label>
                </div>
              </div>
            </div>
          </div> : null}
          <div className="form-group">
            <label htmlFor="passingOutYear">Passing out year<span >*</span></label>
            <div class="form-row">
              <div className="col">
                <select id="passingOutYear"
                  className="form-control"
                  name="passingOutYear"
                  defaultValue={inputData.passingOutYear}
                  ref={register({ required: 'Select Passing Out Year' })}
                  onChange={(e) => handleFormInputData(e)}>
                  <option defaultValue="" disabled selected>Select Passing Out Year</option>
                  {Array(50).fill().map((_, i) => (
                    <option key={`${i}_years`}>{parseInt(new Date().getFullYear()) - i}</option>
                  ))}
                </select>
                {errors.passingOutYear && <div class="errorMsg">Please Enter Marks</div>}
              </div>
            </div>
          </div>
          {inputData.ed}<div className="form-group">
            <label htmlFor="University">Marks<span class="required">*</span></label>
            <input class="form-control" type="text"
              name="marks"
              defaultValue={inputData.marks}
              ref={register({ required: true })}
              onChange={(e) => handleFormInputData(e)} placeholder="Enter Marks" />
            {errors.marks && <div class="errorMsg">Please Enter Marks</div>}
          </div>
        </div>
        <button class="btn lightBlue float-right px-5">Save</button>
      </form>
    </>
  );
}
export default Education