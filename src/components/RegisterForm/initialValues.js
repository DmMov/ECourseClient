import React from 'react';
import { isEmail } from 'validator';
import { DatePicker } from 'antd';

// * Components
import { UploadField } from '../UploadField/UploadField';

// * Utils
import { required } from '../../validators/required.validator';
import { minLength } from '../../validators/minLength.validator';
import { disabledBirthdayDate } from '../../helpers/disabledBirthdayDate.helper';

export const fieldsValidationSet = {
  firstName: [
    [required, 'first name is required.'],
    [minLength(3), 'first name must contain at least 3 characters.']
  ],
  lastName: [
    [required, 'last name is required.'],
    [minLength(3), 'last name must contain at least 3 characters.']
  ],
  email: [
    [required, 'email is required.'],
    [minLength(5), 'email must contain at least 5 characters.'],
    [isEmail, 'incorrect email.']
  ],
  password: [
    [required, 'password is required.'],
    [minLength(5), 'password must contain at least 5 characters.']
  ],
  repeat: [
    [required, 'password repeat is required.']
  ]
};

export const initialFields = [
  {
    name: 'file',
    type: 'file',
    label: 'upload profile photo',
    component: props => <UploadField {...props} />
  },
  {
    name: 'firstName',
    label: 'first name',
    placeholder: 'Enter your first name...',
  },
  {
    name: 'lastName',
    label: 'last name',
    placeholder: 'Enter your last name...',
  },
  {
    name: 'dateOfBirth',
    placeholder: 'Pick your date of birth...',
    component: props => <>
      <label className="fakeLabel">date of birth</label>
      <DatePicker {...props} showToday={false} disabledDate={disabledBirthdayDate} />
    </>
  },
  {
    name: 'email',
    label: 'email',
    placeholder: 'example@email.com',
  },
  {
    name: 'password',
    type: 'password',
    label: 'password',
    placeholder: 'Enter your password...',
  },
  {
    name: 'repeat',
    type: 'password',
    label: 'repeat password',
    placeholder: 'Repeat password...',
  }
];

export const initialState = {
  file: null,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeat: ''
};