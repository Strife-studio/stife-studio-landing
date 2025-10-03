"use client";

import { Footer } from "@/widgets/footer/ui/footer";
import { ContentSection } from "@/widgets/overlap/ui/contentSection";
import { OverlapSection } from "@/widgets/overlap/ui/overlapSection";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] space-y-10 md:space-y-20">
      <OverlapSection />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Dashboard;
