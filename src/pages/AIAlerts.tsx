import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Activity, 
  Pill, 
  Phone, 
  Video, 
  Calendar,
  Heart,
  TrendingDown,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";

const filterTypes = ["All Types", "Visit Anomaly", "Medication Alert", "Health Risk"];
const filterSeverity = ["High", "Medium", "Low"];

const alerts = [
  {
    id: "1",
    type: "Health Risk",
    severity: "High",
    agent: "Vitals Agent",
    time: "Today, 9:41 AM",
    icon: AlertTriangle,
    iconBg: "bg-destructive/20",
    iconColor: "text-destructive",
  },
  {
    id: "2",
    type: "Visit Anomaly",
    severity: "Medium",
    agent: "Reliability Agent",
    time: "Yesterday, 3:15 PM",
    icon: Calendar,
    iconBg: "bg-warning/20",
    iconColor: "text-warning",
  },
  {
    id: "3",
    type: "Medication Alert",
    severity: "Low",
    agent: "Adherence Agent",
    time: "Oct 28, 11:02 AM",
    icon: Pill,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
];

const inputSignals = [
  { icon: Heart, label: "Elevated Blood Pressure", detail: "Recent vital reading: 140/90 mmHg" },
  { icon: TrendingDown, label: "Reduced Activity Level", detail: "20% decrease in movement in last 24 hours" },
  { icon: FileText, label: "Nurse Notes", detail: "Patient expressed feelings of sadness yesterday" },
];

export default function AIAlerts() {
  return (
    <DashboardLayout title="" searchPlaceholder="Search...">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">AI Anomaly Alerts</h1>
        <p className="text-muted-foreground mt-1">Central hub for all AI-generated anomalies within the platform.</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Filters and Alerts List */}
        <div className="col-span-7 space-y-6">
          {/* Filters */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Filter by Type</p>
              <div className="flex gap-2">
                {filterTypes.map((type, i) => (
                  <Badge 
                    key={type}
                    variant={i === 0 ? "default" : "secondary"}
                    className={cn(
                      "cursor-pointer",
                      i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Filter by Severity</p>
              <div className="flex gap-2">
                {filterSeverity.map((severity) => (
                  <Badge 
                    key={severity}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer"
                  >
                    {severity}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts List */}
          <div className="space-y-3">
            {alerts.map((alert, index) => {
              const Icon = alert.icon;
              return (
                <div 
                  key={alert.id}
                  className={cn(
                    "glass-card p-4 flex items-center gap-4 cursor-pointer transition-colors",
                    index === 0 && "ring-2 ring-primary"
                  )}
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", alert.iconBg)}>
                    <Icon className={cn("w-6 h-6", alert.iconColor)} />
                  </div>
                  <div className="flex-1 grid grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Type</p>
                      <p className="font-medium text-foreground text-sm">{alert.type}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Severity</p>
                      <div className="flex items-center gap-1.5">
                        <span className={cn(
                          "w-2 h-2 rounded-full",
                          alert.severity === "High" ? "bg-destructive" :
                          alert.severity === "Medium" ? "bg-warning" : "bg-success"
                        )} />
                        <span className="font-medium text-foreground text-sm">{alert.severity}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Agent</p>
                      <p className="font-medium text-foreground text-sm">{alert.agent}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Time</p>
                      <p className="font-medium text-foreground text-sm">{alert.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Alert Details */}
        <div className="col-span-5">
          <div className="glass-card p-5">
            <p className="text-sm text-muted-foreground mb-1">Alert raised by Vitals Agent</p>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Elevated Blood Pressure & Reduced Activity
            </h3>

            {/* Input Signals */}
            <div className="mb-6">
              <h4 className="font-medium text-foreground mb-3">Input Signals</h4>
              <div className="space-y-3">
                {inputSignals.map((signal, i) => {
                  const Icon = signal.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{signal.label}</p>
                        <p className="text-xs text-muted-foreground">{signal.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI Explanation */}
            <div className="mb-6">
              <h4 className="font-medium text-foreground mb-3">AI Explanation</h4>
              <div className="bg-secondary rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Based on a combination of elevated vitals, a significant drop in physical activity, and qualitative nurse notes, the Vitals Agent suggests a potential health decline. These factors together indicate a high risk that requires timely medical assessment.
                </p>
              </div>
            </div>

            {/* Suggested Actions */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Suggested Actions</h4>
              <div className="space-y-3">
                <button className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 p-[1px] transition-all hover:shadow-lg hover:shadow-primary/25">
                  <div className="flex items-center gap-3 rounded-xl bg-card/90 px-4 py-3 transition-all group-hover:bg-card/70">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Call family now to discuss patient's mood</span>
                  </div>
                </button>
                <button className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-secondary to-secondary/80 p-[1px] transition-all hover:shadow-lg hover:shadow-secondary/25">
                  <div className="flex items-center gap-3 rounded-xl bg-card/90 px-4 py-3 transition-all group-hover:bg-card/70">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/50">
                      <Video className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Schedule doctor tele-consult</span>
                  </div>
                </button>
                <button className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-warning/60 to-warning/40 p-[1px] transition-all hover:shadow-lg hover:shadow-warning/25">
                  <div className="flex items-center gap-3 rounded-xl bg-card/90 px-4 py-3 transition-all group-hover:bg-card/70">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/20">
                      <Calendar className="h-5 w-5 text-warning" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Review medication schedule with nurse</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
