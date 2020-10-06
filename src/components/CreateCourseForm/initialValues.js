import React from 'react';
import { Input } from 'antd';

// * Components
import { UploadField } from '../UploadField/UploadField';

// * Validators
import { required } from '../../validators/required.validator';
import { minLength } from '../../validators/minLength.validator';
import { minNumberValue } from '../../validators/minNumberValue.validator';

const { TextArea } = Input;

export const fieldsValidationSet = {
  file: [
    [required, 'image is required.']
  ],
  name: [
    [required, 'title is required.'],
    [minLength(12), 'title must contain at least 12 characters.']
  ],
  description: [
    [required, 'description is required.'],
    [minLength(64), 'description must contain at least 64 characters.']
  ],
  duration: [
    [minNumberValue(1), 'duration value must be more than 0'],
  ]
};

export const initialFields = [
  {
    name: 'file',
    type: 'file',
    label: 'upload course image',
    component: props => <UploadField {...props} />
  },
  {
    name: 'name',
    label: 'title',
    placeholder: 'Enter course title...',
  },
  {
    name: 'description',
    label: 'description',
    placeholder: 'Enter description...',
    control: props => <TextArea rows={4} {...props} />
  },
  {
    name: 'duration',
    label: 'duration(days)',
    placeholder: 'Enter course duration...',
    type: 'number'
  },
];

export const initialState = {
  file: null,
  name: '',
  description: '',
  duration: 0
};