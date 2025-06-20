import HomeLineChart from "@/components/charts/HomeLineChart";
import HomeBarChart from "@/components/charts/HomeBarChart";

export default function Home() {
  return (
    <div className="flex w-full gap-6">
      <div className="flex-1 min-w-0">
        <HomeLineChart />
      </div>
      <div className="flex-1 min-w-0">
        <HomeBarChart />
      </div>
    </div>
  );
}
