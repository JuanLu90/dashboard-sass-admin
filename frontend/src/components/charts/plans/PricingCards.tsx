import { plansPricing } from "../../../data/plans/plansPricingMock";
import { Button } from "@/components/ui/button";
import { Medal, Award, Trophy } from "lucide-react";

const icons = {
  Starter: <Award size={48} className="text-indigo-500 mb-4" />,
  Pro: <Medal size={48} className="text-indigo-500 mb-4" />,
  Enterprise: <Trophy size={48} className="text-indigo-500 mb-4" />,
};

export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {plansPricing.map((plan) => (
        <div
          key={plan.name}
          className="bg-gray-900 rounded-xl shadow-md border border-gray-700 flex flex-col items-center p-8"
        >
          {icons[plan.name as keyof typeof icons]}
          <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
          <div className="text-gray-400 mb-4 text-center">{plan.description}</div>
          <div className="text-3xl font-bold mb-2 text-white">
            ${plan.price}
            <span className="text-base font-normal text-gray-400">/{plan.period}</span>
          </div>
          <div className="text-gray-400 mb-6">
            {plan.users} User{plan.users > 1 ? "s" : ""}, Billed Yearly
          </div>
          <Button
            className="w-full mt-auto bg-indigo-600 text-white hover:bg-indigo-700"
            variant="default"
          >
            Select Plan
          </Button>
        </div>
      ))}
    </div>
  );
}
