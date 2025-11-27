import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface VitalsCardProps {
  label: string;
  value: string | number;
  unit?: string;
  change?: number;
  trend?: "up" | "down";
}

export function VitalsCard({ label, value, unit, change, trend }: VitalsCardProps) {
  return (
    <div className="glass-card p-4">
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-foreground">{value}</span>
        {unit && <span className="text-xl text-muted-foreground">{unit}</span>}
      </div>
      {change !== undefined && (
        <div className={cn(
          "flex items-center gap-1 mt-2 text-sm",
          trend === "up" ? "text-success" : "text-destructive"
        )}>
          {trend === "up" ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{trend === "up" ? "+" : ""}{change}%</span>
        </div>
      )}
    </div>
  );
}
