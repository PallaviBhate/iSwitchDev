import React from 'react';
import { useForm } from "react-hook-form";
import { Context } from '../../../../Context/ProfileContext';
import { employmentFormDefaultValue } from '../../../../Utils/ProfileFormHelper';
import { MAX_LENGTH, CANDIDATE_ID, MONTH_NAMES } from '../../../../Utils/AppConst';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Typeahead } from 'react-bootstrap-typeahead';
import moment from 'moment';

const EmploymentComponent = ({ dataAttributes, showPopup }) => {
  const { state, getProfileInfo } = React.useContext(Context);
  const resourceId = dataAttributes && dataAttributes.resourceId;
  const [descriptionLength, setDescriptionLength] = React.useState(MAX_LENGTH);
  const { handleSubmit, register, errors, getValues, setValue, setError, clearErrors } = useForm({
    mode: 'onSubmit',
    defaultValues: employmentFormDefaultValue
  });
  const values = getValues();
  const [organizations, setOrganizations] = React.useState([]);
  const initialCustomInputValues = {}
  const [customInputValues, setCustomInputValues] = React.useState(initialCustomInputValues);
  React.useEffect(() => {
    ApiServicesOrgCandidate.getListOfOrganizations().then((response) => {
      if (response) {
        const result = Object.keys(response.data.responseObject).map((key, index) => response.data.responseObject[key].organizations);
        console.log(result)
        setOrganizations(result);
      } else {
        setOrganizations('');
      }
    })
    state.then((response) => {
      console.log(resourceId)
      if (response && response.employmentDetailsList && resourceId) {
        const resourceObj = response.employmentDetailsList.filter(resObj => {
          return resObj.employmentId === resourceId
        })[0]
        if (resourceObj) {
          const { currentCompany, description, designation, employmentType, organization, startedWorkingFromMonth, startedWorkingFromYear, workedTillMonth, workedTillYear } = resourceObj;
          setValue("description", description);
          setValue("designation", designation);
          setValue("employmentType", employmentType);
          setValue("startedWorkingFromMonth", startedWorkingFromMonth);
          setValue("startedWorkingFromYear", startedWorkingFromYear);
          setValue("workedTillMonth", workedTillMonth);
          setValue("workedTillYear", workedTillYear);
          setCustomInputValues({ currentCompany: currentCompany, organization: organization });
        }
      }
    });
  }, []);

  const onInputChange = e => {
    setDescriptionLength(MAX_LENGTH - e.target.value.length);
  }

  const onSubmit = values => {

    if (resourceId) {
      ApiServicesOrgCandidate.updateEmployment({ ...values, currentCompany: customInputValues.currentCompany, organization: customInputValues.organization, employmentId: resourceId }, getProfileInfo, showPopup);
    } else {
      ApiServicesOrgCandidate.addEmployment({ ...values, currentCompany: customInputValues.currentCompany, organization: customInputValues.organization }, getProfileInfo, showPopup);
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

  const starDateEndDateValidation = (startMonth, startYear, endMonth, endYear, isEndDateChange) => {
    if (startMonth && startYear && endMonth && endYear) {
      const startMonthValue = parseInt(moment().month(startMonth).format("M")) - 1;
      const endMonthValue = parseInt(moment().month(endMonth).format("M")) - 1;
      const startDate = new Date(parseInt(startYear), startMonthValue).getTime();
      const endDate = new Date(parseInt(endYear), endMonthValue).getTime();
      let message = isEndDateChange ? 'End Date cannot be smaller than Start Date' : 'Start Date cannot be greater than End Date';
      clearErrors('endDate');
      clearErrors('startDate');
      if (startDate > endDate) {
        setError(isEndDateChange ? 'endDate' : 'startDate', {
          type: "manual",
          message: message
        });
      }
    }
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

  const onChangeIsCurrentCompany = (e) => {
    const value = JSON.parse(e.target.value.toLowerCase());
    setCustomInputValues({ ...customInputValues, currentCompany: value })
    clearErrors('endDate');
    clearErrors('startDate');
  }

  const monthAndDateOnChange = e => {
    const { name, value } = e.target;
    const startMonth = name === 'startedWorkingFromMonth' ? value : values.startedWorkingFromMonth;
    const startYear = name === 'startedWorkingFromYear' ? value : values.startedWorkingFromYear;
    const endMonth = name === 'workedTillMonth' ? value : values.workedTillMonth;
    const endYear = name === 'workedTillYear' ? value : values.workedTillYear;
    const isEndDateChange = name === 'workedTillMonth' || name === 'workedTillYear'
    starDateEndDateValidation(startMonth, startYear, endMonth, endYear, isEndDateChange);
  }

  const submitForm = (e) => {
    if (!customInputValues.organization) {
      setError('organization', {
        type: "manual",
        message: 'Organization cannot be left blank'
      });
    }
    const startMonth = values.startedWorkingFromMonth;
    const startYear = values.startedWorkingFromYear;
    const endMonth = values.workedTillMonth;
    const endYear = values.workedTillYear;
    const isEndDateChange = false
    starDateEndDateValidation(startMonth, startYear, endMonth, endYear, isEndDateChange);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-4">
        <div className="form-group">
          <label htmlFor="designation">Designation<span >*</span></label>
          <input
            class={`form-control ${errors.designation && 'is-invalid'}`}
            id="_designation"
            name="designation"
            ref={register({
              required: "Designation cannot be left blank"
            })}
            placeholder="Enter Designation"
          />
          {errors.designation && <div class="errorMsg mt-2">{errors.designation.message}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization<span >*</span></label>
          <Typeahead
            id="_organization"
            className={errors.organization && 'is-invalid'}
            isInvalid={errors.organization}
            onInputChange={(input, e) => handleTypeheadErrorOnInputChange(input, 'organization', 'Organization cannot be left blank')}
            onChange={selected => handleTypeheadErrorOnChange(selected, 'organization')}
            options={organizations}
            placeholder="Choose a Organization..."
            selected={customInputValues.organization ? [customInputValues.organization] : null}
          />
          {errors.organization && <div class="errorMsg mt-2">{errors.organization.message}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="employmentType">Employment Type<span >*</span></label>
          <div class="form-row">
            <div className="col">
              <select
                id="_employmentType"
                class={`form-control ${errors.employmentType && 'is-invalid'}`}
                name="employmentType"
                ref={register({
                  required: "Employment Type cannot be left blank"
                })}
              >
                <option value="" selected>Select Employment Type</option>
                <option>Permanent</option>
                <option>Contractual</option>
                <option>Internship</option>
              </select>
              {errors.employmentType && <div class="errorMsg mt-2">{errors.employmentType.message}</div>}
            </div>
          </div>
        </div>

        <div class="form-group">
          <label htmlFor="currentCompany">Is this your current company?</label>
          <div>
            <div class={customInputValues.currentCompany ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
              <input
                type="radio"
                class="form-check-input mr-2"
                id="_currentCompany"
                name="currentCompany"
                defaultValue={true}
                checked={customInputValues.currentCompany}
                onChange={onChangeIsCurrentCompany}
              />
              <label class="radio-inline form-check-label" for="materialChecked2">Yes</label>
            </div>
            <div class={!customInputValues.currentCompany ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
              <input
                type="radio"
                class="form-check-input mr-2"
                id="_currentCompany"
                name="currentCompany"
                defaultValue={false}
                checked={!customInputValues.currentCompany}
                onChange={onChangeIsCurrentCompany}
              />
              <label class="modal-label radio-inline form-check-label" for="materialChecked2">No</label>
            </div>
          </div>
          {errors.currentCompany && <div class="errorMsg mt-2">{errors.currentCompany.message}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="startedWorkingFromYear" class="mt-2">Started working from</label>
          <div class="form-row">
            <div className="col mr-3">
              <select
                id="_startedWorkingFromYear"
                class={`form-control ${(errors.startedWorkingFromYear || errors.startDate) && 'is-invalid'}`}
                name="startedWorkingFromYear"
                ref={register({
                  required: "Year cannot be left blank"
                })}
                onChange={monthAndDateOnChange}
              >
                <option value="" selected>Select Year</option>
                {Array(50).fill().map((_, i) => (
                  <option key={`${i}_years`}>{parseInt(new Date().getFullYear()) - i}</option>
                ))}
              </select>
              {errors.startedWorkingFromYear && <div class="errorMsg mt-2">{errors.startedWorkingFromYear.message}</div>}
            </div>
            <div className="col ml-3">
              <select
                id="_startedWorkingFromMonth"
                class={`form-control ${(errors.startedWorkingFromMonth || errors.startDate) && 'is-invalid'}`}
                name="startedWorkingFromMonth"
                ref={register({
                  required: "Month cannot be left blank"
                })}
                onChange={monthAndDateOnChange}
              >
                <option value="" selected>Select Month</option>
                {MONTH_NAMES.map((monthName, i) => (
                  <option key={`monthName`}>{monthName}</option>
                ))}
              </select>
              {errors.startedWorkingFromMonth && <div class="errorMsg mt-2">{errors.startedWorkingFromMonth.message}</div>}
            </div>
            <div class="col-12">{errors.startDate && <div class="errorMsg mt-2">{errors.startDate.message}</div>}</div>
          </div>
        </div>
        {!customInputValues.currentCompany ? <div> <label htmlFor="workedTillYear">Worked Till</label>
          <div className="form-group">
            <div class="form-row">
              <div className="col mr-3">
                <select
                  id="_workedTillYear"
                  class={`form-control ${(errors.workedTillYear || errors.endDate) && 'is-invalid'}`}
                  name="workedTillYear"
                  ref={register({
                    required: "Year cannot be left blank"
                  })}
                  onChange={monthAndDateOnChange}

                >
                  <option value="" selected>Select Year</option>
                  {Array(50).fill().map((_, i) => (
                    <option key={`${i}_years`}>{parseInt(new Date().getFullYear()) - i}</option>
                  ))}
                </select>
                {errors.workedTillYear && <div class="errorMsg mt-2">{errors.workedTillYear.message}</div>}
              </div>
              <div className="col ml-3">
                <select
                  id="_workedTillMonth"
                  class={`form-control ${(errors.workedTillMonth || errors.endDate) && 'is-invalid'}`}
                  name="workedTillMonth"
                  ref={register({
                    required: "Month cannot be left blank"
                  })}
                  onChange={monthAndDateOnChange}

                >
                  <option value="" selected>Select Month</option>
                  {MONTH_NAMES.map((monthName, i) => (
                    <option key={`monthName`}>{monthName}</option>
                  ))}
                </select>
                {errors.workedTillMonth && <div class="errorMsg mt-2">{errors.workedTillMonth.message}</div>}
              </div>
              <div class="col-12">{errors.endDate && <div class="errorMsg mt-2">{errors.endDate.message}</div>}</div>
            </div>
          </div></div> : ''}
        <div className="form-group">
          <label for="description">Describe your job profile</label>
          <textarea class={`form-control ${errors.description && 'is-invalid'}`} rows="10"
            id="_description"
            placeholder="Enter Your Job Profile Details Here..."
            name="description"
            onChange={onInputChange}
            maxLength={MAX_LENGTH}
            ref={register({
              required: false,
            })}
          ></textarea>
          <div class="row m-0 p-0 mt-2">
            <div class="col-6 m-0 p-0">{errors.description && <span class="errorMsg">{errors.description.message}</span>}</div>
            <div class="col-6 text-right m-0 p-0"><span class="small-text-light ">{descriptionLength > -1 ? `${descriptionLength} Characters Left` : `Description exceed ${MAX_LENGTH} characters`} </span></div>
          </div>
        </div>
      </div>
      <button class="btn lightBlue float-right px-5" onClick={submitForm}>Save</button>
    </form>
  );
}

export default React.memo(EmploymentComponent)
