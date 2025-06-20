import HomeLineChart from "@/components/charts/HomeLineChart";
import HomeBarChart from "@/components/charts/HomeBarChart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Sass Admin",
  description: "Dashboard Sass Admin",
};

export default function Home() {
  return (
    <div className="flex gap-6">
      <div className="min-w-0 w-full h-80">
        <HomeLineChart />
      </div>
      <div className="min-w-0 w-full h-80">
        <HomeBarChart />
      </div>
    </div>
  );
}
