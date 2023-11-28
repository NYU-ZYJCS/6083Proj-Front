import React from 'react';
import RentForm from "./RentForm";
import VehicleDisplayCase from "./VehicleDisplayCase";
import {Flex} from "antd";
const SetOrder = () => {
    return (
        <React.StrictMode>
            <Flex justify={"start"} aligh="start" style={{paddingTop: 25}} gap="large">
                <RentForm/>
                <VehicleDisplayCase/>
            </Flex>
        </React.StrictMode>
    )
}

export default SetOrder;