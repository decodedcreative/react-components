import { boolean, InferType, object, string } from 'yup';

export const userSchema = object({
  title: string()
    .required('Please select your title')
    .oneOf(['Dr', 'Miss', 'Mr', 'Mrs', 'Ms', 'Prof.', 'Revd']),
  firstName: string().required(),
  lastName: string().required(),
  address1: string().required().label('Address line 1'),
  town: string().required(),
  county: string().required(),
  postcode: string()
    .min(6)
    .max(8)
    .required()
    .matches(
      /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/,
      'Postcode must be a valid UK postcode'
    )
    .label('Postcode'),
  email: string().email('Invalid email format').required(),
  marketing: boolean()
    .default(false)
    .label(
      'Would you like to be added to our mailing list for future offers and communications?'
    ),
}).required();

export type User = InferType<typeof userSchema>;
