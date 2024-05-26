import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialCard from "@/components/TestimonialCard";
import Webinars from "@/components/Webinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased dark:bg-grid-white/[0.2]">
  
   <HeroSection/>
   <FeaturedCourses/>
   <WhyChooseUs/>
   <MusicSchoolTestimonialCard/>
   <Webinars/>
   <Instructors/>
   {/* <Footer/> */}
   </main>
  );
}
