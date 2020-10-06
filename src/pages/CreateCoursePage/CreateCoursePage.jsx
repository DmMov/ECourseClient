import React from 'react';

// * Components
import { Banner } from '../../components/Banner/Banner';
import { CreateCourseForm } from '../../components/CreateCourseForm/CreateCourseForm';

// * Files
import banner from '../../images/banners/b1';

// * Styles
import './CreateCoursePage.scss';

export const CreateCoursePage = () => {
  return <>
    <Banner image={banner} title="course creation" />
    <div className="page createCoursePage">
      <CreateCourseForm />
    </div>
  </>;
}