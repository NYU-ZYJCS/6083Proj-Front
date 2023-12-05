export const fetchVehicleList = {
    "code": 200,
    "message": "success",
    "data": [
        {
            make: "Special",
            dailyRate: 20,
            description: 'Mystery Car Compact or Larger or Similar',
            imgUrl: 'https://ctimg-fleet.cartrawler.com/mystery/car/secondary.png?w=215&mark-align=center,middle&mark=https%3A%2F%2Fctimg-fleet.cartrawler.com%2Fmystery%2Fcar%2Fsecondary-paint.png%3Fbri%3D-18%26con%3D50%26monochrome%3DC6C6CC%26w%3D215',
            curOdometer: 100,
            overMileFee: 0.25,
        },
        {
            make: "Economy",
            dailyRate: 42,
            description: 'Kia Rio or Similar',
            imgUrl: 'https://www.avis.com/content/dam/cars/s/2021/kia/2021-kia-soul-s-5door-hatchback-white_featured.png',
            curOdometer: 100,
            overMileFee: 0.25,
        },
        {
            make: "Compact",
            dailyRate: 42,
            description: 'Kia Soul or Similar',
            imgUrl: 'https://ctimg-fleet.cartrawler.com/jeep/wrangler-sahara/secondary.png?w=215&mark-align=center,middle&mark=https%3A%2F%2Fctimg-fleet.cartrawler.com%2Fjeep%2Fwrangler-sahara%2Fsecondary-paint.png%3Fbri%3D-18%26con%3D50%26monochrome%3DC6C6CC%26w%3D215',
            overMileFee: 0.25,
        },
        {
            make: "Midsize",
            dailyRate: 24,
            description: 'Nissan Sentra or Similar',
            imgUrl: 'https://ctimg-fleet.cartrawler.com/mystery/car/secondary.png?w=215&mark-align=center,middle&mark=https%3A%2F%2Fctimg-fleet.cartrawler.com%2Fmystery%2Fcar%2Fsecondary-paint.png%3Fbri%3D-18%26con%3D50%26monochrome%3DC6C6CC%26w%3D215',
            overMileFee: 0.25,
        },
        {
            make: "Standard",
            dailyRate: 42,
            description: 'Toyota Camry or Similar',
            imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
            overMileFee: 0.25,
        }
    ]


}

export const fetchOfficeList = {
    "code": 200,
    "message": "success",
    "data": [
        {
            "officeID": 1,
            "phone": "555-0101",
            "address": {
                "addressID": 1,
                "street": "123 Main St",
                "city": "Anytown",
                "state": "NY",
                "zipCode": "12345"
            }
        },
        {
            "officeID": 2,
            "phone": "555-0102",
            "address": {
                "addressID": 2,
                "street": "456 Maple Dr",
                "city": "Springfield",
                "state": "IL",
                "zipCode": "23456"
            }
        },
        {
            "officeID": 3,
            "phone": "555-0103",
            "address": {
                "addressID": 3,
                "street": "789 Oak Ln",
                "city": "Smallville",
                "state": "OH",
                "zipCode": "34567"
            }
        },
        {
            "officeID": 4,
            "phone": "555-0104",
            "address": {
                "addressID": 4,
                "street": "101 Pine Rd",
                "city": "Centerville",
                "state": "CA",
                "zipCode": "45678"
            }
        },
        {
            "officeID": 5,
            "phone": "555-0105",
            "address": {
                "addressID": 5,
                "street": "202 Birch Blvd",
                "city": "Lakeview",
                "state": "MI",
                "zipCode": "56789"
            }
        }
    ]
}

