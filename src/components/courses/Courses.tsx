import { useQuery } from "@tanstack/react-query";
import { CourseSection } from "./listing/Section";
import { getAllCoursesQueryOptions } from "@/queries/courseQueryOptions";



const dummyCourses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Core principles of interaction design with real-world applications.",
    author: "Luis Mark",
    price: "$69.00",
    discountedPrice: "$00.00",
    duration: "32h",
    tags: ["FREE", "EVENTS", "BEGINNER"],
    image: "https://source.unsplash.com/featured/?design",
  },
  {
    id: "2",
    title: "React Zero to One",
    description: "Core principles of interaction design with real-world applications.",
    author: "Luis Mark",
    price: "$69.00",
    discountedPrice: "$00.00",
    duration: "32h",
    tags: ["FREE", "EVENTS", "BEGINNER"],
    image: "https://source.unsplash.com/featured/?design",
  },
  {
    id: "3",
    title: "Mastering Interaction Design: From Principles to Practice",
    description: "Core principles of interaction design with real-world applications.",
    author: "Luis Mark",
    price: "$69.00",
    discountedPrice: "$00.00",
    duration: "32h",
    tags: ["FREE", "EVENTS", "BEGINNER"],
    image: "https://source.unsplash.com/featured/?design",
  },
  {
    id: "4",
    title: "Mastering Interaction Design: From Principles to Practice",
    description: "Core principles of interaction design with real-world applications.",
    author: "Luis Mark",
    price: "$69.00",
    discountedPrice: "$00.00",
    duration: "32h",
    tags: ["FREE", "EVENTS", "BEGINNER"],
    image: "https://source.unsplash.com/featured/?design",
  },
  // Add more mock data...
];

export default function Courses() {

  const { data: courses} = useQuery(getAllCoursesQueryOptions());


  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <header className="py-10 bg-white border-b">
      <h1 className="text-3xl font-bold text-gray-800">Course & Events For Students</h1>
      <p className="text-gray-500 mt-2 max-w-xl">
        Explore curated content to enhance your skills and knowledge.
      </p>
    </header>
    
    {courses && courses.length > 0 ? (<CourseSection title="Recommended Courses" courses={courses} />): (<p>Empty course</p>)}
    {/* Add more sections if needed */}
  </div>
  
  );
}

