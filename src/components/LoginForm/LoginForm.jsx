import React, { useCallback, useContext } from 'react';

// * Components
import { Form } from '../Form/Form';

// * Hooks
import { useHttp } from '../../hooks/http.hook';
import { useForm } from '../../hooks/form.hook';

// * Context
import { AuthContext } from '../../context/AuthContext';

// * Other
import { fieldsValidationSet, initialFields, initialState } from './initialValues';

// * Styles
import './LoginForm.scss';

export const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const { loading, request } = useHttp();
  const { form, fields, validate, reset, setErrors } = useForm(initialState, initialFields);

  const onSubmit = useCallback(async e => {
    e.preventDefault();

    const isValid = validate(fieldsValidationSet);

    if (isValid) {
      try {
        const data = await request('auth/login', 'post', form);
        reset();
        login(data);
      } catch (err) {
        setErrors(errors => ({
          ...errors,
          email: err.message,
          password: err.message
        }));
      }
    }
  }, [request, form]);

  return <Form
    title="login"
    spin={loading}
    classes={['loginForm']}
    onSubmit={onSubmit}
    buttonText="login"
    fields={fields}
  />;
}