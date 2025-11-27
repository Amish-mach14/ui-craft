import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  CheckCircle, 
  Smile, 
  MessageSquare,
  Send,
  PlusCircle,
  Video,
  MessageCircle,
  Calendar,
  Pill
} from "lucide-react";
import { cn } from "@/lib/utils";

const reliabilityBadges = [
  { icon: Clock, label: "Punctuality" },
  { icon: CheckCircle, label: "Task completion" },
  { icon: Smile, label: "Elder mood" },
  { icon: MessageSquare, label: "Communication" },
];

const moments = [
  {
    id: "1",
    time: "10:30 AM",
    title: "Nurse Anita completed today's visit – On time.",
    description: "Morning exercise session.",
    reaction: "\"Felt good after visit\"",
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300",
  },
  {
    id: "2",
    time: "12:45 PM",
    title: "Lunch prepared by caregiver.",
    description: "All dietary needs met.",
    reaction: "\"Lunch was delicious!\"",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300",
  },
];

const quickActions = [
  { icon: Send, label: "Send Message to Nurse", primary: true },
  { icon: PlusCircle, label: "Request Extra Visit", primary: true },
  { icon: Video, label: "Start Video Call", primary: false },
  { icon: MessageCircle, label: "Add Feedback", primary: true },
];

export default function FamilyPortal() {
  return (
    <DashboardLayout title="Family Portal" variant="family">
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-8 space-y-6">
          {/* Care Reliability Score */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-6">
              {/* Score Circle */}
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-secondary"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${92 * 2.51} ${100 * 2.51}`}
                    className="text-success"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-success">92</span>
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Care Reliability</p>
                <h3 className="text-2xl font-semibold text-foreground">92/100 – Stable</h3>
                <p className="text-sm text-muted-foreground mt-1">Based on recent caregiver activity and patient feedback</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {reliabilityBadges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <Badge key={badge.label} variant="secondary" className="bg-secondary text-success border-success/30 gap-1.5">
                        <Icon className="w-3 h-3" />
                        {badge.label}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Today's Moments */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Today's Moments</h3>
            <div className="space-y-4">
              {moments.map((moment) => (
                <div key={moment.id} className="glass-card p-4 flex gap-4">
                  <img 
                    src={moment.imageUrl} 
                    alt={moment.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">{moment.time}</p>
                    <h4 className="font-medium text-foreground">{moment.title}</h4>
                    <p className="text-sm text-muted-foreground">{moment.description}</p>
                    <div className="flex items-center gap-2 mt-2 bg-secondary rounded-full px-3 py-1.5 w-fit">
                      <span className="text-lg">😊</span>
                      <span className="text-sm text-muted-foreground">{moment.reaction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Quick Actions */}
          <div className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={action.label}
                    variant={action.primary ? "default" : "secondary"}
                    className={cn(
                      "w-full justify-start",
                      action.primary && "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {action.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* What's Next */}
          <div className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-4">What's Next</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Next Visit</p>
                  <p className="font-medium text-foreground">Today at 6:00 PM by Nurse Anita</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                  <Pill className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Today's Critical Meds</p>
                  <p className="font-medium text-foreground">No critical medications missed today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
