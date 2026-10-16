
const kpiStats = [
  {
    id: "active-shipments",
    label: "Active Shipments",
    value: "1,284",
    change: "+12.5%",
    trend: "up",
    icon: "Truck",
  },
  {
    id: "on-time-rate",
    label: "On-Time Rate",
    value: "94.2%",
    change: "-1.8%",
    trend: "down",
    icon: "Clock",
  },
  {
    id: "avg-transit-time",
    label: "Avg. Transit Time",
    value: "3.5 days",
    change: "-0.4d",
    trend: "up",
    icon: "TrendingUp",
  },
  {
    id: "revenue-mtd",
    label: "Revenue MTD",
    value: "$2.4M",
    change: "+8.7%",
    trend: "up",
    icon: "DollarSign",
  }
];

const volumeData = [
    {
        day: "Mon",
        shipments: 150,
        returns: 5
    },
    {
        day: "Tue",
        shipments: 230,
        returns: 10
    },
    {
        day: "Wed",
        shipments: 180,
        returns: 15
    },
    {
        day: "Thu",
        shipments: 250,
        returns: 15
    },
    {
        day: "Fri",
        shipments: 170,
        returns: 25
    },
    {
        day: "Sat",
        shipments: 200,
        returns: 20
    },
    {
        day: "Sun",
        shipments: 190,
        returns: 25
    }
]

const manifestData = [
    {
        id: "SHP-4821",
        origin: "Aba",
        destination: "Lagos",
        status: "Delivered",
        eta: "19/08/2025",
        weight: "5kg",
    },
    {
        id: "SHP-4822",
        origin: "PH",
        destination: "Enugu",
        status: "In Transit",
        eta: "3d 6h",
        weight: "1,240kg"
    },
    {
        id: "SHP-4823",
        origin: "Lagos",
        destination: "PH",
        status: "Delivered",
        eta: "01/01/2026",
        weight: "560kg",
    },
    {
        id: "SHP-4824",
        origin: "Gboko",
        destination: "Enugu",
        status: "Delayed",
        eta: "Tomorrow",
        weight: "2,240kg"
    },
    {
        id: "SHP-4825",
        origin: "Abuja",
        destination: "Jos",
        status: "Processing",
        eta: "4d 4h",
        weight: "1,200kg"
    },
    {
        id: "SHP-4826",
        origin: "Kaduna",
        destination: "PH",
        status: "Delivered",
        eta: "01/08/2026",
        weight: "560kg",
    },
]

export { kpiStats, volumeData, manifestData };