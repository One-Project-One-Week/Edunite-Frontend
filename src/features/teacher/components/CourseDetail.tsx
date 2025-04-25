import { useParams } from 'react-router-dom';
import { dummyCourses } from '@/assets/dummy-datas/course';
import { Course } from '@/types/Course';

export default function CourseDetail() {
    const {courseId} = useParams<{ courseId: string }>();
  const course: Course | undefined = dummyCourses.find((course) => course.id === courseId);

  if (!course) {
      return <div>Course not found</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 font-sans">
  <div className="mb-10">
    <h1 className="text-5xl font-extrabold text-purple-900 tracking-tight mb-4">
      {course.title}
    </h1>
    <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
      {course.description}
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-xl">
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-500">Category</p>
      <p className="text-xl font-semibold text-purple-800">{course.course_category}</p>
    </div>

    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-500">Created By</p>
      <p className="text-xl font-semibold text-purple-800">{course.username}</p>
    </div>

    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-500">Start Date</p>
      <p className="text-xl font-semibold text-gray-800">{course.start_date}</p>
    </div>

    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-500">End Date</p>
      <p className="text-xl font-semibold text-gray-800">{course.end_date}</p>
    </div>

    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-500">Schedule</p>
      <p className="text-xl font-semibold text-gray-800">{course.schedule}</p>
    </div>

    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-500">Created At</p>
      <p className="text-xl font-semibold text-gray-800">{new Date(course.created_at).toLocaleString()}</p>
    </div>

    <div className="space-y-2 col-span-1 md:col-span-2">
      <p className="text-sm font-medium text-gray-500">Number of Students Interested</p>
      <p className="text-2xl font-bold text-purple-700">{course.student_quantity.length}</p>
    </div>
  </div>
</div>

  
  );
}
