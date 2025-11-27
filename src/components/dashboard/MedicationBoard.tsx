import { cn } from "@/lib/utils";

interface MedicationItem {
  id: string;
  name: string;
  detail: string;
  status: "todo" | "in-progress" | "done";
}

interface MedicationBoardProps {
  items: MedicationItem[];
}

const statusColors = {
  todo: "border-l-warning",
  "in-progress": "border-l-primary",
  done: "border-l-success",
};

export function MedicationBoard({ items }: MedicationBoardProps) {
  const todo = items.filter(i => i.status === "todo");
  const inProgress = items.filter(i => i.status === "in-progress");
  const done = items.filter(i => i.status === "done");

  const renderColumn = (title: string, count: number, columnItems: MedicationItem[], status: keyof typeof statusColors) => (
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-3">
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
        <span className="text-xs text-muted-foreground">({count})</span>
      </div>
      <div className="space-y-2">
        {columnItems.map((item) => (
          <div 
            key={item.id}
            className={cn(
              "bg-secondary rounded-lg p-3 border-l-4",
              statusColors[status]
            )}
          >
            <p className="font-medium text-foreground text-sm">{item.name}</p>
            <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="glass-card p-5">
      <h3 className="text-lg font-semibold text-foreground mb-4">Medication & Supplies</h3>
      <div className="flex gap-4">
        {renderColumn("To Do", todo.length, todo, "todo")}
        {renderColumn("In Progress", inProgress.length, inProgress, "in-progress")}
        {renderColumn("Done", done.length, done, "done")}
      </div>
    </div>
  );
}
