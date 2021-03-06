import React from "react";
import { useForm } from "react-hook-form";
import { Typeahead } from 'react-bootstrap-typeahead';
import { Context } from "../../../../Context/ProfileContext";
import ApiServicesOrgCandidate from "../../../../Services/ApiServicesOrgCandidate";
import { COURSE_TYPE_ENUM } from "../../../../Utils/AppConst";


const EducationComponent = ({ dataAttributes, showPopup }) => {
  const { handleSubmit, getValues, register, errors, setValue, reset, setError, clearErrors } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      passingOutYear: ''
    }
  });
  const { state, getProfileInfo } = React.useContext(Context);
  const resourceId = dataAttributes && dataAttributes.resourceId;
  const [boards, setBoards] = React.useState([]);
  const [institutes, setInstitutes] = React.useState([]);
  const [isSchoolForm, setIsSchoolForm] = React.useState(false);
  const initialCustomInputValues = { courseType: COURSE_TYPE_ENUM.FULL_TIME }
  const [customInputValues, setCustomInputValues] = React.useState(initialCustomInputValues);
  React.useEffect(() => {
    ApiServicesOrgCandidate.getListOfInstitutes().then((response) => {
      if (response) {
        const result = Object.keys(response.data.responseObject).map((key, index) => response.data.responseObject[key].institute);
        setInstitutes(result);
      } else {
        setInstitutes([]);
      }
    })
    ApiServicesOrgCandidate.getListOfBoards().then((response) => {
      if (response) {
        const result = Object.keys(response.data.responseObject).map((key, index) => response.data.responseObject[key].board_name);
        setBoards(result);
      } else {
        setBoards([]);
      }
    })
    state.then((response) => {
      if (response && response.educationDetailsList && resourceId) {
        const resourceObj = response.educationDetailsList.filter(resObj => {
          return resObj.educationId === resourceId
        })[0]
        if (resourceObj) {
          setValue("educationType", resourceObj.educationType);
          setValue("course", resourceObj.course);
          setValue("specialization", resourceObj.specialization);
          setValue("educationType", resourceObj.educationType);
          setValue("passingOutYear", resourceObj.passingOutYear);
          setValue("marks", resourceObj.marks);
          changeIsSchoolForm(resourceObj.educationType);
          setCustomInputValues({ board: resourceObj.board, university: resourceObj.university, courseType: resourceObj.courseType });
        }
      }
    })
  }, []);

  const changeIsSchoolForm = value => {
    if (value === '10th' || value === '12th') {
      setIsSchoolForm(true);
    } else {
      setIsSchoolForm(false);
    }
  }

  const handleTypeheadErrorOnInputChange = (input, name, message) => {
    const value = input;
    if (value) {
      setCustomInputValues({ ...customInputValues, [name]: value });
    } else {
      handleTypeheadError(value, name, message, false);
    }
  }

  const handlecustomInputValues = (value, name) => {
    setCustomInputValues({ ...customInputValues, [name]: value });
  }

  const handleTypeheadErrorOnChange = (selected, name) => {
    handlecustomInputValues(selected[0], name);
    clearErrors(name)
  }

  const handleTypeheadError = (value, name, message, isBlur) => {
    if (!value) {
      setError(name, {
        type: "manual",
        message: message
      });
    } else {
      clearErrors(name);
    }
  }
  const onChangeEducationType = e => {
    const value = e.target.value;
    if (value) {
      reset({ educationType: value });
      setCustomInputValues(initialCustomInputValues)
    }
    changeIsSchoolForm(value)
  }
  const submitForm = (e) => {
    if (isSchoolForm && !customInputValues.board) {
      setError('board', {
        type: "manual",
        message: 'Board cannot be left blank'
      });
    }
    if (!isSchoolForm && !customInputValues.university) {
      setError('university', {
        type: "manual",
        message: 'University/Institute cannot be left blank'
      });
    }
    if (!isSchoolForm && !customInputValues.courseType) {
      setError('courseType', {
        type: "manual",
        message: 'Course Type cannot be left blank'
      });
    }
  }
  const onChangeCourseType = (e) => {
    const value = e.target.value;
    if (value === COURSE_TYPE_ENUM.FULL_TIME || value === COURSE_TYPE_ENUM.PART_TIME || value === COURSE_TYPE_ENUM.CORRESPONDENCE) {
      clearErrors('courseType');
    }
    setCustomInputValues({ ...customInputValues, courseType: e.target.value })
  }
  const values = getValues();
  const onSubmit = values => {
    if (resourceId) {
      ApiServicesOrgCandidate.updateEducation({ ...values, board: customInputValues.board, university: customInputValues.university, courseType: customInputValues.courseType, educationId: resourceId }, getProfileInfo, showPopup);
    } else {
      ApiServicesOrgCandidate.addEducation({ ...values, board: customInputValues.board, university: customInputValues.university, courseType: customInputValues.courseType }, getProfileInfo, showPopup);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-4">
        <div className="form-group">
          <label htmlFor="educationType">Education Type<span>*</span></label>
          <select
            id="educationType"
            class={`form-control ${errors.educationType && 'is-invalid'}`}
            name="educationType"
            onChange={onChangeEducationType}
            ref={register({
              required: "Education Type cannot be left blank"
            })}
          >
            <option value="" selected>Select Education Type</option>
            <option value="Doctorate/PhD">Doctorate/PhD</option>
            <option value="Masters/Post-Graduation">Masters/Post-Graduation</option>
            <option value="Graduation/Diploma">Graduation/Diploma</option>
            {<option value="12th">12th</option>}
            {<option value="10th">10th</option>}
          </select>
          {errors.educationType && <div class="errorMsg mt-2">{errors.educationType.message}</div>}
        </div>
        {isSchoolForm ? <div className="form-group">
          <label htmlFor="board">Board<span >*</span></label>
          <Typeahead
            id="board"
            className={errors.board && 'is-invalid'}
            isInvalid={errors.board}
            onInputChange={(input, e) => handleTypeheadErrorOnInputChange(input, 'board', 'Board cannot be left blank')}
            onChange={selected => handleTypeheadErrorOnChange(selected, 'board')}
            options={boards}
            placeholder="Choose a Board..."
            selected={customInputValues.board ? [customInputValues.board] : null}
          />
          {errors.board && <div class="errorMsg mt-2">{errors.board.message}</div>}
        </div> :
          <div>
            <div className="form-group">
              <label htmlFor="course">Course<span>*</span></label>
              <input
                class={`form-control ${errors.course && 'is-invalid'}`}
                id="course"
                name="course"
                ref={register({
                  required: "Course cannot be left blank",
                })}
                placeholder="Enter Course"
              />
              {errors.course && <div class="errorMsg mt-2">{errors.course.message}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="specialization">Specialization<span>*</span></label>
              <input
                class={`form-control ${errors.specialization && 'is-invalid'}`}
                id="specialization"
                name="specialization"
                ref={register({
                  required: "Specialization cannot be left blank",
                })}
                placeholder="Enter Specialization"
              />
              {errors.specialization && <div class="errorMsg mt-2">{errors.specialization.message}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="university">University/Institute<span >*</span></label>
              <Typeahead
                id="university"
                className={errors.university && 'is-invalid'}
                isInvalid={errors.university}
                onInputChange={(input, e) => handleTypeheadErrorOnInputChange(input, 'university', 'University/Institute cannot be left blank')}
                onChange={selected => handleTypeheadErrorOnChange(selected, 'university')}
                options={institutes}
                placeholder="Choose a University/Institute..."
                selected={customInputValues.university ? [customInputValues.university] : null}
              />
              {errors.university && <div class="errorMsg mt-2">{errors.university.message}</div>}
            </div>
            <div class="form-group">
              <label htmlFor="University">Course Type</label>
              <div>
                <div class={customInputValues.courseType === COURSE_TYPE_ENUM.FULL_TIME ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                  <input
                    type="radio"
                    class="form-check-input mr-2"
                    id="courseType"
                    name="courseType"
                    defaultValue={COURSE_TYPE_ENUM.FULL_TIME}
                    checked={customInputValues.courseType === COURSE_TYPE_ENUM.FULL_TIME}
                    onChange={onChangeCourseType}
                  />
                  <label class="radio-inline form-check-label" for="materialChecked2">Full Time</label>
                </div>
                <div class={customInputValues.courseType === COURSE_TYPE_ENUM.PART_TIME ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                  <input
                    type="radio"
                    class="form-check-input mr-2"
                    id="courseType"
                    name="courseType"
                    defaultValue={COURSE_TYPE_ENUM.PART_TIME}
                    checked={customInputValues.courseType === COURSE_TYPE_ENUM.PART_TIME}
                    onChange={onChangeCourseType}
                  />
                  <label class="modal-label radio-inline form-check-label" for="materialChecked2">Part Time</label>
                </div>
                <div class={customInputValues.courseType === COURSE_TYPE_ENUM.CORRESPONDENCE ? "modal-label form-check" : "modal-label form-check form-check-inline modal-fade"}>
                  <input
                    type="radio"
                    class="form-check-input"
                    id="courseType"
                    name="courseType"
                    defaultValue={COURSE_TYPE_ENUM.CORRESPONDENCE}
                    checked={customInputValues.courseType === COURSE_TYPE_ENUM.CORRESPONDENCE}
                    onChange={onChangeCourseType}
                  />
                  <label class="modal-label radio-inline form-check-label" for="materialChecked2">Correspondence/Distance Learning</label>
                </div>
              </div>
              {errors.courseType && <div class="errorMsg mt-2">{errors.courseType.message}</div>}
            </div>
          </div>}
        <div className="form-group">
          <label htmlFor="passingOutYear">Passing out year<span >*</span></label>
          <select id="passingOutYear"
            class={`form-control ${errors.passingOutYear && 'is-invalid'}`}
            name="passingOutYear"

            ref={register({
              required: "Passing out year cannot be left blank"
            })}
          >
            <option value="" selected>Select Passing Out Year</option>
            {Array(50).fill().map((_, i) => (
              <option key={`${i}_years`}>{parseInt(new Date().getFullYear()) - i}</option>
            ))}
          </select>
          {errors.passingOutYear && <div class="errorMsg mt-2">{errors.passingOutYear.message}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="marks">Passing % Or Grade<span>*</span></label>
          <input
            class={`form-control ${errors.marks && 'is-invalid'}`}
            id="marks"
            name="marks"
            ref={register({
              required: "Marks cannot be left blank",
            })}
            placeholder="Enter Marks"
          />
          {errors.marks && <div class="errorMsg mt-2">{errors.marks.message}</div>}
        </div>
        <button type="submit" class="btn lightBlue float-right px-5" onClick={submitForm}>Save</button>
      </div>
    </form>
  );
};

export default React.memo(EducationComponent)