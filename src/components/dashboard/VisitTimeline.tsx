import { Calendar, Stethoscope, Users } from "lucide-react";

interface Visit {
  id: string;
  icon: "doctor" | "physio" | "family";
  title: string;
  date: string;
  time: string;
}

const iconMap = {
  doctor: Stethoscope,
  physio: Calendar,
  family: Users,
};

interface VisitTimelineProps {
  visits: Visit[];
}

export function VisitTimeline({ visits }: VisitTimelineProps) {
  return (
    <div className="glass-card p-5">
      <h3 className="text-lg font-semibold text-foreground mb-4">Visit Timeline</h3>
      <div className="flex gap-8 overflow-x-auto pb-2">
        {visits.map((visit) => {
          const Icon = iconMap[visit.icon];
          return (
            <div key={visit.id} className="flex flex-col items-center min-w-[100px]">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground text-sm">{visit.title}</span>
              <span className="text-muted-foreground text-xs mt-1">{visit.date}</span>
              <span className="text-muted-foreground text-xs">{visit.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
