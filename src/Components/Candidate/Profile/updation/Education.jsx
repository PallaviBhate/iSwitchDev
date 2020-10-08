import React from "react";
import { useForm } from "react-hook-form";
import { Typeahead } from 'react-bootstrap-typeahead';
import { Context } from "../../../../Context/ProfileContext";
import ApiServicesOrgCandidate from "../../../../Services/ApiServicesOrgCandidate";


const Education = ({ dataAttributes, showPopup }) => {
  // const [defaultValues1, setDefaultValues] = React.useState({})
  const { handleSubmit, getValues, register, errors, setValue, reset, setError, clearErrors } = useForm({
    mode: 'all'
  });
  const { state, getProfileInfo } = React.useContext(Context);
  const resourceId = dataAttributes && dataAttributes.resourceId;
  const [boards, setBoards] = React.useState([]);
  const [institutes, setInstitutes] = React.useState([]);
  const [isSchoolForm, setIsSchoolForm] = React.useState(false);
  const [typeheadValues, setTypeheadValues] = React.useState({});
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
        const educationInfoObject = response.educationDetailsList.filter(education => {
          return education.educationId === resourceId
        })[0]
        if (educationInfoObject) {
          setValue("educationType", educationInfoObject.educationType);
          setValue("board", educationInfoObject.board);
          setValue("course", educationInfoObject.course);
          setValue("specialization", educationInfoObject.specialization);
          setValue("university", educationInfoObject.university);
          setValue("educationType", educationInfoObject.educationType);
          setValue("courseType", educationInfoObject.courseType);
          setValue("passingOutYear", educationInfoObject.passingOutYear);
          setValue("marks", educationInfoObject.marks);
          changeIsSchoolForm(educationInfoObject.educationType);
          setTypeheadValues({ board: educationInfoObject.board, university: educationInfoObject.university });
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
    // if (value) handleTypeheadValues(value, name);
    handleTypeheadError(value, name, message, false);
  }

  const handleTypeheadValues = (value, name) => {
    if (name === 'board') {
      setTypeheadValues({ ...typeheadValues, board: value });
    } else if (name === 'university') {
      setTypeheadValues({ ...typeheadValues, university: value });
    }
  }

  const handleTypeheadErrorOnBlur = (e, name, message) => {
    const value = e.target.value;
    handleTypeheadError(value, name, message, true)
  }

  const handleTypeheadErrorOnChange = (selected, name) => {
    handleTypeheadValues(selected[0], name);
    clearErrors(name)
  }

  const handleTypeheadError = (value, name, message, isBlur) => {
    if (!value) {
      setError(name, {
        type: "manual",
        message: message
      });
    } else {
      if (!isBlur) {
        setError(name, {
          type: "manual",
          message: 'Not Valid'
        });
      }
    }
  }
  const onChangeEducationType = e => {
    const value = e.target.value;
    if (value) {
      reset({ educationType: value });
      setTypeheadValues({})
    }
    changeIsSchoolForm(value)
  }
  const submitForm = (e) => {
    if (isSchoolForm && !typeheadValues.board) {
      setError('board', {
        type: "manual",
        message: 'Board is required'
      } );
    }
    if (!isSchoolForm && !typeheadValues.university) {
      setError('university', {
        type: "manual",
        message: 'University/Institute is Required'
      });
    } 
    
  }
  const values = getValues();
  const onSubmit = values => {
    if (resourceId) {
      ApiServicesOrgCandidate.updateEducation({ ...values, board: typeheadValues.board, university: typeheadValues.university, educationId: resourceId }, getProfileInfo, showPopup);
    } else {
      ApiServicesOrgCandidate.addEducation({ ...values, board: typeheadValues.board, university: typeheadValues.university }, getProfileInfo, showPopup);
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
              required: "Required"
            })}
          >
            <option value="" selected>Select Education Type</option>
            <option value="Doctorate/PhD">Doctorate/PhD</option>
            <option value="Masters/Post-Graduation">Masters/Post-Graduation</option>
            <option value="Graduation/Diploma">Graduation/Diploma</option>
            <option value="12th">12th</option>
            <option value="10th">10th</option>
          </select>
          {errors.educationType && <div class="errorMsg mt-2">{errors.educationType.message}</div>}
        </div>
        {isSchoolForm ? <div className="form-group">
          <label htmlFor="board">Board<span >*</span></label>
          <Typeahead
            id="board"
            className={errors.board && 'is-invalid'}
            isInvalid={errors.board}
            onBlur={e => handleTypeheadErrorOnBlur(e, 'board', 'Board is Required')}
            onInputChange={(input, e) => handleTypeheadErrorOnInputChange(input, 'board', 'Board is Required')}
            onChange={selected => handleTypeheadErrorOnChange(selected, 'board')}
            options={boards}
            placeholder="Choose a Board..."
            selected={typeheadValues.board ? [typeheadValues.board] : null}
          />
          {errors.board && <div class="errorMsg mt-2">{errors.board.message}</div>}
        </div> : <div><div className="form-group">
          <label htmlFor="course">Course<span>*</span></label>
          <input
            class={`form-control ${errors.course && 'is-invalid'}`}
            id="course"
            name="course"
            ref={register({
              required: "Required",
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
                  required: "Required",
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
                onBlur={e => handleTypeheadErrorOnBlur(e, 'university', 'University/Institute is Required')}
                onInputChange={(input, e) => handleTypeheadErrorOnInputChange(input, 'university', 'University/Institute is Required')}
                onChange={selected => handleTypeheadErrorOnChange(selected, 'university')}
                options={institutes}
                placeholder="Choose a University/Institute..."
                selected={typeheadValues.university ? [typeheadValues.university] : null}
              />
              {errors.university && <div class="errorMsg mt-2">{errors.university.message}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="courseType">Course Type</label>
              <div />
              <div class={values.courseType === 'fullTime' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input mr-2"
                  id="courseType1"
                  name="courseType"
                  onClick={_ => setValue("courseType", 'fullTime')}
                  defaultChecked={values.courseType === 'fullTime'}
                />
                <label class="radio-inline form-check-label" for="materialChecked2">Full Time</label>
              </div>
              <div class={values.courseType === 'partTime' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input mr-2"
                  id="courseType"
                  name="courseType"
                  onClick={_ => setValue("courseType", 'partTime')}
                  defaultChecked={values.courseType === 'partTime'}
                />
                <label class="modal-label radio-inline form-check-label" for="materialChecked2">Part Time</label>
              </div>
              <div class={values.courseType === 'correspondence' ? "modal-label form-check" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input"
                  id="courseType"
                  name="courseType"
                  onClick={_ => setValue("courseType", 'correspondence')}
                  defaultChecked={values.courseType === 'correspondence'}
                />
                <label class="modal-label radio-inline form-check-label" for="materialChecked2">Correspondence/Distance Learning</label>
              </div>
              {errors.courseType && <div class="errorMsg mt-2">{errors.courseType.message}</div>}
            </div></div>}

        <div className="form-group">
          <label htmlFor="marks">Marks<span>*</span></label>
          <input
            class={`form-control ${errors.marks && 'is-invalid'}`}
            id="marks"
            name="marks"
            ref={register({
              required: "Required",
              pattern: {
                value: /(\d+(\.\d+)?)/,
                message: "invalid Marks"
              }
            })}
            placeholder="Enter Marks"
          />
          {errors.marks && <div class="errorMsg mt-2">{errors.marks.message}</div>}
        </div>
        <button type="submit" class="btn lightBlue float-right px-5" onClick={submitForm}>Save</button>
      </div>
    </form >
  );
};

export default Education;