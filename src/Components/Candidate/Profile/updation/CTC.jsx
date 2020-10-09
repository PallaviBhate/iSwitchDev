import React from 'react';
import { useForm } from "react-hook-form";
import { Context } from '../../../../Context/ProfileContext';
import { cTCFormDefaultValues, getCTCInLakh, getCTCInThousand, getCTCInFormat } from '../../../../Utils/ProfileFormHelper';
import { CANDIDATE_ID, CURRENCY_TYPE_ENUM } from '../../../../Utils/AppConst';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';

const CTC = ({ showPopup }) => {
  const { state, getProfileInfo } = React.useContext(Context);
  const initialCustomInputValues = {currencyType: CURRENCY_TYPE_ENUM.INR}
  const [customInputValues, setCustomInputValues] = React.useState(initialCustomInputValues);

  const { handleSubmit, register, errors, setValue, clearErrors, getValues } = useForm({
    mode: 'all',
    defaultValues: cTCFormDefaultValues
  });
  const values = getValues();
  const onChangeCurrencyType = (e) => {
    const value = e.target.value;
    if (value === CURRENCY_TYPE_ENUM.INR || value === CURRENCY_TYPE_ENUM.USD) {
      clearErrors('currencyType');
    }
    setCustomInputValues({currencyType: e.target.value})
  }

  React.useEffect(() => {
    state.then((response) => {
      if (response && response.candidateInfo) {
        const { candidateInfo } = response;
        const { currencyType, currentCTC, expectedCTC } = candidateInfo;
        setCustomInputValues({ currencyType: currencyType });
        setValue('currentCtcInLakh', getCTCInLakh(currentCTC));
        setValue('currentCtcInThousand', getCTCInThousand(expectedCTC));
        setValue('expectedCtcInLakh', getCTCInLakh(expectedCTC));
        setValue('expectedCtcInThousand', getCTCInThousand(expectedCTC));
      }
    })
  }, []);

  const onSubmit = values => {
    const data = {
      currencyType: customInputValues.currencyType,
      currentCTC: getCTCInFormat(values.currentCtcInLakh, values.currentCtcInThousand),
      expectedCTC: getCTCInFormat(values.expectedCtcInLakh, values.expectedCtcInThousand),
      candidateId: CANDIDATE_ID
    }
    ApiServicesOrgCandidate.updateProfileInfo(data, getProfileInfo, showPopup);
  }
  
  console.log(values)
  console.log(customInputValues)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group">
        <div class={errors.currencyType && 'error-boundary'}>
          <div class={customInputValues.currencyType === CURRENCY_TYPE_ENUM.INR ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
            <input
              type="radio"
              class="form-check-input mr-2"
              id="currencyType"
              name="currencyType"
              defaultValue={CURRENCY_TYPE_ENUM.INR}
              checked={customInputValues.currencyType === CURRENCY_TYPE_ENUM.INR}
              onChange={onChangeCurrencyType}
            />
            <label class="radio-inline form-check-label" for="materialChecked2">INR</label>
          </div>
          <div class={customInputValues.currencyType === CURRENCY_TYPE_ENUM.USD ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
            <input
              type="radio"
              class="form-check-input mr-2"
              id="currencyType"
              name="currencyType"
              defaultValue={CURRENCY_TYPE_ENUM.USD}
              checked={customInputValues.currencyType === CURRENCY_TYPE_ENUM.USD}
              onChange={onChangeCurrencyType}
            />
            <label class="modal-label radio-inline form-check-label" for="materialChecked2">USD</label>
          </div>
        </div>
        {errors.currencyType && <div class="errorMsg mt-2">{errors.currencyType.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="University">Current Salary<span>*</span></label>
        <div class="form-row">
          <div className="col mr-4">
            <select
              id="currentCtcInLakh"
              class={`form-control ${errors.currentCtcInLakh && 'is-invalid'}`}
              name="currentCtcInLakh"
              ref={register({
                required: "Current CTC in Lakh cannot be left blank",
              })}
            >
              <option value="" selected>Select in Lakhs</option>
              {Array(100).fill().map((_, i) => (
                <option>{i}</option>
              ))}
            </select>
            <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Lakhs</label>
            {errors.currentCtcInLakh && <div class="errorMsg mt-2">{errors.currentCtcInLakh.message}</div>}
          </div>
          <div className="col  ml-4">
            <select
              id="currentCtcInThousand"
              class={`form-control ${errors.currentCtcInThousand && 'is-invalid'}`}
              name="currentCtcInThousand"
              ref={register({
                required: "Current CTC in Thousand cannot be left blank",
              })}
            >
              <option value="" selected>Select in Thousand</option>
              {Array(20).fill().map((_, i) => (
                <option value={i * 5}>{i * 5}</option>
              ))}
            </select>
            <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Thousand</label>
            {errors.currentCtcInThousand && <div class="errorMsg mt-2">{errors.currentCtcInThousand.message}</div>}
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="University">Expected Salary</label>
        <div class="form-row">
          <div className="col mr-4">
            <select
              id="expectedCtcInLakh"
              class={`form-control ${errors.expectedCtcInLakh && 'is-invalid'}`}
              name="expectedCtcInLakh"
              ref={register}
            >
              <option value="" selected>Select in Lakhs</option>
              {Array(100).fill().map((_, i) => (
                <option>{i}</option>
              ))}
            </select>
            <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Lakhs</label>
            {errors.expectedCtcInLakh && <div class="errorMsg mt-2">{errors.expectedCtcInLakh.message}</div>}
          </div>
          <div className="col ml-4">
            <select
              id="expectedCtcInThousand"
              class={`form-control ${errors.expectedCtcInThousand && 'is-invalid'}`}
              name="expectedCtcInThousand"
              ref={register}
            >
              <option value="" selected>Select in Thousand</option>
              {Array(20).fill().map((_, i) => (
                <option value={i * 5}>{i * 5}</option>
              ))}
            </select>
            <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Thousand</label>
            {errors.expectedCtcInThousand && <div class="errorMsg mt-2">{errors.expectedCtcInThousand.message}</div>}
          </div>
        </div>
      </div>
      <button class="btn lightBlue float-right px-5">Save</button>
    </form>
  );
}
export default CTC