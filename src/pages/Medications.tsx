import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, AlertTriangle, TrendingDown, TrendingUp, RefreshCw, Package, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const medications = [
  { 
    id: "1", 
    name: "Metformin, 500mg", 
    dosage: "1-0-1 daily",
    doctor: "Dr. Jane Doe",
    stock: "14 left",
    stockDays: "3 days remaining",
    stockStatus: "warning",
    adherence: "86%",
    adherenceTrend: "down"
  },
  { 
    id: "2", 
    name: "Lisinopril, 10mg", 
    dosage: "1-0-0 daily",
    doctor: "Dr. Jane Doe",
    stock: "25 left",
    stockDays: "12 days remaining",
    stockStatus: "good",
    adherence: "100%",
    adherenceTrend: "up"
  },
  { 
    id: "3", 
    name: "Atorvastatin, 20mg", 
    dosage: "0-0-1 daily",
    doctor: "Dr. Ben Carter",
    stock: "6 left",
    stockDays: "Critically Low",
    stockStatus: "critical",
    adherence: "93%",
    adherenceTrend: "up"
  },
];

const alerts = [
  { id: "1", type: "warning", title: "Metformin running low", description: "Will run out in 2 days. Alert sent to nurse & family." },
  { id: "2", type: "info", title: "BP monitor batteries low", description: "Please replace within 3 days to ensure accurate readings." },
  { id: "3", type: "critical", title: "Atorvastatin stock critical", description: "Only 6 tablets remaining. Immediate refill required." },
];

const notifications = [
  { id: "1", name: "Nurse Emily", status: "Notified" },
  { id: "2", name: "Daughter Sarah", status: "Notified" },
  { id: "3", name: "CarePlus Pharmacy", status: "Pending" },
];

export default function Medications() {
  return (
    <DashboardLayout title="" searchPlaceholder="Search...">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Medications</h1>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Medication
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Medications Table */}
        <div className="col-span-8 space-y-6">
          <div className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-4">Current Medications</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b border-border">
                  <th className="pb-3 font-medium">Medication</th>
                  <th className="pb-3 font-medium">Doctor</th>
                  <th className="pb-3 font-medium">Stock</th>
                  <th className="pb-3 font-medium">Adherence</th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {medications.map((med) => (
                  <tr key={med.id} className="border-b border-border/50 text-sm">
                    <td className="py-4">
                      <p className="font-medium text-foreground">{med.name}</p>
                      <p className="text-xs text-muted-foreground">{med.dosage}</p>
                    </td>
                    <td className="py-4 text-muted-foreground">{med.doctor}</td>
                    <td className="py-4">
                      <p className={cn(
                        "font-medium",
                        med.stockStatus === "critical" ? "text-destructive" :
                        med.stockStatus === "warning" ? "text-warning" : "text-success"
                      )}>
                        {med.stock}
                      </p>
                      <p className={cn(
                        "text-xs",
                        med.stockStatus === "critical" ? "text-destructive" :
                        med.stockStatus === "warning" ? "text-warning" : "text-muted-foreground"
                      )}>
                        {med.stockDays}
                      </p>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-foreground">{med.adherence}</span>
                        {med.adherenceTrend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-success" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-destructive" />
                        )}
                      </div>
                    </td>
                    <td className="py-4">
                      <Button variant="link" className="text-primary p-0 h-auto">
                        Manage
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Predictive Alerts */}
          <div className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-4">Predictive Alerts</h3>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div 
                  key={alert.id}
                  className={cn(
                    "rounded-lg p-3 border",
                    alert.type === "critical" ? "bg-destructive/10 border-destructive/20" :
                    alert.type === "warning" ? "bg-warning/10 border-warning/20" : "bg-secondary border-border"
                  )}
                >
                  <div className="flex items-start gap-2">
                    {alert.type === "critical" || alert.type === "warning" ? (
                      <AlertTriangle className={cn(
                        "w-4 h-4 mt-0.5",
                        alert.type === "critical" ? "text-destructive" : "text-warning"
                      )} />
                    ) : (
                      <Package className="w-4 h-4 text-muted-foreground mt-0.5" />
                    )}
                    <div>
                      <p className={cn(
                        "font-medium text-sm",
                        alert.type === "critical" ? "text-destructive" :
                        alert.type === "warning" ? "text-warning" : "text-foreground"
                      )}>
                        {alert.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Managing Medication */}
          <div className="glass-card p-5">
            <p className="text-sm text-muted-foreground mb-1">Managing</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">Metformin, 500mg</h3>
            <div className="space-y-2">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <RefreshCw className="w-4 h-4 mr-2" />
                Request Refill
              </Button>
              <Button variant="secondary" className="w-full">
                <Package className="w-4 h-4 mr-2" />
                Mark Stock Updated
              </Button>
              <Button variant="secondary" className="w-full">
                <Bell className="w-4 h-4 mr-2" />
                Notify Pharmacy
              </Button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <h4 className="font-medium text-foreground mb-3">Notification Status</h4>
              <div className="space-y-2">
                {notifications.map((notif) => (
                  <div key={notif.id} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{notif.name}</span>
                    <span className={cn(
                      "flex items-center gap-1",
                      notif.status === "Notified" ? "text-success" : "text-warning"
                    )}>
                      {notif.status === "Notified" ? "✓" : "⏳"} {notif.status}
                    </span>
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
