import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";

const fontSizes = ["Normal", "Large", "Extra Large"];

export default function Settings() {
  const [selectedFontSize, setSelectedFontSize] = useState("Normal");
  const [notifications, setNotifications] = useState({
    sms: true,
    whatsapp: true,
    email: false,
  });
  const [alertType, setAlertType] = useState("high-priority");
  const [routineCoach, setRoutineCoach] = useState({
    hydration: true,
    exercise: true,
    social: false,
  });

  return (
    <DashboardLayout title="" searchPlaceholder="Search...">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold italic text-foreground mb-8">Settings & Profile</h1>

        {/* Accessibility & Display */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">Accessibility & Display</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <Label className="text-sm font-medium text-foreground mb-2 block">Language</Label>
              <p className="text-xs text-muted-foreground mb-2">Select the display language for the user interface.</p>
              <Select defaultValue="english">
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium text-foreground mb-2 block">Theme</Label>
              <p className="text-xs text-muted-foreground mb-2">Enable high-contrast mode for better readability.</p>
              <div className="flex items-center justify-between bg-secondary rounded-lg px-4 py-3">
                <span className="text-sm text-foreground">High-Contrast Mode</span>
                <Switch />
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium text-foreground mb-2 block">Font Size</Label>
            <p className="text-xs text-muted-foreground mb-2">Adjust the text size across the entire platform.</p>
            <div className="flex rounded-lg overflow-hidden border border-border">
              {fontSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedFontSize(size)}
                  className={cn(
                    "flex-1 py-3 text-sm font-medium transition-colors",
                    selectedFontSize === size 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Your Notifications */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">Your Notifications</h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Channels</h3>
              <p className="text-xs text-muted-foreground mb-4">Choose how you receive alerts.</p>
              <div className="space-y-3">
                {[
                  { key: "sms", label: "SMS" },
                  { key: "whatsapp", label: "WhatsApp" },
                  { key: "email", label: "Email" },
                ].map((channel) => (
                  <div key={channel.key} className="flex items-center gap-3">
                    <Checkbox 
                      checked={notifications[channel.key as keyof typeof notifications]}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, [channel.key]: checked }))
                      }
                      className="border-primary data-[state=checked]:bg-primary"
                    />
                    <span className="text-sm text-foreground">{channel.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Types of Alerts</h3>
              <p className="text-xs text-muted-foreground mb-4">Select the priority of notifications.</p>
              <div className="space-y-3">
                {[
                  { key: "high-priority", label: "High priority only" },
                  { key: "all", label: "All alerts" },
                ].map((type) => (
                  <div key={type.key} className="flex items-center gap-3">
                    <div 
                      className={cn(
                        "w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer",
                        alertType === type.key ? "border-primary" : "border-muted-foreground"
                      )}
                      onClick={() => setAlertType(type.key)}
                    >
                      {alertType === type.key && (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className="text-sm text-foreground">{type.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Routine Coach */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">Routine Coach</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Manage proactive health suggestions sent to the monitored individual.
          </p>
          
          <div className="space-y-4">
            {[
              { key: "hydration", label: "Hydration reminders" },
              { key: "exercise", label: "Light exercise suggestions" },
              { key: "social", label: "Social check-in suggestions" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <span className="text-foreground">{item.label}</span>
                <Switch 
                  checked={routineCoach[item.key as keyof typeof routineCoach]}
                  onCheckedChange={(checked) => 
                    setRoutineCoach(prev => ({ ...prev, [item.key]: checked }))
                  }
                />
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button variant="secondary">Cancel</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Save Changes
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
