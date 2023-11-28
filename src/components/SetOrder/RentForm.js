import React from 'react';
import {Button, Card, Form, Select} from "antd";
import {DatePicker} from "antd";
import dayjs from "dayjs";
import './SetOrderStyle.css';

const {RangePicker} = DatePicker;
const layout = {
    labelCol: {
        span: 1,
    },
    wrapperCol: {
        span: 20,
    },
};

const searchVehicles = (values) => {
    console.log(values);
}

const disabledPastDays = (current) => {
    // Disable all days before today
    return current && current < dayjs().startOf('day');
};

const AddressSelector = ({usage}) => {
    return (
        <Select
            showSearch
            style={{width: 250}}
            placeholder={`Select your ${usage}  address`}
            optionFilterProp="children"
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
                {
                    value: '1',
                    label: 'Not Identified',
                },
                {
                    value: '2',
                    label: 'Closed',
                },
                {
                    value: '3',
                    label: 'Communicated',
                },
                {
                    value: '4',
                    label: 'Identified',
                },
                {
                    value: '5',
                    label: 'Resolved',
                },
                {
                    value: '6',
                    label: 'Cancelled',
                },
            ]}
        />
    )

}


const items = [
    {
        name: ['rent', 'pickUpAddress'],
        label: '',
        colon: false,
        rules: [
            {
                required: true,
                message: 'Please select your pick up address'
            }
        ],
        component: <AddressSelector usage="pick up"/>
    },
    {
        name: ['rent', 'rentRange'],
        label: '',
        colon: false,
        rules: [
            {
                required: true,
                message: 'Please select your rent range'
            }
        ],
        component: <RangePicker disabledDate={disabledPastDays}/>,
    },
    {
        name: ['rent', 'returnAddress'],
        label: '',
        colon: false,
        rules: [
            {
                required: true,
                message: 'Please select your return address'
            }
        ],
        component: <AddressSelector usage="drop off"/>,
        shouldRender: (useDiffLoc) => useDiffLoc,
    }

]




const RentForm = () => {

    let [useDiffLoc, setUseDiffLoc] = React.useState(false);
    const toggleDiffLoc = () => {
        setUseDiffLoc(!useDiffLoc);
    }
    console.log(items[2]);
    return (
        <Card
            title="Set your rental order"
            className="rentForm"
        >
            <Form
                {...layout}
                name="rental-form"
                onFinish={searchVehicles}
            >
                {items.map((item, index) => {
                    const shouldRender = item.shouldRender ? item.shouldRender(useDiffLoc) : true;
                    return shouldRender && (
                        <Form.Item name={item.name} label={item.label} colon={item.colon} key={index} rules={item.rules}>
                            {item.component}
                        </Form.Item>
                    )
                })}
            </Form>
            <Button shape="round" onClick={toggleDiffLoc} >Different Pickup/Drop-off Address?</Button>
        </Card>
    )
}

export default RentForm;