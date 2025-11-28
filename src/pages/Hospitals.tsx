import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Star, ChevronDown, Calendar } from "lucide-react";
import { useState } from "react";

const hospitals = [
  {
    id: "1",
    name: "Downtown Medical Center",
    address: "123 Main St, Anytown. Specializes in geriatric care.",
    rating: 4.8,
    specialty: "24/7 Care",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=250&fit=crop",
  },
  {
    id: "2",
    name: "Uptown General Hospital",
    address: "456 Oak Ave, Metropolis. Leader in cardiac care.",
    rating: 4.5,
    specialty: "Long-term Support",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop",
  },
  {
    id: "3",
    name: "Riverside Health Complex",
    address: "789 River Rd, Lakeside. Top-rated rehabilitation services.",
    rating: 4.9,
    specialty: "Dementia Care",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=250&fit=crop",
  },
];

export default function Hospitals() {
  const [selectedHospital, setSelectedHospital] = useState(hospitals[0]);

  return (
    <DashboardLayout title="Hospitals & Caretaker Requests" searchPlaceholder="Search hospitals by name">
      <div className="grid grid-cols-12 gap-6">
        {/* Hospital List */}
        <div className="col-span-7 space-y-4">
          {/* Search and Filters */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search hospitals by name" 
                className="pl-10 bg-card border-border"
              />
            </div>
            <Select defaultValue="location">
              <SelectTrigger className="w-[140px] bg-card border-border">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="location">Location</SelectItem>
                <SelectItem value="nearby">Nearby</SelectItem>
                <SelectItem value="city">City Center</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="specialization">
              <SelectTrigger className="w-[160px] bg-card border-border">
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="specialization">Specialization</SelectItem>
                <SelectItem value="geriatric">Geriatric Care</SelectItem>
                <SelectItem value="cardiac">Cardiac Care</SelectItem>
                <SelectItem value="dementia">Dementia Care</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Hospital Cards */}
          <div className="space-y-4">
            {hospitals.map((hospital) => (
              <div 
                key={hospital.id}
                className={`glass-card p-4 flex gap-4 cursor-pointer transition-all ${
                  selectedHospital.id === hospital.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedHospital(hospital)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-warning fill-warning" />
                      <span className="text-sm font-medium text-foreground">{hospital.rating} Stars</span>
                    </div>
                    <span className="text-muted-foreground">|</span>
                    <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground text-xs">
                      {hospital.specialty}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{hospital.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{hospital.address}</p>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-secondary hover:bg-secondary/80"
                  >
                    Request Caretaker
                  </Button>
                </div>
                <div className="w-40 h-28 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Form */}
        <div className="col-span-5">
          <div className="glass-card p-5">
            <p className="text-sm text-muted-foreground mb-1">Request Caretaker From</p>
            <h3 className="text-xl font-semibold text-foreground mb-6">{selectedHospital.name}</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Patient Name</label>
                <Select defaultValue="robert">
                  <SelectTrigger className="w-full bg-card border-border">
                    <SelectValue placeholder="Select patient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="robert">Robert Johnson</SelectItem>
                    <SelectItem value="eleanor">Eleanor Vance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Type of Caretaker Needed</label>
                <Select defaultValue="nurse">
                  <SelectTrigger className="w-full bg-card border-border">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nurse">Medical Nurse</SelectItem>
                    <SelectItem value="aide">Home Health Aide</SelectItem>
                    <SelectItem value="therapist">Physical Therapist</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Required Duration / Frequency</label>
                <Select defaultValue="fulltime">
                  <SelectTrigger className="w-full bg-card border-border">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fulltime">Full-time</SelectItem>
                    <SelectItem value="parttime">Part-time</SelectItem>
                    <SelectItem value="weekly">Weekly visits</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Start Date Preference</label>
                <div className="relative">
                  <Input 
                    type="date" 
                    placeholder="mm/dd/yyyy"
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-primary mb-2 block">Additional Notes/Requirements</label>
                <Textarea 
                  placeholder="e.g., Patient has a cat, requires assistance with mobility..."
                  className="bg-card border-border min-h-[100px]"
                />
              </div>
            </div>

            {/* Request Summary */}
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-3">Request Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="text-foreground font-medium w-24">Patient:</span>
                  <span className="text-muted-foreground">Robert Johnson</span>
                </div>
                <div className="flex">
                  <span className="text-foreground font-medium w-24">Care Type:</span>
                  <span className="text-primary">Medical Nurse</span>
                </div>
                <div className="flex">
                  <span className="text-foreground font-medium w-24">Duration:</span>
                  <span className="text-primary">Full-time</span>
                </div>
                <div className="flex">
                  <span className="text-foreground font-medium w-24">Start Date:</span>
                  <span className="text-primary">[Selected Date]</span>
                </div>
              </div>
            </div>

            <Button className="w-full mt-6 bg-destructive hover:bg-destructive/90 text-destructive-foreground">
              Confirm and Send Request
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
