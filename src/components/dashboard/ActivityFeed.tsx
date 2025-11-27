import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play } from "lucide-react";

interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  avatarUrl?: string;
  content?: string;
  imageUrl?: string;
  audioUrl?: string;
  audioDuration?: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="glass-card p-5 max-h-[400px] overflow-y-auto">
      <h3 className="text-lg font-semibold text-foreground mb-4">Activity Feed</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <Avatar className="w-10 h-10 flex-shrink-0">
              <AvatarImage src={activity.avatarUrl} />
              <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium text-foreground">{activity.user}</span>
                <span className="text-muted-foreground"> {activity.action} </span>
                <span className="text-muted-foreground">{activity.time}</span>
              </p>
              {activity.content && (
                <p className="text-sm text-muted-foreground mt-1">{activity.content}</p>
              )}
              {activity.imageUrl && (
                <img 
                  src={activity.imageUrl} 
                  alt="Activity" 
                  className="mt-2 rounded-lg max-w-[200px] h-auto"
                />
              )}
              {activity.audioUrl && (
                <div className="mt-2 flex items-center gap-3 bg-secondary rounded-full px-3 py-2 max-w-[200px]">
                  <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                  </button>
                  <div className="flex-1 h-1 bg-muted rounded-full">
                    <div className="w-1/3 h-full bg-primary rounded-full" />
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.audioDuration}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
