import React, { useCallback, useState } from 'react';

// * Components
import { Form } from '../Form/Form';

// * Hooks
import { useHttp } from '../../hooks/http.hook';
import { useForm } from '../../hooks/form.hook';

// * Other
import { fieldsValidationSet, initialFields, initialState } from './initialValues';
import { equalFields } from '../../validators';

// * Styles
import './RegisterForm.scss';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';

export const RegisterForm = () => {
  const { loading, request } = useHttp();
  const history = useHistory();
  const { form, fields, validate, reset } = useForm(initialState, initialFields);
  const [date, setDate] = useState(null);

  const onDateChange = useCallback((_, dateStr) => setDate(dateStr), [date]);

  const rebuildFields = useCallback(fields =>
    fields.map(x => {
      if (x.name === 'dateOfBirth')
        x.onChange = onDateChange

      return x;
    }), [onDateChange]);

  const onSubmit = useCallback(async e => {
    e.preventDefault();

    const isValid = validate(fieldsValidationSet, [equalFields('password', 'repeat')]);

    if (isValid && !!date) {
      const formData = new FormData();
      for (var key in form)
        formData.append(key, form[key]);

      formData.append('dateOfBirth', date);

      try {
        await request('users/create', 'post', formData);
        message.success('You has been successfully registered!');
        history.push('/confirm-message');
        reset();
      } catch (error) { }
    }
  }, [form, request]);

  return <Form
    title="register"
    spin={loading}
    classes={['registerForm']}
    onSubmit={onSubmit}
    buttonText="register"
    fields={rebuildFields(fields)}
  />;
}