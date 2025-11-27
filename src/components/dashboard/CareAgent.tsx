import { User, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface CareAgentProps {
  name: string;
  status: "On Duty" | "Off Duty";
  avatarUrl?: string;
}

export function CareAgent({ name, status, avatarUrl }: CareAgentProps) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <User className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Care Agent</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatarUrl || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-foreground">{name}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-xs text-success">{status}</span>
            </div>
          </div>
        </div>
        <Button size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
          <Phone className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
