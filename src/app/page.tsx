"use client"
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Reviews } from "@/components/Reviews";
import Courses from "@/components/Courses";
import CoursePage from "@/components/CourseDesc";
import Logincard from "@/components/LoginPage";
import SignupCard from "@/components/SignupPage";

export default function Home() {

  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <Courses/>
      <Reviews/>
      <FAQs />
      <CallToAction />
      <Footer />
      <CoursePage/>
      
    </>
  );
}
