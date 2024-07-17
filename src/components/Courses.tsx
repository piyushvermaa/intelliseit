
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    image: 'https://www.simplilearn.com/ice9/app/IntroductiontoC360x194.jpg',
    name: 'C++ Programming',
    duration: '6 weeks',
    price: 4999,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIL1IB-9PxDQW9vCD3ijyqHIVQEcraJQ3BQ&s',
    name: 'Java Programming',
    duration: '8 weeks',
    price: 5999,
  },
  {
    image: 'https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg',
    name: 'Fullstack Development',
    duration: '12 weeks',
    price: 9999,
  },
  {
    image: 'https://rooman.net/wp-content/uploads/2021/11/python-programing-banner.jpg',
    name: 'Python Programming',
    duration: '6 weeks',
    price: 4999,
  },
  {
    image: 'https://solutionsreview.com/business-intelligence/files/2022/01/MicrosoftTeams-image-13.jpg',
    name: 'Machine Learning',
    duration: '10 weeks',
    price: 7999,
  },
  {
    image: 'https://www.cdmi.in/courses@2x/data-science.webp',
    name: 'Data Science',
    duration: '12 weeks',
    price: 9999,
  },
];

const Courses: React.FC = () => {
  return (
    <div className='bg-black p-10 flex flex-col text-white/60 items-center justify-center'>
        <div className="text-center mb-20">
          <h1 className="mb-12 text-4xl font-bold leading-tight text-center  sm:text-5xl">Our Courses</h1>
        </div>
        <section
      id="Courses"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 "
    >
      {courses.map((course) => (
        <CourseCard key={course.name} {...course} />
      ))}
    </section>
    </div>
  );
};

export default Courses;
