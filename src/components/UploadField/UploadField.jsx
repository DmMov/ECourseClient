import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { string, func, object } from 'prop-types';

// * Components
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage';

// * Sass
import './UploadField.scss';

export const UploadField = ({ label, onChange, error, value }) =>
  <div className="uploadField">
    {error && <span className="uploadField__error">{error}</span>}
    {
      value &&
        <ResponsiveImage
          src={URL.createObjectURL(value)}
          classes={['uploadField__uploadedImageContainer']}
        />
    }
    {value && <span className="uploadField__fileName">{value.name}</span>}
    <label  className="uploadField__upload">
      <input type="file" name="file" className="uploadField__control" onChange={onChange}/>
      <p className="btn uploadField__btn"><UploadOutlined className="uploadField__uploadIcon" />{label}</p>
    </label>
  </div>;

UploadField.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  error: string.isRequired,
  value: object
};