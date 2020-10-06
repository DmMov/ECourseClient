import React from 'react';

// * Components
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage';

// * Files
import avatar from '../../images/avatar';

// * Other
import { baseUrl } from '../../constants';

// * Styles
import './UserBox.scss';

export const UserBox = ({ imageName, fullName }) => <div className="userBox">
  <ResponsiveImage
    src={imageName ? `${baseUrl}/assets/images/${imageName}` : avatar}
    classes={['userBox__imageContainer', !imageName ? 'padd' : '']}
  />
  <p className="userBox__userName">{fullName}</p>
</div>;