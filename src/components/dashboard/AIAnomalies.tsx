import { Sparkles, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Anomaly {
  id: string;
  title: string;
  description: string;
}

interface AIAnomaliesProps {
  anomalies: Anomaly[];
  newCount: number;
}

export function AIAnomalies({ anomalies, newCount }: AIAnomaliesProps) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-warning" />
          <h3 className="text-lg font-semibold text-foreground">AI Anomalies</h3>
        </div>
        <Badge className="bg-primary/20 text-primary border-0">{newCount} New</Badge>
      </div>
      <div className="space-y-3">
        {anomalies.map((anomaly) => (
          <div 
            key={anomaly.id}
            className="bg-warning/10 border border-warning/20 rounded-lg p-3"
          >
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm">{anomaly.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{anomaly.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
