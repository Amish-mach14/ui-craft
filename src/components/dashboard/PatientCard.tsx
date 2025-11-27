import { CheckCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface PatientCardProps {
  name: string;
  status: string;
  monitoringSince: string;
  avatarUrl?: string;
}

export function PatientCard({ name, status, monitoringSince, avatarUrl }: PatientCardProps) {
  return (
    <div className="glass-card p-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16 border-2 border-border">
          <AvatarImage src={avatarUrl || "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=200"} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold text-foreground">{name}</h2>
          <div className="flex items-center gap-2 mt-1">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-success text-sm font-medium">Status: {status}</span>
          </div>
          <p className="text-muted-foreground text-sm mt-0.5">Monitoring since {monitoringSince}</p>
        </div>
      </div>
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
        View Full Profile
      </Button>
    </div>
  );
}
