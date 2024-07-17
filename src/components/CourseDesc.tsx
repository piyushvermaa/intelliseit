"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Clock, Video, Users } from "react-feather";

const CoursePage: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [reviews, setReviews] = useState<
    { username: string; review: string }[]
  >([]);
  const [newReview, setNewReview] = useState<{
    username: string;
    review: string;
  }>({
    username: "",
    review: "",
  });

  const handleLessonToggle = (index: number) => {
    setActiveLesson(activeLesson === index ? null : index);
  };

  const handleReviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newReview.review.trim() !== "" && newReview.username.trim() !== "") {
      setReviews([...reviews, newReview]);
      setNewReview({ username: "", review: "" });
    }
  };

  // Mock reviews data
  useEffect(() => {
    const mockReviews = [
      { username: "Aditya", review: "Wow, what a great course!" },
      {
        username: "Sushila",
        review: "Very nice teaching and good way of explaining.",
      },
      {
        username: "Rahul",
        review: "Had a very good experience learning. Thank you!",
      },
      {
        username: "Mahima",
        review: "Got help in understanding, thank you. Very good.",
      },
      {
        username: "Sunil",
        review: "Great course, the best. Wow, what a time!",
      },
    ];

    setReviews(mockReviews);
  }, []);

  useEffect(() => {
    // gsap.from(".fade-in", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
  }, []);

  return (
    <div
      className="min-h-screen p-6 text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#33333389] via-[#204a6897] to-transparent bg-opacity-100 border border-gray-800 shadow-lg rounded-lg overflow-hidden fade-in flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 fade-in bg-black bg-opacity-30 backdrop-blur-sm">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Code Mastery: Fullstack Development
          </h1>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold text-yellow-400">
              ⭐⭐⭐⭐⭐ (4.8/5)
            </span>
            <span className="ml-4 text-gray-400">
              ({reviews.length} reviews)
            </span>
          </div>
          
          <h2 className="text-xl font-semibold mb-2 text-white">
            Course Overview
          </h2>
          <p className="mb-4 text-gray-300">
            Master the art of fullstack development with our comprehensive course. Perfect for
            all levels, our curriculum covers front-end, back-end, and everything in between.
          </p>
          <div className="flex justify-around flex-wrap">
            <div className="flex items-center mb-4 text-gray-300">
              <Clock size={20} className="mr-2" />
              <span>Duration: 12 weeks</span>
            </div>
            <div className="flex items-center mb-4 text-gray-300">
              <Video size={20} className="mr-2" />
              <span>Live Lectures: 10</span>
            </div>
            <div className="flex items-center mb-4 text-gray-300">
              <Users size={20} className="mr-2" />
              <span>Students Enrolled: 772</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-white">
            Educator
          </h2>
          <div className="flex items-center mb-4">
            <Image
              src="/avatar.jpg"
              alt="Salman Usmani"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="ml-4 text-gray-300 text-justify">
              Led by renowned educator Salman Usmani, who has over 20 years
              of experience in the tech industry. Salman has mastered various
              programming languages and has worked globally.
            </p>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-white">Lessons</h2>
          <ul className="mb-4 text-gray-300">
            {[
              "Introduction to Fullstack Development",
              "Front-End Basics",
              "Back-End Basics",
              "Advanced Techniques",
              "Project Development",
            ].map((lesson, index) => (
              <li
                key={index}
                className="mb-2 border border-gray-700 rounded-md shadow-sm"
              >
                <button
                  className="flex items-center justify-between w-full p-2 text-left bg-gray-800 rounded-md hover:bg-gray-700 transition duration-300"
                  onClick={() => handleLessonToggle(index)}
                >
                  {lesson}
                  <span className="ml-2">
                    {activeLesson === index ? "▲" : "▼"}
                  </span>
                </button>
                {activeLesson === index && (
                  <p className="mt-2 p-2 bg-gray-700 rounded-md text-sm text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur ipsum est atque odio quae? Molestias architecto
                    labore impedit officia ducimus dolore maxime fuga.
                    Perspiciatis reiciendis laudantium porro, rerum excepturi
                    iste! {lesson.toLowerCase()}.
                  </p>
                )}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2 text-white">
            Prerequisites
          </h2>
          <p className="mb-4 text-gray-300">
            No prior experience required. A passion for coding is all you need.
          </p>
          {/* Review Form Section */}
          <div className="max-w-6xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Add Your Review
            </h2>
            <form
              onSubmit={handleReviewSubmit}
              className="flex flex-col w-full max-w-md"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.username}
                onChange={(e) =>
                  setNewReview({ ...newReview, username: e.target.value })
                }
                className="w-full p-2 mb-2 border border-gray-700 rounded-md shadow-sm bg-black text-white"
              />
              <textarea
                className="w-full p-2 mb-2 border border-gray-700 rounded-md shadow-sm bg-black text-white"
                rows={3}
                placeholder="Add your review..."
                value={newReview.review}
                onChange={(e) =>
                  setNewReview({ ...newReview, review: e.target.value })
                }
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300 w-full"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col items-center p-6 fade-in bg-black bg-opacity-30 backdrop-blur-sm">
          <Image
            src="/full-stack-web-development.jpg"
            alt="Coding Academy"
            width={400}
            height={400}
            objectFit="cover"
            className="rounded-lg mb-4"
          />
          <div className="p-4 rounded-lg bg-opacity-50 border border-gray-700 shadow-sm mb-4">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Pricing
            </h2>
            <p className="mb-4 text-gray-300">
              Rs. 6000/- <br /> One-time payment for lifetime access
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300 w-full">
              Enroll Now
            </button>
            <p className="mt-2 text-sm text-gray-400 text-center">
              Have questions? Contact us at{" "}
              <a href="tel:+1234567890" className="text-gray-200">
                +1234567890
              </a>
            </p>
          </div>
          {/* Display Reviews Section */}
          <div className="max-w-6xl mx-auto p-3 border border-gray-700 shadow-sm rounded-md">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Reviews
            </h2>
            <ul className="mb-4 text-gray-300">
              {reviews.map((review, index) => (
                <li key={index} className="mb-2">
                  <p className="font-semibold">{review.username}</p>
                  <p className="mb-2 text-white text-sm">{review.review}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
