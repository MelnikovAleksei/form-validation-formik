import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';
import "./styles.css";

const defaultFirstName = 'Ivan';
const defaultLastName = 'Ivanov';
const defaultEmail = 'ivan.ivanov@domain.abc';
const defaultUrl = 'https://example.domain';
const defaultText = 'Your text here';

const TextInput = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props}/>
      {meta.touched && meta.error ?
        <div>{meta.error}</div>
      :
        null
      }
    </>
  )
}

const TextareaInput = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea {...field} {...props}/>
      {meta.touched && meta.error ?
        <div>{meta.error}</div>
      :
        null
      }
    </>
  )
}

const CheckboxInput = ({ children, ...props }) => {

  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props}/>
        {children}
      </label>
      {meta.touched && meta.error ?
        <div>{meta.error}</div>
      :
        null
      }
    </>
  )
}

const SelectInput = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}/>
      {meta.touched && meta.error ?
        <div>{meta.error}</div>
      :
        null
      }
    </>
  )
}

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        url: '',
        text: '',
        color: '',
        acceptedTerms: false
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(1, 'Must be 1 character or more')
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .min(1, 'Must be 1 character or more')
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        url: Yup.string()
          .url('Invalid url')
          .required('Required'),
        text: Yup.string()
          .min(2, 'Must be 2 character or more')
          .required('Required'),
        color: Yup.string()
          .oneOf(['red', 'blue', 'green'], 'Invalid color')
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      onReset={() => {
        setTimeout(() => {
          alert('Reset');
        }, 400);
      }}
    >
      <Form>
        <TextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder={defaultFirstName}
        />

        <TextInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder={defaultLastName}
        />

        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder={defaultEmail}
        />

        <TextInput
          label="URL"
          name="url"
          type="url"
          placeholder={defaultUrl}
        />

        <TextareaInput
          label="Text"
          name="text"
          placeholder={defaultText}
        />

        <CheckboxInput
          name="acceptedTerms"
        >
          I accept the terms and conditions
        </CheckboxInput>

        <SelectInput
          label="Your color"
          name="color"
        >
          <option value=""></option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </SelectInput>

        <button
          type="submit"
          disabled={Formik.isSubmitting}
        >
          Submit
        </button>
        <button
          type="reset"
        >
          Reset
        </button>
      </Form>
    </Formik>
  )
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
