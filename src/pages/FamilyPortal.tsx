import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  CheckCircle, 
  Smile, 
  MessageSquare,
  Send,
  PlusCircle,
  Video,
  MessageCircle,
  Calendar,
  Pill,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const reliabilityBadges = [
  { icon: Clock, label: "Punctuality" },
  { icon: CheckCircle, label: "Task completion" },
  { icon: Smile, label: "Elder mood" },
  { icon: MessageSquare, label: "Communication" },
];

const moments = [
  {
    id: "1",
    time: "10:30 AM",
    title: "Nurse Anita completed today's visit – On time.",
    description: "Morning exercise session.",
    reaction: "\"Felt good after visit\"",
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300",
  },
  {
    id: "2",
    time: "12:45 PM",
    title: "Lunch prepared by caregiver.",
    description: "All dietary needs met.",
    reaction: "\"Lunch was delicious!\"",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300",
  },
];

const quickActions = [
  { icon: Send, label: "Send Message to Nurse", type: "chat" },
  { icon: PlusCircle, label: "Request Extra Visit", type: "extraVisit" },
  { icon: Video, label: "Start Video Call", type: "video" },
  { icon: MessageCircle, label: "Add Feedback", type: "feedback" },
];

export default function FamilyPortal() {
  const [modalType, setModalType] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [feedbackInput, setFeedbackInput] = useState("");
  const [extraVisitDays, setExtraVisitDays] = useState("");
  const [extraVisitTime, setExtraVisitTime] = useState("");
  const [msgDialog, setMsgDialog] = useState<string | null>(null);

  const handleSendChat = () => {
    if (chatInput.trim() === "") return;
    setChatHistory([...chatHistory, chatInput]);
    setChatInput("");
    setMsgDialog("Message sent");
    setTimeout(() => setMsgDialog(null), 2000);
  };

  const handleSendFeedback = () => {
    if (feedbackInput.trim() === "") return;
    setMsgDialog("Feedback sent");
    setTimeout(() => setMsgDialog(null), 2000);
    setFeedbackInput("");
    setModalType(null);
  };

  const handleExtraVisitRequest = () => {
    if (!extraVisitDays || !extraVisitTime) return;
    setMsgDialog("Request sent");
    setTimeout(() => setMsgDialog(null), 2000);
    setExtraVisitDays("");
    setExtraVisitTime("");
    setModalType(null);
  };

  return (
    <DashboardLayout title="Family Portal">
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-8 space-y-6">
          {/* Care Reliability Score */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-secondary"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${92 * 2.51} ${100 * 2.51}`}
                    className="text-success"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-success">92</span>
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Care Reliability</p>
                <h3 className="text-2xl font-semibold text-foreground">92/100 – Stable</h3>
                <p className="text-sm text-muted-foreground mt-1">Based on recent caregiver activity and patient feedback</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {reliabilityBadges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <Badge key={badge.label} variant="secondary" className="bg-secondary text-success border-success/30 gap-1.5">
                        <Icon className="w-3 h-3" />
                        {badge.label}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Today's Moments */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Today's Moments</h3>
            <div className="space-y-4">
              {moments.map((moment) => (
                <div key={moment.id} className="glass-card p-4 flex gap-4">
                  <img 
                    src={moment.imageUrl} 
                    alt={moment.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">{moment.time}</p>
                    <h4 className="font-medium text-foreground">{moment.title}</h4>
                    <p className="text-sm text-muted-foreground">{moment.description}</p>
                    <div className="flex items-center gap-2 mt-2 bg-secondary rounded-full px-3 py-1.5 w-fit">
                      <span className="text-lg">😊</span>
                      <span className="text-sm text-muted-foreground">{moment.reaction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Quick Actions */}
          <div className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={action.label}
                    variant="default"
                    className={cn("w-full justify-start bg-primary text-primary-foreground hover:bg-primary/90")}
                    onClick={() => setModalType(action.type)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {action.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* What's Next */}
          <div className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-4">What's Next</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Next Visit</p>
                  <p className="font-medium text-foreground">Today at 6:00 PM by Nurse Anita</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                  <Pill className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Today's Critical Meds</p>
                  <p className="font-medium text-foreground">No critical medications missed today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {modalType && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-card w-[400px] rounded-lg shadow-lg p-5 relative">
            <X 
              className="absolute top-3 right-3 w-5 h-5 cursor-pointer text-muted-foreground"
              onClick={() => setModalType(null)}
            />

            {modalType === "chat" && (
              <>
                <h3 className="text-lg font-semibold text-foreground mb-3">Chat with Nurse</h3>
                <div className="border border-border rounded-lg h-64 p-3 overflow-y-auto mb-3 flex flex-col gap-2 bg-secondary/10">
                  {chatHistory.length === 0 && (
                    <p className="text-sm text-muted-foreground">No messages yet</p>
                  )}
                  {chatHistory.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className="bg-primary/80 text-white px-3 py-1 rounded self-start max-w-[80%]"
                    >
                      {msg}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    className="flex-1 border border-border rounded-lg px-3 py-2 text-black placeholder:text-muted-foreground"
                    placeholder="Type a message..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                  />
                  <Button onClick={handleSendChat}>Send</Button>
                </div>
              </>
            )}

            {modalType === "extraVisit" && (
              <>
                <h3 className="text-lg font-semibold text-foreground mb-3">Request Extra Visit</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-foreground">Number of Days</label>
                    <input
                      type="number"
                      className="w-full border border-border rounded-lg px-3 py-2 text-black"
                      value={extraVisitDays}
                      onChange={(e) => setExtraVisitDays(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Time</label>
                    <input
                      type="time"
                      className="w-full border border-border rounded-lg px-3 py-2 text-black"
                      value={extraVisitTime}
                      onChange={(e) => setExtraVisitTime(e.target.value)}
                    />
                  </div>
                  <Button className="w-full mt-2" onClick={handleExtraVisitRequest}>Schedule Request</Button>
                </div>
              </>
            )}

            {modalType === "feedback" && (
              <>
                <h3 className="text-lg font-semibold text-foreground mb-3">Send Feedback to Nurse</h3>
                <textarea
                  className="w-full border border-border rounded-lg p-2 h-32 mb-3 text-black placeholder:text-muted-foreground"
                  placeholder="Type feedback..."
                  value={feedbackInput}
                  onChange={(e) => setFeedbackInput(e.target.value)}
                />
                <Button className="w-full" onClick={handleSendFeedback}>Send Feedback</Button>
              </>
            )}

            {modalType === "video" && (
              <div className="flex flex-col items-center justify-center gap-3">
                <h3 className="text-lg font-semibold text-foreground">Video Call</h3>
                <p className="text-sm text-muted-foreground">Future implementation</p>
                <Button onClick={() => setModalType(null)}>Close</Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Message Dialog */}
      {msgDialog && (
        <div className="fixed bottom-5 right-5 bg-success/90 text-white px-4 py-2 rounded shadow-lg z-50">
          {msgDialog}
        </div>
      )}
    </DashboardLayout>
  );
}