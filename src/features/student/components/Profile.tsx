import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const StudentProfile = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-4">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-purple-700">Your Profile</h1>
        <p className="text-gray-500 mt-2">Manage your personal information</p>
      </header>

      {/* Profile Card */}
      <Card className="max-w-2xl mx-auto shadow-sm border-purple-200">
        <CardContent className="py-8 px-6">
          {/* Avatar and Name */}
          <div className="flex flex-col items-center mb-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Student Avatar" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-xl font-semibold text-purple-800">Sophie Tan</h2>
            <p className="text-gray-500">Student</p>
          </div>

          {/* Profile Info */}
          <div className="space-y-4">
            <div>
              <Label className="text-gray-700">Email</Label>
              <Input type="email" value="sophie@example.com" disabled className="bg-gray-100 mt-1" />
            </div>
            <div>
              <Label className="text-gray-700">Joined Date</Label>
              <Input type="text" value="January 12, 2025" disabled className="bg-gray-100 mt-1" />
            </div>
          </div>

          {/* Edit Button */}
          <div className="mt-8 flex justify-center">
            <Button className="bg-purple-700 text-white hover:bg-purple-600 px-6 py-2">
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentProfile;
