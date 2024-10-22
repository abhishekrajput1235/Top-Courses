import React, { useState } from 'react';
import {courses} from '../data';  // Import the data
import './CourseList.css';

const CourseList = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);  // State to store filtered data
  // const [category, setCategory] = useState('All');  // State to store selected category

  // Filter function based on category
  const filterByCategory = (category) => {
    if (category === 'All') {
      setFilteredCourses(courses);  // Show all courses if "All" is selected
    } else {
      const filtered = courses.filter(course => course.category === category);
      setFilteredCourses(filtered);
    }
  };

  return (
    <div>
      

      {/* Category Filter Buttons */}
      <div>
        <button onClick={() => filterByCategory('All')}>All</button>
        <button onClick={() => filterByCategory('Web Development')}>Web Development</button>
        <button onClick={() => filterByCategory('Data Science')}>Data Science</button>
        <button onClick={() => filterByCategory('Graphic Design')}>Graphic Design</button>
      </div>

      {/* Course List */}
      <div className="course-list">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.imageUrl} alt={course.title} />
            <h2>{course.title}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>Price: ${course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
