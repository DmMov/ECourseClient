import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

// * Components
import { Form } from '../Form/Form';

// * Context
import { AuthContext } from '../../context/AuthContext';

// * Hooks
import { useHttp } from '../../hooks/http.hook';
import { useForm } from '../../hooks/form.hook';

// * Other
import { fieldsValidationSet, initialFields, initialState } from './initialValues';

// * Styles
import './CreateCourseForm.scss';

export const CreateCourseForm = () => {
  const { userData } = useContext(AuthContext);
  const { loading, request } = useHttp();
  const { form, fields, validate, reset, setErrors } = useForm(initialState, initialFields);
  const history = useHistory();

  const onSubmit = async e => {
    e.preventDefault();

    const isValid = validate(fieldsValidationSet);

    if (isValid) {
      const formData = new FormData();
      for (var key in form)
        formData.append(key, form[key]);

      try {
        const data = await request('courses/create', 'post', formData, { Authorization: `Bearer ${userData.jwtToken}`});
        reset();
        history.push('/courses')
      } catch (err) { }
    }
  };

  return <Form
    title="create course"
    spin={loading}
    classes={['createCourseForm']}
    onSubmit={onSubmit}
    buttonText="create"
    fields={fields}
  />;
}
