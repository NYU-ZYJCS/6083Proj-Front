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
                                avatar={<img src={item.imgUrl} alt=""/>}
                                title={<a href="https://ant.design">{item.make}</a>}
                                description={'TBA'}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </React.StrictMode>
    )
}

export default VehicleDisplayCase;