import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCircle, BookOpen } from "lucide-react";

const DashboardHome = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-purple-700 text-center">Welcome to Your Dashboard</h1>
        <p className="text-center text-gray-500 mt-2">Manage your learning journey here ✨</p>
      </header>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <Card className="hover:shadow-xl transition duration-300 border-purple-200">
          <CardContent className="flex flex-col items-center justify-center py-10">
            <BookOpen className="w-12 h-12 text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold text-purple-800 mb-2">Your Courses</h2>
            <p className="text-gray-500 mb-4 text-center">
              Browse all your enrolled courses and continue learning.
            </p>
            <Button variant="outline" className="text-purple-700 border-purple-600 hover:bg-purple-100">
              View Courses
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition duration-300 border-purple-200">
          <CardContent className="flex flex-col items-center justify-center py-10">
            <UserCircle className="w-12 h-12 text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold text-purple-800 mb-2">Profile</h2>
            <p className="text-gray-500 mb-4 text-center">
              View and edit your personal information and settings.
            </p>
            <Button variant="outline" className="text-purple-700 border-purple-600 hover:bg-purple-100">
              View Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
