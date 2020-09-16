const ValidateForm = {
    emailId: {
      rules: [
        {
          test: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
          message: 'EmailId is invalid'
        },
        
      ],
      errors: [],
      valid: false,
      state: '',
    },
    password: {
      rules: [
        {
          test: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          message: 'Password is invalid',
        },
        {
          test: (value) => {
            return value.length > 8;
          },
          message: 'Password must be longer than 8 characters',
        },
        
      ],
      errors: [],
      valid: false,
      state: '',
    },
  };
  
  export default ValidateForm;