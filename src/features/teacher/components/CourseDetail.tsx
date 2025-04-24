import { useParams } from 'react-router-dom';

export default function CourseDetail() {
    const {courseId} = useParams<{ courseId: string }>();
  
  return (
    <div>CourseDetail of Course {courseId}</div>
  )
}
