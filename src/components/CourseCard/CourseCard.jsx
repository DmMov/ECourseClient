import React from 'react';

// * Components
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage';

// * Other
import { baseUrl } from '../../constants';

// * Styles
import './CourseCard.scss';

export const CourseCard = ({ imageName, name, description }) =>
  <div className="courseCard">
    <ResponsiveImage
      src={`${baseUrl}/assets/images/${imageName}`}
      classes={['courseCard__imageContainer']}
    />
    <div className="courseCard__infoWrap">
      <h3 className="title courseCard__title">{name}</h3>
      <p className="courseCard__description">{description}</p>
    </div>
  </div>;