import PricingCards from "../../components/charts/PricingCards";
import PricingFeatureComparison from "../../components/charts/PricingFeatureComparison";

export default function PlansPricingPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <PricingCards />
      <PricingFeatureComparison />
    </div>
  );
}
