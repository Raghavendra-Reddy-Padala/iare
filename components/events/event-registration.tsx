// components/events/event-registration.tsx
"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { GL } from "../gl";
import { Pill } from "../pill";
import Link from "next/link";
import { Button } from "../ui/button";

interface EventRegistrationProps {
  event: any;
}

export default function EventRegistration({ event }: EventRegistrationProps) {
  const [hovering, setHovering] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get team size limits from the new teamSize object
  const teamSizeLimits = event.teamSize || { min: 1, max: 1 };
  
  const [teamMemberCount, setTeamMemberCount] = useState(teamSizeLimits.min);

  // Initialize formData with correct team member array
  const [formData, setFormData] = useState(() => ({
    teamLeader: {
      name: "",
      college: "",
      rollNumber: "",
      email: "",
      phone: ""
    },
    teamMembers: Array(teamSizeLimits.min - 1).fill(null).map(() => ({
      name: "", 
      rollNumber: "" 
    }))
  }));
  
  // Update team members array when teamMemberCount changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      teamMembers: Array(teamMemberCount - 1).fill(null).map((_, index) => {
        const existingMember = prev.teamMembers[index] || {};
        return { 
          name: existingMember.name || "", 
          rollNumber: existingMember.rollNumber || "" 
        };
      })
    }));
  }, [teamMemberCount]);

  const handleTeamSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(e.target.value);
    setTeamMemberCount(newSize);
  };

  const handleLeaderChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      teamLeader: { ...prev.teamLeader, [field]: value }
    }));
  };

  const handleMemberChange = (index: number, field: string, value: string) => {
    setFormData(prev => {
      const newMembers = [...prev.teamMembers];
      newMembers[index] = { ...newMembers[index], [field]: value };
      return { ...prev, teamMembers: newMembers };
    });
  };

  const validateForm = () => {
    const { teamLeader, teamMembers } = formData;
    
    if (!teamLeader.name || !teamLeader.college || !teamLeader.rollNumber || 
        !teamLeader.email || !teamLeader.phone) {
      alert("Please fill all team leader details");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(teamLeader.email)) {
      alert("Please enter a valid email address");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(teamLeader.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return false;
    }

    for (let i = 0; i < teamMembers.length; i++) {
      if (!teamMembers[i].name || !teamMembers[i].rollNumber) {
        alert(`Please fill details for Team Member ${i + 1}`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Save to Firebase - using only event.title (without tagline)
      const registrationData = {
        eventId: event.id,
        eventTitle: event.title, // This now contains only the event name
        eventCategory: event.category,
        timestamp: new Date().toISOString(),
        teamSize: teamMemberCount,
        teamSizeLimits: teamSizeLimits,
        teamLeader: formData.teamLeader,
        teamMembers: formData.teamMembers,
        registrationFee: parseFloat(event.registrationFee) || 0,
        paymentStatus: "pending",
        paymentCompleted: false,
        registrationStatus: "pending"
      };

      const docRef = await addDoc(collection(db, "registrations"), registrationData);
      console.log("Registration saved with ID:", docRef.id);
      
      // Redirect to payment
      window.location.href = "https://www.district.in/events/consortium-25-oct31-2025-buy-tickets";
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("Failed to submit registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Format team size display
  const getTeamSizeDisplay = () => {
    if (teamSizeLimits.min === teamSizeLimits.max) {
      return `${teamSizeLimits.min} ${teamSizeLimits.min === 1 ? 'member' : 'members'}`;
    }
    return `${teamSizeLimits.min}-${teamSizeLimits.max} members`;
  };

  return (
    <div className="relative min-h-screen py-35 px-4">
      <GL hovering={hovering} />
      
      <div className="container mx-auto relative z-10 max-w-4xl">
        <Link 
          href={`/events/${event.id}`}
          className="inline-block mb-8 font-mono text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          ← Back to Event Details
        </Link>

        {/* Event Info Header */}
        <div 
          className="mb-12 border border-foreground/20 p-8 bg-foreground/5"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <Pill className="mb-4">{event.category}</Pill>
          <h1 className="text-4xl sm:text-5xl font-sentient font-extrabold mb-2">
            Register for {event.title}
          </h1>
          {event.tagline && (
            <p className="text-xl text-foreground/70 mb-4 italic">
              {event.tagline}
            </p>
          )}
          <div className="font-mono text-sm text-foreground/60 space-y-1">
            <div>Team Size: {getTeamSizeDisplay()}</div>
            <div>Registration Fee: ₹{event.registrationFee}</div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="space-y-8">
          
          {/* Team Size Selection */}
          <section 
            className="border border-foreground/20 p-8"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <Pill className="mb-6">TEAM SIZE</Pill>
            {teamSizeLimits.min !== teamSizeLimits.max ? (
              <div className="flex items-center gap-4">
                <label className="font-mono text-sm text-foreground/80">
                  Number of Members:
                </label>
                <select
                  title="Team Size Selector"
                  value={teamMemberCount}
                  onChange={handleTeamSizeChange}
                  className="bg-background border border-foreground/20 px-4 py-2 font-mono text-sm focus:outline-none focus:border-foreground/40"
                >
                  {Array.from(
                    { length: teamSizeLimits.max - teamSizeLimits.min + 1 },
                    (_, i) => teamSizeLimits.min + i
                  ).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            ) : (
              <p className="font-mono text-base text-foreground/80">
                Team Size is fixed at {teamSizeLimits.min} member{teamSizeLimits.min > 1 ? 's' : ''}.
              </p>
            )}
          </section>

          {/* Team Leader Details */}
          <section 
            className="border border-foreground/20 p-8"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <Pill className="mb-6">TEAM LEADER</Pill>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-sm text-foreground/60 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.teamLeader.name}
                  onChange={(e) => handleLeaderChange("name", e.target.value)}
                  className="w-full bg-background border border-foreground/20 px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/40"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-foreground/60 mb-2">
                  College Name *
                </label>
                <input
                  type="text"
                  value={formData.teamLeader.college}
                  onChange={(e) => handleLeaderChange("college", e.target.value)}
                  className="w-full bg-background border border-foreground/20 px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/40"
                  placeholder="Your college"
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-foreground/60 mb-2">
                  Roll Number *
                </label>
                <input
                  type="text"
                  value={formData.teamLeader.rollNumber}
                  onChange={(e) => handleLeaderChange("rollNumber", e.target.value)}
                  className="w-full bg-background border border-foreground/20 px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/40"
                  placeholder="Your roll number"
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-foreground/60 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.teamLeader.email}
                  onChange={(e) => handleLeaderChange("email", e.target.value)}
                  className="w-full bg-background border border-foreground/20 px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/40"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-mono text-sm text-foreground/60 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.teamLeader.phone}
                  onChange={(e) => handleLeaderChange("phone", e.target.value)}
                  className="w-full bg-background border border-foreground/20 px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/40"
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>
          </section>

          {/* Team Members Details */}
          {teamMemberCount > 1 && (
            <section 
              className="border border-foreground/20 p-8 bg-foreground/5"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <Pill className="mb-6">TEAM MEMBERS</Pill>
              
              <div className="space-y-6">
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="border border-foreground/10 p-6">
                    <h3 className="font-sentient text-xl font-bold mb-4">
                      Member {index + 1}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-sm text-foreground/60 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                          className="w-full bg-background border border-foreground/20 px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/40"
                          placeholder="Member's full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-sm text-foreground/60 mb-2">
                          Roll Number *
                        </label>
                        <input
                          type="text"
                          value={member.rollNumber}
                          onChange={(e) => handleMemberChange(index, "rollNumber", e.target.value)}
                          className="w-full bg-background border border-foreground/20 px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/40"
                          placeholder="Member's roll number"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Submit Button */}
          <div className="text-center space-y-4">
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="px-12 py-6 text-lg"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {loading ? "[Processing...]" : "[Proceed to Payment]"}
            </Button>
            
            <p className="font-mono text-xs text-foreground/60">
              After clicking submit, you'll be redirected to the payment page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}