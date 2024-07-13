"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const services = [
  {
    title: "WEBSITE DESIGNING",
    description:
      "WEBSITE is the face that represents us in the Digital World. We use a very unique design methodology for every website…",
    link: "",
  },
  {
    title: "ANDROID APPLICATION",
    description:
      "ANDROID Android app is the most common and widely used solution. There are more than 250 Crores users of Android…",
    link: "",
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    description:
      "SOFTWARE Our Softwares offer services to small sized as well as mid-sized businesses around the globe. Our offering services include:…",
    link: "",
  },
  {
    title: "INDUSTRIAL INTERNSHIP",
    description:
      "We at INTELLISE IT not only teach university syllabus to our students, but also give them live training of development…",
    link: "",
  },
  {
    title: "STUDENT TRAINING",
    description:
      "We provide training to brighten up the futures of students. Our 15+ years of teaching as well as development experience…",
    link: "",
  },
  {
    title: "CORPORATE TRAINING",
    description:
      "Corporate training is a means of ensuring that employees improve skills and enhance performance by focusing on professional development. Many…",
    link: "",
  },
];

export const Features = () => {
  return (
    <div className="h-fit bg-black">
        <div className="text-center">
          <h1 className="text-white sm:text-6xl text-3xl opacity-100">Our Services</h1>
        </div>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={services} />
    </div>
    </div>
  );
};
