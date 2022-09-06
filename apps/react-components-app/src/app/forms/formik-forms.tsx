import { useFormik } from 'formik';
import { userSchema, User } from './common';
import {
  Form,
  FormTextField,
  Section,
  Typography,
} from '../../../../../libs/react-components/src/lib/components';

const FormikForms = () => {
  const formik = useFormik<Partial<User>>({
    initialValues: {
      title: '',
      firstName: '',
      lastName: '',
      address1: '',
      town: '',
      county: '',
      postcode: '',
      marketing: false,
    },
    validationSchema: userSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (...values) => console.log(values),
  });

  return (
    <Section>
      <Section.Item>
        <Form>
          <Form.Section
            head={
              <Typography as="h2" size="xxl">
                A little about you
              </Typography>
            }
          >
            <Form.Item label={<Typography>Title:</Typography>}>
              <FormTextField />
            </Form.Item>
            <Form.Item label={<Typography>First Name:</Typography>}>
              <FormTextField />
            </Form.Item>
            <Form.Item label={<Typography>Surname:</Typography>}>
              <FormTextField />
            </Form.Item>
          </Form.Section>
        </Form>
      </Section.Item>
      <Section.Item>
        <Typography as="h2" size="xxl">
          Another Section here
        </Typography>
      </Section.Item>
    </Section>
  );
};

export default FormikForms;
