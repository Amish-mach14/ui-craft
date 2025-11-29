import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, AlertTriangle, TrendingDown, TrendingUp, RefreshCw, Package, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const initialMedications = [
  {
    id: "1",
    name: "Metformin, 500mg",
    dosage: "1-0-1 daily",
    doctor: "Dr. Jane Doe",
    stock: 14,
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
    stock: 25,
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
    stock: 6,
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

export default function Medications() {
  const [medications, setMedications] = useState(initialMedications);

  const [notifications, setNotifications] = useState([
    { id: "1", name: "Nurse Emily", status: "Notified" },
    { id: "2", name: "Daughter Sarah", status: "Notified" },
    { id: "3", name: "CarePlus Pharmacy", status: "Pending" },
  ]);

  // Add Medication Modal
  const [openAdd, setOpenAdd] = useState(false);
  const [newMed, setNewMed] = useState({
    name: "",
    dosage: "",
    doctor: "",
    stock: "",
  });

  // Manage Medication (Edit Modal)
  const [openManage, setOpenManage] = useState(false);
  const [editingMed, setEditingMed] = useState(null);

  // STOCK UPDATE
  const handleStockUpdate = () => {
    setMedications((prev) =>
      prev.map((med) =>
        med.id === "1" ? { ...med, stock: med.stock + 10 } : med
      )
    );

    toast({ description: "Stocks Updated" });
  };

  // NOTIFY PHARMACY
  const handleNotify = () => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.name === "CarePlus Pharmacy"
          ? { ...n, status: "Notified Pharmacy" }
          : n
      )
    );

    toast({ description: "Pharmacy Notified" });
  };

  // REQUEST REFILL
  const handleRefillRequest = () => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.name === "CarePlus Pharmacy"
          ? { ...n, status: "Refill Requested" }
          : n
      )
    );

    toast({ description: "Refill Requested" });
  };

  // ADD NEW MEDICATION
  const handleAddMedication = () => {
    const id = (medications.length + 1).toString();

    setMedications([
      ...medications,
      {
        id,
        name: newMed.name,
        dosage: newMed.dosage,
        doctor: newMed.doctor,
        stock: Number(newMed.stock),
        stockDays: "",
        stockStatus: "good",
        adherence: "0%",
        adherenceTrend: "up",
      },
    ]);

    toast({ description: "Medication Added" });

    setOpenAdd(false);
    setNewMed({ name: "", dosage: "", doctor: "", stock: "" });
  };

  // OPEN MANAGE MODAL
  const openManageModal = (med) => {
    setEditingMed(med);
    setOpenManage(true);
  };

  // UPDATE MEDICATION
  const handleMedicationUpdate = () => {
    setMedications((prev) =>
      prev.map((m) => (m.id === editingMed.id ? editingMed : m))
    );

    toast({ description: "Medication Updated" });
    setOpenManage(false);
  };

  return (
    <DashboardLayout title="" searchPlaceholder="Search...">

      {/* Add Medication Modal */}
      <Dialog open={openAdd} onOpenChange={setOpenAdd}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Medication</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <Input
              placeholder="Medication Name"
              value={newMed.name}
              onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
            />
            <Input
              placeholder="Dosage"
              value={newMed.dosage}
              onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
            />
            <Input
              placeholder="Doctor"
              value={newMed.doctor}
              onChange={(e) => setNewMed({ ...newMed, doctor: e.target.value })}
            />
            <Input
              placeholder="Stock"
              type="number"
              value={newMed.stock}
              onChange={(e) => setNewMed({ ...newMed, stock: e.target.value })}
            />
          </div>

          <DialogFooter>
            <Button onClick={handleAddMedication}>Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Manage (Edit) Medication Modal */}
      <Dialog open={openManage} onOpenChange={setOpenManage}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Medication</DialogTitle>
          </DialogHeader>

          {editingMed && (
            <div className="space-y-3">
              <Input
                placeholder="Medication Name"
                value={editingMed.name}
                onChange={(e) =>
                  setEditingMed({ ...editingMed, name: e.target.value })
                }
              />
              <Input
                placeholder="Dosage"
                value={editingMed.dosage}
                onChange={(e) =>
                  setEditingMed({ ...editingMed, dosage: e.target.value })
                }
              />
              <Input
                placeholder="Doctor"
                value={editingMed.doctor}
                onChange={(e) =>
                  setEditingMed({ ...editingMed, doctor: e.target.value })
                }
              />
              <Input
                placeholder="Stock"
                type="number"
                value={editingMed.stock}
                onChange={(e) =>
                  setEditingMed({ ...editingMed, stock: Number(e.target.value) })
                }
              />
            </div>
          )}

          <DialogFooter>
            <Button onClick={handleMedicationUpdate}>Update</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Medications</h1>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setOpenAdd(true)}
          >
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
                      <p className="font-medium">{med.stock} left</p>
                      <p className="text-xs text-muted-foreground">{med.stockDays}</p>
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
                      <Button
                        variant="link"
                        className="text-primary p-0 h-auto"
                        onClick={() => openManageModal(med)}
                      >
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
                    alert.type === "critical"
                      ? "bg-destructive/10 border-destructive/20"
                      : alert.type === "warning"
                      ? "bg-warning/10 border-warning/20"
                      : "bg-secondary border-border"
                  )}
                >
                  <div className="flex items-start gap-2">
                    {(alert.type === "critical" || alert.type === "warning") ? (
                      <AlertTriangle
                        className={cn(
                          "w-4 h-4 mt-0.5",
                          alert.type === "critical" ? "text-destructive" : "text-warning"
                        )}
                      />
                    ) : (
                      <Package className="w-4 h-4 text-muted-foreground mt-0.5" />
                    )}
                    <div>
                      <p
                        className={cn(
                          "font-medium text-sm",
                          alert.type === "critical"
                            ? "text-destructive"
                            : alert.type === "warning"
                            ? "text-warning"
                            : "text-foreground"
                        )}
                      >
                        {alert.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {alert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Managing Medication Panel */}
          <div className="glass-card p-5">
            <p className="text-sm text-muted-foreground mb-1">Managing</p>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Metformin, 500mg
            </h3>

            <div className="space-y-2">
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleStockUpdate}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Mark Stock Updated
              </Button>

              <Button variant="secondary" className="w-full" onClick={handleRefillRequest}>
                <Package className="w-4 h-4 mr-2" />
                Request Refill
              </Button>

              <Button variant="secondary" className="w-full" onClick={handleNotify}>
                <Bell className="w-4 h-4 mr-2" />
                Notify Pharmacy
              </Button>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <h4 className="font-medium text-foreground mb-3">
                Notification Status
              </h4>

              <div className="space-y-2">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted-foreground">{notif.name}</span>
                    <span
                      className={cn(
                        "flex items-center gap-1",
                        notif.status.includes("Notified") ? "text-success" : "text-warning"
                      )}
                    >
                      {notif.status.includes("Notified") ? "✓" : "⏳"}{" "}
                      {notif.status}
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