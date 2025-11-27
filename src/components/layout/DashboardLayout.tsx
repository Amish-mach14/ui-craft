import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  searchPlaceholder?: string;
  variant?: "admin" | "family";
}

export function DashboardLayout({ 
  children, 
  title, 
  searchPlaceholder,
  variant = "admin" 
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar variant={variant} />
      <main className="ml-[180px]">
        <Header title={title} searchPlaceholder={searchPlaceholder} />
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
