import { Field, Form, Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Button from 'components/Button';

// ---------------------styled
import styled from '@emotion/styled';

const Input = styled(Field)`
  width: ${p => p.theme.space[7]}px;

  padding: ${p => p.theme.space[2]}px;

  font-size: ${p => p.theme.fontsSizes.s}px;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[1]}px;

  &:focus-within {
    border: 1px solid ${p => p.theme.colors.accent};
    filter: drop-shadow(0px 4px 4px ${p => p.theme.colors.accent});
    outline: none;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;

  position: relative;

  margin-bottom: ${p => p.theme.space[5]}px;
`;

const NameLabel = styled.span`
  font-size: ${p => p.theme.fontsSizes.m}px;
`;

const ErrorBox = styled.div`
  position: absolute;
  left: ${p => p.theme.space[7]}px;

  padding: 3px;

  background-color: red;
  color: white;

  border: 1px solid red;
  border-radius: 5px;
`;

const FormContacts = styled(Form)`
  width: ${p => p.theme.space[7] * 5}px;

  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
`;
// ----------------------------------------------------------

const NewForm = ({ onSubmit, contacts }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handlerSubmitForm = (values, actions) => {
    actions.setSubmitting(true);
    const { name, number } = values;
    const statusValidation = checkEqualValue.call(contacts, name);
    if (statusValidation === 'alert') return;
    onSubmit({ name, number });
    actions.resetForm();
    actions.setSubmitting(false);
  };

  const validationSchema = object().shape({
    name: string()
      .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        excludeEmptyString: true,
      })
      .required(),
    number: string()
      .matches(
        /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
        {
          message:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          excludeEmptyString: true,
        }
      )
      .required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handlerSubmitForm}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleBlur }) => (
        <FormContacts>
          <Label>
            <NameLabel>Name</NameLabel>
            <Input
              type="text"
              name="name"
              value={values.name}
              placeholder="Jekie Kolya"
              required
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="name" component={ErrorBox} />
          </Label>
          <Label>
            <NameLabel>Number</NameLabel>
            <Input
              type="tel"
              name="number"
              value={values.number}
              placeholder="777-77-77"
              required
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="number" component={ErrorBox} />
          </Label>

          <Button type="submit" name="Add contact" />
        </FormContacts>
      )}
    </Formik>
  );
};

function checkEqualValue(name) {
  const equalValue = this.filter(item => {
    return item.name === name;
  });

  if (equalValue.toString()) {
    Notify.failure(`${name} is already in contact`);
    return 'alert';
  }

  return 'ok';
}

export default NewForm;
