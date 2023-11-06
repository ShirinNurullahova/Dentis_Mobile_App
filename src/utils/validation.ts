import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),
      password: Yup.string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  

 export const resetValidationSchema = Yup.object().shape({
    sifre: Yup.string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    yenisifre: Yup.string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });


  export const signUpValidationSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),
  
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    
      dataPrivacy: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
       
      
  });
  
  export const aboutValidationSchema = Yup.object().shape({
    title: Yup.string().min(4).required('Text is required'),
    description: Yup.string()
      .min(8, ({ min }) => `Text content has to be contain ${min} characters`)
      .required('Text required'),
  });


  export const cardAddValidationSchema = Yup.object().shape({
    kartNomresi: Yup.number()
      .typeError("That doesn't look like a card number")
      .positive("A card number can't start with a minus")
      .integer("A card number can't include a decimal point")
      .min(16)
      .required('A card number is required'),
    tarix: Yup.string()
      .typeError('Not a valid expiration date. Example: MM/YY')
      .max(5, 'Not a valid expiration date. Example: MM/YY')
      .matches(/([0-9]{2})\/([0-9]{2})/, 'Not a valid expiration date. Example: MM/YY')
      .required('Expiration date is required'),
    cvv: Yup.string().label('CVC').min(3).max(4).required(),
  });

  export const editDoctor = Yup.object().shape({
    name: Yup.string().min(
      4,
      ({ min }) => `Name content has to be contain at least ${min} characters`
    ),
    ixtisas: Yup.string().min(
      4,
      ({ min }) => `Profession content has to be contain at least ${min} characters`
    ),
    textArea: Yup.string()
      .min(8, ({ min }) => `Text content has to be contain ${min} characters`)
      .required('Text required'),
  });

  export const addPatient = Yup.object().shape({
    name: Yup.string().min(
      4,
      ({ min }) => `Name content has to be contain at least ${min} characters`
    ),
    number: Yup.string()
      .min(7, ({ min }) => `Number content has to be contain at least ${min} characters`)
      .required('Number required'),
    doctorName: Yup.string().required('Choose a doctor'),
  });
  export const aboutData = Yup.object().shape({
    cardNumber: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(16)
      .required('A card number is required'),
    date: Yup.string()
      .min(4, ({ min }) => `content must be at least ${min} characters`)
      .required('Password is required'),
    ccv: Yup.string()
      .min(3, ({ min }) => `ccv password must be at least ${min} characters`)
      .required('CCV is required'),
  });
  export const editDoctorSchema = Yup.object().shape({
    name: Yup.string().min(
      4,
      ({ min }) => `Name content has to be contain at least ${min} characters`
    ),
    ixtisas: Yup.string().min(
      4,
      ({ min }) => `Profession content has to be contain at least ${min} characters`
    ),
    textArea: Yup.string()
      .min(8, ({ min }) => `Text content has to be contain ${min} characters`)
      .required('Text required'),
  });

  export const settingValidationSchema = Yup.object().shape({
    adSoyad: Yup.string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    mobilNomre: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),
  });