import React from 'react';
import {List} from "antd";
import './SetOrderStyle.css';



const VehicleDisplayCase = ({vehicleList, vehicleLoading}) => {
    return (
        <React.StrictMode>
            <div className="vehicleDisplayCase">
                <h1>Choose a car</h1>
                <List
                    loading={vehicleLoading}
                    itemLayout="vertical"
                    dataSource={vehicleList}
                    renderItem = {(item, index) => (
                        <List.Item
                            key={index}
                            extra={
                            <>
                                <h3>${`${item.dailyRate}/day`}</h3>
                                ${`${item.overMileFee}/mile over 500 miles`}
                            </>
                            }
                        >
                            <List.Item.Meta
                                avatar={<img src={item.icon_url} alt=""/>}
                                title={<a href="https://ant.design">{item.type}</a>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </React.StrictMode>
    )
}

export default VehicleDisplayCase;