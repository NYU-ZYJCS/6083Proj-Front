import React from 'react';
import RentForm from "./RentForm";
import VehicleDisplayCase from "./VehicleDisplayCase";
import {Flex} from "antd";
import DefaultDisplayCase from "./DefaultDisplayCase";
import {useVehicleData} from "./Hooks/useVehicleData";
const SetOrder = () => {
    const { showResult, loadingVehicle, vehicleList, fetchData } = useVehicleData();
    return (
        <div className='main-content'>
                <Flex justify={"start"} aligh="start" style={{paddingTop: 25}}>
                    <RentForm fetchData={fetchData}/>
                    {showResult ? <VehicleDisplayCase vehicleList = {vehicleList} vehicleLoading = {loadingVehicle}/> : <DefaultDisplayCase/>}
                </Flex>
        </div>
    )
}

export default SetOrder;