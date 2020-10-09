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