import React from "react";
import { useForm } from "react-hook-form";
import { Typeahead } from 'react-bootstrap-typeahead';
import { Context } from "../../../../Context/ProfileContext";
import ApiServicesOrgCandidate from "../../../../Services/ApiServicesOrgCandidate";
import { HTTP_REGX, MONTH_NAMES } from "../../../../Utils/AppConst";
import { certificationFormDefaultValues } from "../../../../Utils/ProfileFormHelper";
import moment from 'moment';

const Certification = ({ dataAttributes, showPopup }) => {
  const { handleSubmit, getValues, register, errors, setValue, reset, setError, clearErrors } = useForm({
    mode: 'all',
    defaultValues: certificationFormDefaultValues
  });
  const { state, getProfileInfo } = React.useContext(Context);
  const resourceId = dataAttributes && dataAttributes.resourceId;
  const [certificates, setCertificates] = React.useState([]);
  const initialCustomInputValues = {}
  const [customInputValues, setCustomInputValues] = React.useState(initialCustomInputValues);
  const [hasNoExpirationDate, setHasNoExpirationDate] = React.useState(false);
  React.useEffect(() => {
    ApiServicesOrgCandidate.getListOfCertificates().then((response) => {
      if (response) {
        const result = Object.keys(response.data.responseObject).map((key, index) => response.data.responseObject[key].certificates);
        setCertificates(result);
      } else {
        setCertificates([]);
      }
    })

    state.then((response) => {
      if (response && response.candidateCertificatesList && resourceId) {
        const resourceObj = response.candidateCertificatesList.filter(resObj => {
          return resObj.certificationId === resourceId
        })[0]
        if (resourceObj) {
          setValue("issueMonth", resourceObj.issueMonth);
          setValue("issueYear", resourceObj.issueYear);
          setValue("expirationMonth", resourceObj.expirationMonth);
          setValue("expirationYear", resourceObj.expirationYear);
          setValue("credentialId", resourceObj.credentialId);
          setValue("credentialURL", resourceObj.credentialURL);
          setCustomInputValues({ certificationName: resourceObj.certificationName });
        }
      }
    })
  }, []);

  const handleTypeheadErrorOnInputChange = (input, name, message) => {
    const value = input;
    // if (value) handlecustomInputValues(value, name);
    handleTypeheadError(value, name, message, false);
  }

  const handlecustomInputValues = (value, name) => {
    if (name === 'certificationName') {
      setCustomInputValues({ ...customInputValues, certificationName: value });
    }
  }

  const handleTypeheadErrorOnBlur = (e, name, message) => {
    const value = e.target.value;
    handleTypeheadError(value, name, message, true)
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
      if (!isBlur) {
        const messageText = name === 'certificationName' ? 'Please enter a valid Certification Name' : '';
        setError(name, {
          type: "manual",
          message: messageText
        });
      }
    }
  }

  const submitForm = (e) => {
    if (!customInputValues.certificationName) {
      setError('certificationName', {
        type: "manual",
        message: 'Certification Name field cannot be left blank'
      });
    }
  }
  const handleHasNoExpirationDate = e => {
    setHasNoExpirationDate(!hasNoExpirationDate);
  }
  const IssueAndExpirationDateOnChange = e => {
    // const { name, value } = e.target;
    // if (value) {
    //   const newIssueMonth = (name === 'issueMonth') ? value : values.issueMonth;
    //   const newIssueYear = (name === 'issueYear') ? value : values.issueYear;
    //   const newIssueDate = new moment(`${newIssueMonth}, 01, ${newIssueYear}`);
    //   const newExpirationMonth = (name === 'expirationMonth') ? value : values.expirationMonth;
    //   const newExpirationYear = (name === 'expirationYear') ? value : values.expirationYear;
    //   const newExpirationDate = new moment(`${newExpirationMonth}, 01, ${newExpirationYear}`);
    //   const isAllowToValidate = newIssueYear && newIssueMonth && newExpirationMonth && newExpirationDate;
    //   if ((name === 'issueYear' || name === 'issueMonth') && (isAllowToValidate)) {
    //     if (newIssueDate.format("YYYY-MM") >= newExpirationDate.format("YYYY-MM")) {
    //       setError('issueYear', {
    //         type: "manual",
    //         message: 'Issue Date cannot be greater than Expiration Date'
    //       });
    //       setError('issueMonth', {
    //         type: "manual",
    //         message: 'Issue Date cannot be greater than Expiration Date'
    //       });
    //       clearErrors('expirationYear');
    //       clearErrors('expirationMonth');
    //     } else {
    //       clearErrors('issueYear');
    //       clearErrors('issueMonth');
    //       clearErrors('expirationYear');
    //       clearErrors('expirationMonth');
    //     }
    //   } else if ((name === 'expirationYear' || name === 'expirationMonth') && (isAllowToValidate)) {
    //     if (newExpirationDate.format("YYYY-MM") <= newIssueDate.format("YYYY-MM")) {
    //       setError('expirationYear', {
    //         type: "manual",
    //         message: 'Expiration Date cannot be smaller than Issue Date'
    //       });
    //       setError('expirationMonth', {
    //         type: "manual",
    //         message: 'Expiration Date cannot be smaller than Issue Date'
    //       });
    //       clearErrors('issueYear');
    //       clearErrors('issueMonth');
    //     } else {
    //       clearErrors('issueYear');
    //       clearErrors('issueMonth');
    //       clearErrors('expirationYear');
    //       clearErrors('expirationMonth');
    //     }
    //   }
    // }
  }

  const values = getValues();
  const onSubmit = values => {
    if (resourceId) {
      ApiServicesOrgCandidate.updateCertification({ ...values, certificationName: customInputValues.certificationName, certificationId: resourceId }, getProfileInfo, showPopup);
    } else {
      ApiServicesOrgCandidate.addCertification({ ...values, certificationName: customInputValues.certificationName }, getProfileInfo, showPopup);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-4">
        <div className="form-group">
          <label htmlFor="certificationName">Certification Name<span >*</span></label>
          <Typeahead
            id="certificationName"
            className={errors.certificationName && 'is-invalid'}
            isInvalid={errors.certificationName}
            onBlur={e => handleTypeheadErrorOnBlur(e, 'certificationName', 'Certification Name field cannot be left blank')}
            onInputChange={(input, e) => handleTypeheadErrorOnInputChange(input, 'certificationName', 'Certification Name field cannot be left blank')}
            onChange={selected => handleTypeheadErrorOnChange(selected, 'certificationName')}
            options={certificates}
            placeholder="Choose a Certification Name..."
            selected={customInputValues.certificationName ? [customInputValues.certificationName] : null}
          />
          {errors.certificationName && <div class="errorMsg mt-2">{errors.certificationName.message}</div>}
        </div>
        <div class="custom-control custom-checkbox mr-sm-2">
          <input type="checkbox" class="custom-control-input" name="hasNoExpirationDate" id="hasNoExpirationDate" checked={hasNoExpirationDate} onChange={(e) => handleHasNoExpirationDate(e)} />
          <label class="custom-control-label" for="hasNoExpirationDate">This credentials does not expire</label>
        </div>
        <div className="form-group">
          <label htmlFor="issueYear" class="mt-2">Issue Date</label>
          <div class="form-row">
            <div className="col mr-3">
              <select
                id="issueYear"
                class={`form-control ${errors.issueYear && 'is-invalid'}`}
                name="issueYear"
                ref={register}
                onChange={IssueAndExpirationDateOnChange}
              >
                <option value="" selected>Select Year</option>
                {Array(50).fill().map((_, i) => (
                  <option key={`${i}_years`}>{parseInt(new Date().getFullYear()) - i}</option>
                ))}
              </select>
              {errors.issueYear && <div class="errorMsg mt-2">{errors.issueYear.message}</div>}
            </div>
            <div className="col ml-3">
              <select
                id="issueMonth"
                class={`form-control ${errors.issueMonth && 'is-invalid'}`}
                name="issueMonth"
                ref={register}
                onChange={IssueAndExpirationDateOnChange}
              >
                <option value="" selected>Select Month</option>
                {MONTH_NAMES.map((monthName, i) => (
                  <option key={`monthName`}>{monthName}</option>
                ))}
              </select>
              {errors.issueMonth && <div class="errorMsg mt-2">{errors.issueMonth.message}</div>}
            </div>
          </div>
        </div>
        {!hasNoExpirationDate ? <div> <label htmlFor="expirationYear">Expiration Date</label>
          <div className="form-group">
            <div class="form-row">
              <div className="col mr-3">
                <select
                  id="expirationYear"
                  class={`form-control ${errors.expirationYear && 'is-invalid'}`}
                  name="expirationYear"
                  ref={register}
                  onChange={IssueAndExpirationDateOnChange}
                >
                  <option value="" selected>Select Year</option>
                  {Array(100).fill().map((_, i) => (
                    <option key={`${i}_years`}>{(parseInt(new Date().getFullYear()) + 50) - i
                    }  </option>
                  ))}
                </select>
                {errors.expirationYear && <div class="errorMsg mt-2">{errors.expirationYear.message}</div>}
              </div>
              <div className="col ml-3">
                <select
                  id="expirationMonth"
                  class={`form-control ${errors.expirationMonth && 'is-invalid'}`}
                  name="expirationMonth"
                  ref={register}
                  onChange={IssueAndExpirationDateOnChange}
                >
                  <option value="" selected>Select Month</option>
                  {MONTH_NAMES.map((monthName, i) => (
                    <option key={`monthName`}>{monthName}</option>
                  ))}
                </select>
                {errors.expirationMonth && <div class="errorMsg mt-2">{errors.expirationMonth.message}</div>}
              </div>
            </div>
          </div></div> : <div class="col text-right mt-2 px-0">
            <span class="small-text-light ">This certification does not expire</span>
          </div>}
        <div className="form-group">
          <label htmlFor="credentialId">Credential ID</label>
          <input
            class={`form-control ${errors.credentialId && 'is-invalid'}`}
            id="credentialId"
            name="credentialId"
            ref={register}
            placeholder="Credential ID"
          />
          {errors.credentialId && <div class="errorMsg mt-2">{errors.credentialId.message}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="credentialURL">Credential URL</label>
          <input
            class={`form-control ${errors.credentialURL && 'is-invalid'}`}
            id="credentialURL"
            name="credentialURL"
            ref={register({
              required: "Credential URL field cannot be left blank",
              pattern: {
                value: HTTP_REGX,
                message: "Please enter a valid Credential URL"
              }
            })}
            placeholder="Enter Credential URL"
          />
          {errors.credentialURL && <div class="errorMsg mt-2">{errors.credentialURL.message}</div>}
        </div>
        <button type="submit" class="btn lightBlue float-right px-5" onClick={submitForm}>Save</button>
      </div>
    </form>
  );
};

export default Certification;