import React from 'react';
import RentForm from "./RentForm";
import VehicleDisplayCase from "./VehicleDisplayCase";
import {Flex} from "antd";
import DefaultDisplayCase from "./DefaultDisplayCase";
const SetOrder = () => {
    const [useShowResult, setUseShowResult] = React.useState(true);
    return (
        <div className='main-content'>
            <React.StrictMode>
                <Flex justify={"start"} aligh="start" style={{paddingTop: 25}}>
                    <RentForm/>
                    {useShowResult ? <VehicleDisplayCase/> : <DefaultDisplayCase/>}
                </Flex>
            </React.StrictMode>
        </div>
    )
}

export default SetOrder;