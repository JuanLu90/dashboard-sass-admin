from typing import List, Dict

def get_kpis() -> List[Dict]:
    return [
        {
            "title": "Active Users",
            "value": 2382,
            "icon": "users",
            "change": -3.65,
            "caption": "Since last month",
        },
        {
            "title": "New Subscriptions",
            "value": 154,
            "icon": "plus-circle",
            "change": 6.21,
            "caption": "Since last month",
        },
        {
            "title": "Revenue",
            "value": 21300,
            "icon": "dollar-sign",
            "change": 4.83,
            "caption": "Since last month",
            "prefix": "$",
        },
        {
            "title": "Retention Rate",
            "value": 92.4,
            "icon": "refresh-cw",
            "change": 1.2,
            "caption": "Since last month",
            "suffix": "%",
        },
    ]

def get_tables():
    return {
        "recentUsers": [
            {
                "id": 1,
                "name": "Alice Johnson",
                "email": "alice@email.com",
                "signup": "2024-06-01",
                "status": "Active",
                "plan": "Pro",
                "avatar": "https://ui-avatars.com/api/?name=Alice+Johnson",
            },
            {
                "id": 2,
                "name": "Bob Smith",
                "email": "bob@email.com",
                "signup": "2024-05-28",
                "status": "Pending",
                "plan": "Basic",
                "avatar": "https://ui-avatars.com/api/?name=Bob+Smith",
            },
            {
                "id": 3,
                "name": "Carla Lopez",
                "email": "carla@email.com",
                "signup": "2024-05-26",
                "status": "Closed",
                "plan": "Enterprise",
                "avatar": "https://ui-avatars.com/api/?name=Carla+Lopez",
            },
        ],
        "recentSubscriptions": [
            {
                "id": 1,
                "user": "Elena Martín",
                "plan": "Pro",
                "startDate": "2024-06-22",
                "status": "Active",
                "avatar": "https://ui-avatars.com/api/?name=Elena+Martín",
            },
            {
                "id": 2,
                "user": "David Lee",
                "plan": "Basic",
                "startDate": "2024-06-20",
                "status": "Pending",
                "avatar": "https://ui-avatars.com/api/?name=David+Lee",
            },
            {
                "id": 3,
                "user": "Isabel Pérez",
                "plan": "Enterprise",
                "startDate": "2024-06-18",
                "status": "Active",
                "avatar": "https://ui-avatars.com/api/?name=Isabel+Pérez",
            },
        ],
        "recentIncidents": [
            {
                "id": 1,
                "user": "Karla Fernández",
                "subject": "Login issue",
                "status": "Open",
                "priority": "High",
                "avatar": "https://ui-avatars.com/api/?name=Karla+Fernández",
            },
            {
                "id": 2,
                "user": "Luis Navarro",
                "subject": "Payment not processed",
                "status": "Closed",
                "priority": "Medium",
                "avatar": "https://ui-avatars.com/api/?name=Luis+Navarro",
            },
            {
                "id": 3,
                "user": "María Gómez",
                "subject": "API downtime",
                "status": "Open",
                "priority": "Critical",
                "avatar": "https://ui-avatars.com/api/?name=María+Gómez",
            },
        ],
    }

def get_plans_distribution():
    return {
        "plans": [
            {"plan": "Free", "count": 730},
            {"plan": "Basic", "count": 560},
            {"plan": "Pro", "count": 940},
            {"plan": "Enterprise", "count": 152},
        ]
    }

def get_revenue():
    return [
        { "month": "Jul", "revenue": 19500 },
        { "month": "Aug", "revenue": 20800 },
        { "month": "Sep", "revenue": 22000 },
        { "month": "Oct", "revenue": 19800 },
        { "month": "Nov", "revenue": 21300 },
        { "month": "Dec", "revenue": 23200 },
        { "month": "Jan", "revenue": 24500 },
        { "month": "Feb", "revenue": 23800 },
        { "month": "Mar", "revenue": 25300 },
        { "month": "Apr", "revenue": 25900 },
        { "month": "May", "revenue": 26700 },
        { "month": "Jun", "revenue": 27300 },
    ];
