import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* Tall card */}
      <Card className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Your activity summary, insights & stats in one place.
          </p>
        </CardContent>
      </Card>

      {/* Standard card */}
      <Card className="bg-white shadow">
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You have 3 unread messages.
          </p>
        </CardContent>
      </Card>

      {/* Horizontal layout */}
      <Card className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row bg-gray-100 shadow">
        <CardContent className="flex-1">
          <h3 className="font-bold text-lg">Upcoming Event</h3>
          <p className="text-sm text-muted-foreground">
            Don’t miss the team sync on Friday!
          </p>
        </CardContent>
        <CardContent className="flex items-end">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Join
          </button>
        </CardContent>
      </Card>

      {/* Small card */}
      <Card>
        <CardHeader>
          <CardTitle>Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">5 tasks remaining for today.</p>
        </CardContent>
      </Card>

      {/* Another small card */}
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">2 meetings scheduled.</p>
        </CardContent>
      </Card>
    </div>
  );
}
