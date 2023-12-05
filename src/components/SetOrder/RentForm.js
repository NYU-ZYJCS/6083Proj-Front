import React from 'react';
import {Button, Card, Form, Select, message} from "antd";
import {DatePicker} from "antd";
import dayjs from "dayjs";
import './SetOrderStyle.css';
import {useFetchVehicleList} from "./Hooks/useFetchOfficeList";
const {Option} = Select;

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





const RentForm = ({fetchData}) => {

    const [useDiffLoc, setUseDiffLoc] = React.useState(false);
    const {addressList, loadingAddress} = useFetchVehicleList();

    const items = [
        {
            name:  'officeID',
            label: '',
            colon: false,
            rules: [
                {
                    required: true,
                    message: 'Please select your pick up address'
                }
            ],
            component: (
                <Select
                    style={{width: 250}}
                    placeholder={`Select your pick up  address`}
                    loading={loadingAddress}
                    disabled={loadingAddress}
                >
                    {addressList.map((option, index) => {
                        const address = option?.address?.street + ' '
                            + option?.address?.city + ' ' + option?.address?.state + ' ' + option?.address?.zipCode;
                        return <Option value={option.officeID} key={index}>{address}</Option>
                        }
                    )}

                </Select>
            )
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
            name: ['rent', 'returnID'],
            label: '',
            colon: false,
            rules: [
                {
                    required: true,
                    message: 'Please select your return address'
                }
            ],
            component: (
                <Select
                    style={{width: 250}}
                    placeholder={`Select your drop off  address`}
                    loading={loadingAddress}
                    disabled={loadingAddress}
                >
                    {addressList.map((option, index) => {
                        return <Option value={option.value} key={index}>{option.name}</Option>
                    })}

                </Select>
            ),
            shouldRender: (useDiffLoc) => useDiffLoc,
        }

    ]

    const [form] = Form.useForm();
    const toggleDiffLoc = () => {
        setUseDiffLoc(!useDiffLoc);
    }

    const onFinish = () => {
        form.validateFields().then((values) => {
            fetchData(values);
        }).catch((info) => {
        });
    }
    return (
        <Card
            title="Set your rental order"
            className="rentForm"
        >
            <Form
                form={form}
                {...layout}
                name="rental-form"
                onFinish={searchVehicles}
            >
                {items.map((item, index) => {
                    const shouldRender = item.shouldRender ? item.shouldRender(useDiffLoc) : true;
                    return shouldRender && (
                        <Form.Item name={item.name} label={item.label} colon={item.colon} key={index}
                                   rules={item.rules}>
                            {item.component}
                        </Form.Item>
                    )
                })}
                <Form.Item>
                    <Button shape="round" onClick={toggleDiffLoc}>Different Pickup/Drop-off Address?</Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" shape="round" onClick={onFinish}>
                        Search Vehicles
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default RentForm;