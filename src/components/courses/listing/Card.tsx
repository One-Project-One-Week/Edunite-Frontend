import Image from "@/assets/prof.svg"
import { Link } from "react-router-dom";

type Course = {
  id: string;
  title: string;
  description: string;
  author: string;
  price: string;
  discountedPrice: string;
  duration: string;
  tags: string[];
  image: string;
};

export const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link to={`/our-courses/${course.id}`} className="block">
    <div className="rounded-xl shadow-md overflow-hidden w-[280px] h-[420px] bg-white flex flex-col justify-between">
      <img
        src={Image}
        alt={course.title}
        className="w-full h-40 object-cover"
      />
  
      <div className="p-4 flex flex-col justify-between flex-grow space-y-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {course.description}
          </p>
        </div>
  
        <div className="text-sm text-gray-600">
          By <strong>{course.author}</strong>
        </div>
  
        <div className="flex items-center justify-start text-sm flex-wrap gap-1 pt-1">
          {course.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-purple-100 text-purple-700 rounded px-2 py-0.5 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Link>
  
  );
};
