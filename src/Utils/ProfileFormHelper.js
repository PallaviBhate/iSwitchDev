import moment from 'moment';

export const certificationFormDefaultValues = () => ({
  issueMonth: '',
  issueYear: '',
  expirationMonth: '',
  expirationYear: '',
  credentialId: '',
  credentialURL: ''
});

export const aboutFormDefaultValues = () => ({
  about: ''
});

export const cTCFormDefaultValues = () => ({
  currencyType: '',
  currentCtcInLakh: '',
  currentCtcInThousand: '',
  expectedCtcInLakh: '',
  expectedCtcInThousand: ''
});


export const careerProfileFormDefaultValues = () => ({
  employmentType: '',
});

export const employmentFormDefaultValue = () => ({
  currentCompany: false,
  description: '',
  designation: '',
  employmentType: '',
  organization: '',
  startedWorkingFromMonth: '',
  startedWorkingFromYear: '',
  workedTillMonth: '',
  workedTillYear: ''
})

export const getCTCInLakh = value => {
  return value && parseFloat(value).toFixed(2).split('.')[0]
}
export const getCTCInThousand = value => {
  return value && parseFloat(value).toFixed(2).split('.')[1]
}
export const getCTCInFormat = (valueInLakh, valueInThousand) => {
  let cTCInFormat = '';
  if (valueInLakh) cTCInFormat = cTCInFormat.concat(valueInLakh);
  if (valueInLakh && valueInThousand) cTCInFormat = cTCInFormat.concat('.');
  if (valueInThousand) cTCInFormat = cTCInFormat.concat(valueInThousand);
  return parseFloat(cTCInFormat);
}

export const starDateEndDateValidation = (startMonth, startYear, endMonth, endYear, onEndDateChange, startMonthName, startYearName, endMonthName, endYearName, setError) => {
  if (startMonth && startYear && endMonth && endYear) {
    const startMonthValue = parseInt(moment().month(startMonth).format("M")) - 1;
    const endMonthValue = parseInt(moment().month(endMonth).format("M")) - 1;
    const startDate = new Date(parseInt(startYear), startMonthValue).getTime();
    const endDate = new Date(parseInt(endYear), endMonthValue).getTime();
    if (onEndDateChange) {
      if (endDate < startDate) {
        setError(endMonthName, {
          type: "manual",
          message: 'End Date cannot be smaller than Start Date'
        });
        setError(endYearName, {
          type: "manual",
          message: 'End Date cannot be greater than Start Date'
        });
      }  
    }
    if (startDate > endDate) {
      setError(startMonthName, {
        type: "manual",
        message: 'Start Date be greater than End Date'
      });
      setError(startYearName, {
        type: "manual",
        message: 'Start Date cannot be greater than End Date'
      });
    }
  }
}