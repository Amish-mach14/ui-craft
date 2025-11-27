import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PatientCard } from "@/components/dashboard/PatientCard";
import { VitalsCard } from "@/components/dashboard/VitalsCard";
import { VisitTimeline } from "@/components/dashboard/VisitTimeline";
import { MedicationBoard } from "@/components/dashboard/MedicationBoard";
import { AIAnomalies } from "@/components/dashboard/AIAnomalies";
import { CareAgent } from "@/components/dashboard/CareAgent";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

const visits = [
  { id: "1", icon: "doctor" as const, title: "Dr. Chen", date: "Today", time: "2:00 PM" },
  { id: "2", icon: "physio" as const, title: "Physio", date: "Tomorrow", time: "11:00 AM" },
  { id: "3", icon: "family" as const, title: "Family Visit", date: "Oct 28", time: "4:00 PM" },
];

const medications = [
  { id: "1", name: "Lisinopril 10mg", detail: "Due: 8:00 AM Daily", status: "todo" as const },
  { id: "2", name: "Order Gauze", detail: "Supply running low", status: "todo" as const },
  { id: "3", name: "Metformin 500mg", detail: "Due: 8:00 PM Daily", status: "todo" as const },
  { id: "4", name: "Prescription Refill", detail: "Waiting for pharmacy", status: "in-progress" as const },
  { id: "5", name: "Vitamin-D", detail: "Taken at 8:01 AM", status: "done" as const },
  { id: "6", name: "Aspirin 81mg", detail: "Taken at 8:02 AM", status: "done" as const },
];

const anomalies = [
  { id: "1", title: "Unusual Sleep Pattern", description: "Awake for 90 mins at 3 AM. Review sleep log." },
];

const activities = [
  {
    id: "1",
    user: "Maria Rodriguez",
    action: "posted an update",
    time: "15m ago",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    content: "Eleanor had a wonderful time in the garden today! The sun was lovely.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300",
  },
  {
    id: "2",
    user: "Dr. Chen",
    action: "left a voice note",
    time: "2h ago",
    avatarUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100",
    audioUrl: "#",
    audioDuration: "0:12",
  },
  {
    id: "3",
    user: "Maria Rodriguez",
    action: "added a note",
    time: "5h ago",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    content: "Lunch was a success. Finished all of her soup and asked for seconds on the bread!",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-8 space-y-6">
          <PatientCard 
            name="Eleanor Vance"
            status="All Good"
            monitoringSince="2023"
            avatarUrl="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=200"
          />
          
          <div className="grid grid-cols-3 gap-4">
            <VitalsCard label="Heart Rate" value={72} unit="bpm" change={1.2} trend="up" />
            <VitalsCard label="Oxygen Sat." value={98} unit="%" change={-0.5} trend="down" />
            <VitalsCard label="Activity Level" value="Active" change={5.0} trend="up" />
          </div>

          <VisitTimeline visits={visits} />
          
          <MedicationBoard items={medications} />
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-6">
          <AIAnomalies anomalies={anomalies} newCount={1} />
          <CareAgent 
            name="Maria Rodriguez" 
            status="On Duty"
            avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
          />
          <ActivityFeed activities={activities} />
        </div>
      </div>
    </DashboardLayout>
  );
}
