import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  Pill, 
  AlertTriangle, 
  Users,
  Settings,
  Shield,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  variant?: "admin" | "family";
}

const adminNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Calendar, label: "Visits", path: "/visits" },
  { icon: Pill, label: "Medications", path: "/medications" },
  { icon: Building2, label: "Hospitals", path: "/hospitals" },
  { icon: AlertTriangle, label: "AI Anomaly Alerts", path: "/alerts" },
  { icon: Users, label: "Family Portal", path: "/family" },
];

const familyNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/family" },
  { icon: Calendar, label: "Schedule", path: "/family/schedule" },
];

export function Sidebar({ variant = "admin" }: SidebarProps) {
  const navItems = variant === "family" ? familyNavItems : adminNavItems;

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[180px] bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5 border-b border-sidebar-border">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-semibold text-sidebar-foreground">CareConnect</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-border/50"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="px-3 py-4 border-t border-sidebar-border space-y-1">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-border/50"
            )
          }
        >
          <Settings className="w-5 h-5" />
          Settings
        </NavLink>
      </div>
    </aside>
  );
}
