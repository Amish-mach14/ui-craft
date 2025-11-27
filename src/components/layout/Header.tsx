import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
  searchPlaceholder?: string;
}

export function Header({ title, searchPlaceholder = "Search patients, reports..." }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-4 px-6 border-b border-border">
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder={searchPlaceholder}
            className="pl-10 bg-secondary border-border"
          />
        </div>
        
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </button>
        
        <Avatar className="w-9 h-9 border-2 border-primary">
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
