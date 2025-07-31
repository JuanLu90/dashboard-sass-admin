def get_plans_data():
    return {
        "plans": [
            {
                "name": "Starter",
                "price": 99,
                "period": "yr",
                "users": 1,
                "description": "If you are a small business, please select this plan",
                "features": {
                    "Alias record": True,
                    "Anycast DNS": True,
                    "Full API access": False,
                    "Multiple-layered DoS defense": False,
                },
            },
            {
                "name": "Pro",
                "price": 299,
                "period": "yr",
                "users": 5,
                "description": "If you are a small business, please select this plan",
                "features": {
                    "Alias record": True,
                    "Anycast DNS": True,
                    "Full API access": True,
                    "Multiple-layered DoS defense": False,
                },
            },
            {
                "name": "Enterprise",
                "price": 599,
                "period": "yr",
                "users": 20,
                "description": "If you are a small business, please select this plan",
                "features": {
                    "Alias record": True,
                    "Anycast DNS": True,
                    "Full API access": True,
                    "Multiple-layered DoS defense": True,
                },
            },
        ],
        "featureList": [
            "Alias record",
            "Anycast DNS",
            "Full API access",
            "Multiple-layered DoS defense",
        ],
    }
