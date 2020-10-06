import React, { useEffect, useState } from 'react';

// * Courses
import { CourseCard } from '../CourseCard/CourseCard';

// * Other
import { useHttp } from '../../hooks/http.hook';

// * Styles
import "./CourseList.scss";

export const CourseList = () => {
  const { request } = useHttp();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await request('courses');
        setCourses(data);
      } catch (error) { }
    }

    fetchCourses();
  }, []);

  return <div className="courseList">
    {courses.map(course => <CourseCard key={course.id} {...course} />)}
  </div>;
}
