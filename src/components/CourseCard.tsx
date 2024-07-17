import React from 'react';

interface CourseCardProps {
  image: string;
  name: string;
  duration: string;
  price: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, name, duration, price }) => {
  return (
    <div className=" border border-white/60 shadow-2xl shadow-[#5f337e]  text-white rounded-xl duration-500 hover:scale-95 hover:shadow-xl">
      <a href="#">
        <img
          src={image}
          alt={name}
          className="h-[10rem] w-[20rem] object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <p className="text-lg font-bold text-[#53fb3c] truncate block capitalize">{name}</p>
          <div className="flex items-center">
            <p className="text-sm text-gray-100 cursor-auto my-3">Duration: {duration}</p>
            <p className="text-lg font-semibold text-black cursor-auto my-3 ml-auto">₹{price}</p>
          </div>
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy Now</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Try Demo</button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CourseCard;
