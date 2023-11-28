import React from 'react';
import {Card, Flex} from "antd";
import {travelEasyContent, flexibleBookingContent, carRentEasyContent} from '../../static/textContent';
import './SetOrderStyle.css';
const DefaultDisplayCase = () => {
    return (
        <Flex justify="space-around" className="default-display-case" wrap="wrap" gap="large" >
            <Card
                hoverable
                cover={<img src="/SetOrder/travel_easy.svg" alt="Travel Easy" />}
                className="default-display-case__card"
            >
                <Card.Meta title="Travel Easy" description={travelEasyContent} />
            </Card>
            <Card
                hoverable
                cover={<img src="/SetOrder/rental_made_easy.png" alt="Car Rent Easy" />}
                className="default-display-case__card"
            >
                <Card.Meta title="Car Rent Easy" description={carRentEasyContent}/>
            </Card>
            <Card
                hoverable
                cover={<img src="/SetOrder/flexible_booking.png" alt="Flexible Booking" />}
                className="default-display-case__card"
            >
                <Card.Meta title="Flexible Booking" description={flexibleBookingContent}/>
            </Card>
        </Flex>
    )
}

export default DefaultDisplayCase;