import PricingCards from "../../components/charts/PricingCards";
import PricingFeatureComparison from "../../components/charts/PricingFeatureComparison";

export default function PlansPricingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Plans</h1>
      <div className="p-4 max-w-6xl mx-auto">
        <PricingCards />
        <PricingFeatureComparison />
      </div>
    </div>
  );
}
