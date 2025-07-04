import { randomDelay } from "@/lib/utils";

export async function GET() {
  await new Promise((r) => setTimeout(r, randomDelay()));

  const recentGridData = {
    recentUsers: [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@email.com",
        signup: "2024-06-01",
        status: "Active",
        plan: "Pro",
        avatar: "https://ui-avatars.com/api/?name=Alice+Johnson",
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob@email.com",
        signup: "2024-05-28",
        status: "Pending",
        plan: "Basic",
        avatar: "https://ui-avatars.com/api/?name=Bob+Smith",
      },
      {
        id: 3,
        name: "Carla Lopez",
        email: "carla@email.com",
        signup: "2024-05-26",
        status: "Active",
        plan: "Enterprise",
        avatar: "https://ui-avatars.com/api/?name=Carla+Lopez",
      },
    ],
    recentSubscriptions: [
      {
        id: 1,
        user: "Elena Martín",
        plan: "Pro",
        startDate: "2024-06-22",
        status: "Active",
        avatar: "https://ui-avatars.com/api/?name=Elena+Martín",
      },
      {
        id: 2,
        user: "David Lee",
        plan: "Basic",
        startDate: "2024-06-20",
        status: "Pending",
        avatar: "https://ui-avatars.com/api/?name=David+Lee",
      },
      {
        id: 3,
        user: "Isabel Pérez",
        plan: "Enterprise",
        startDate: "2024-06-18",
        status: "Active",
        avatar: "https://ui-avatars.com/api/?name=Isabel+Pérez",
      },
    ],

    recentIncidents: [
      {
        id: 1,
        user: "Karla Fernández",
        subject: "Login issue",
        status: "Open",
        priority: "High",
        avatar: "https://ui-avatars.com/api/?name=Karla+Fernández",
      },
      {
        id: 2,
        user: "Luis Navarro",
        subject: "Payment not processed",
        status: "Closed",
        priority: "Medium",
        avatar: "https://ui-avatars.com/api/?name=Luis+Navarro",
      },
      {
        id: 3,
        user: "María Gómez",
        subject: "API downtime",
        status: "Open",
        priority: "Critical",
        avatar: "https://ui-avatars.com/api/?name=María+Gómez",
      },
    ],
  };

  return Response.json(recentGridData);
}
