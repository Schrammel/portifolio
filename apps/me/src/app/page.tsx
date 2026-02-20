import { type Metadata } from "next";

import { CareerDashboard } from "~/components/dashboard/career-dashboard";

export const metadata: Metadata = {
  title: "Career Dashboard",
  description:
    "Single-screen read-only career dashboard with timeline, skills visualization, Web3 highlights, and open source contributions.",
};

export default function HomePage() {
  return <CareerDashboard />;
}
