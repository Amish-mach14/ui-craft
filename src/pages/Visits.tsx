import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { X, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

const visitHistory = [
  { id: "1", date: "Oct 26, 2023", time: "09:18 AM", nurse: "Maria Rodriguez", status: "Late", duration: "54 mins", anomaly: "Late" },
  { id: "2", date: "Oct 25, 2023", time: "09:02 AM", nurse: "Maria Rodriguez", status: "On-time", duration: "61 mins", anomaly: null },
  { id: "3", date: "Oct 24, 2023", time: "-", nurse: "Maria Rodriguez", status: "Missed", duration: "-", anomaly: "Missed" },
  { id: "4", date: "Oct 23, 2023", time: "08:55 AM", nurse: "Maria Rodriguez", status: "On-time", duration: "59 mins", anomaly: null },
  { id: "5", date: "Oct 22, 2023", time: "09:05 AM", nurse: "Maria Rodriguez", status: "On-time", duration: "60 mins", anomaly: null },
];

const statusColors: Record<string, string> = {
  "On-time": "bg-success/20 text-success",
  "Late": "bg-warning/20 text-warning",
  "Missed": "bg-destructive/20 text-destructive",
};

const taskChecklist = [
  { id: "1", label: "Vitals checked", done: true },
  { id: "2", label: "Meds administered", done: true },
  { id: "3", label: "Mobility exercise", done: true },
];

export default function Visits() {
  return (
    <DashboardLayout title="Visits" searchPlaceholder="Search visits by nurse, date...">
      <div className="grid grid-cols-12 gap-6">
        {/* Visit History Table */}
        <div className="col-span-8">
          <div className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-4">Visit History</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b border-border">
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Time</th>
                  <th className="pb-3 font-medium">Nurse</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Duration</th>
                  <th className="pb-3 font-medium">Anomalie</th>
                </tr>
              </thead>
              <tbody>
                {visitHistory.map((visit, index) => (
                  <tr 
                    key={visit.id} 
                    className={cn(
                      "border-b border-border/50 text-sm",
                      index === 0 && "bg-primary/5"
                    )}
                  >
                    <td className="py-3 text-foreground">{visit.date}</td>
                    <td className="py-3 text-muted-foreground">{visit.time}</td>
                    <td className="py-3 text-muted-foreground">{visit.nurse}</td>
                    <td className="py-3">
                      <Badge className={cn("font-medium", statusColors[visit.status])}>
                        {visit.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-muted-foreground">{visit.duration}</td>
                    <td className="py-3">
                      {visit.anomaly && (
                        <span className={cn(
                          "flex items-center gap-1 text-sm",
                          visit.anomaly === "Late" ? "text-warning" : "text-destructive"
                        )}>
                          {visit.anomaly === "Late" ? <AlertTriangle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                          {visit.anomaly}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Visit Details */}
        <div className="col-span-4 space-y-6">
          <div className="glass-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Visit Details: Oct 26, 2023</h3>
              <button className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Anomaly Summary */}
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-warning">Anomaly Summary</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    This visit was 18 minutes late and 6 minutes shorter than average. Reliability Agent recommends monitoring punctuality this week.
                  </p>
                </div>
              </div>
            </div>

            {/* Multi-factor Verification */}
            <div className="mb-6">
              <h4 className="font-medium text-foreground mb-3">Multi-factor Verification</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">OTP</p>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm text-success font-medium">Verified</span>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">GPS</p>
                  <p className="text-sm text-foreground">50m from home</p>
                </div>
              </div>
            </div>

            {/* Face Match */}
            <div className="mb-6">
              <h4 className="font-medium text-foreground mb-3">Face Match</h4>
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <Avatar className="w-12 h-12">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-success font-medium">Match Confirmed</span>
                </div>
              </div>
            </div>

            {/* Task Checklist */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Task Checklist</h4>
              <div className="space-y-2">
                {taskChecklist.map((task) => (
                  <div key={task.id} className="flex items-center gap-2">
                    <Checkbox checked={task.done} className="border-success data-[state=checked]:bg-success" />
                    <span className="text-sm text-success">{task.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
