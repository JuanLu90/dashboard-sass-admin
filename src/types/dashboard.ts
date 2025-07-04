export type ActiveUserDay = {
  date: string;
  users: number;
};

export type LineChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    tension: number;
  }[];
};

export type DashboardTableGrid = {
  recentUsers: [
    {
      id: number;
      name: string;
      email: string;
      signup: string;
      status: string;
      plan: string;
      avatar: string;
    }
  ];
  recentSubscriptions: [
    {
      id: number;
      user: string;
      plan: string;
      startDate: string;
      status: string;
      avatar: string;
    }
  ];
  recentIncidents: [
    {
      id: number;
      user: string;
      subject: string;
      status: string;
      priority: string;
      avatar: string;
    }
  ];
};

export type DashboardKpisSet = {
  title: string;
  value: number;
  icon: string;
  change: number;
  caption: string;
  prefix?: string;
  suffix?: string;
};

export type PlansDistributionDataset = {
  data: number[];
  backgroundColor: string[];
  borderWidth: number;
};

export type PlansDistributionChartData = {
  labels: string[];
  datasets: PlansDistributionDataset[];
};

export type RevenuePerMonth = {
  month: string;
  revenue: number;
};

export type RevenueBarChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderRadius: number;
  }[];
};
