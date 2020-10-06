import React from 'react';

// * Components
import { Banner } from '../../components/Banner/Banner';
import { CourseList } from '../../components/CourseList/CourseList';

// * Files
import banner from '../../images/banners/b4';

// * Styles
import './CoursesPage.scss';

export const CoursesPage = () => {
  return <>
    <Banner image={banner} title="courses" />
    <div className="page coursesPage">
      <CourseList />
    </div>
  </>;
}