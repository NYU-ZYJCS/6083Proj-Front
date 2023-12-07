import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Radio, Checkbox, Card, Row, Col, message } from 'antd';
import axios from 'axios';
import './AuthForm.css'

const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(60);
    const [isCountdownActive, setIsCountdownActive] = useState(false);
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const response = await api.post('/register', values)
        if
            (response.data.code === 200) {
            // Handle successful response, e.g., show success message
            message.success("Register Succeeded");

            navigate('/login')
        } else {

            message.error(response.data.message);
        }

    };

    const api = axios.create({
        baseURL: 'http://localhost:8080/api/v1/user',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
        },
    };

    const handleSendCode = async () => {
        try {
            // Validate email format
            const email = form.getFieldValue('email');
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                message.error('Please enter a valid email address.');
                return;
            }

            // TODO: Add axios post request to send verification code
            const response = await api.get('/sendMsg?email=' + email);

            if
                (response.data.code === 200) {
                // Handle successful response, e.g., show success message
                // Start the countdown timer
                setIsCountdownActive(true);
                const interval = setInterval(() => {
                    setCountdown((prev) => prev - 1);
                }, 1000);

                // Set a timeout to stop the countdown after 60 seconds
                setTimeout(() => {
                    setIsCountdownActive(false);
                    setCountdown(60);
                    clearInterval(interval);
                }, 60000);

                message.success('Verification code sent to your email.');
            } else {
                message.error(response.data.message);
            }



        } catch (error) {
            message.error('Failed to send verification code. Please try again.');
        }
    };


    return (<Row justify="center" align="middle" style={{ minHeight: '100vh', marginTop: - 100 }}>
        <Col span={8}>
            {/* Left Column */}
            <div style={{ marginTop: -300 }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>World On Wheels</h1>
                <p>
                    WOW (World On Wheels) is a car rental company.
                </p>
                <p>
                    WOW Car Rental makes it a breeze to hit the road.
                </p>
                <p>
                    Find us in cities, towns, and airports all over the U.S.
                    for quick, easy,
                </p>
                <p>
                    and friendly car rental services.
                </p>
            </div>
        </Col>
        <Col span={8}>
            <Card title="Registration Form" bordered={true} className="form-register-card">
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '86',
                    }}
                    style={{ maxWidth: 600 }}
                    scrollToFirstError
                >

                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                            { required: true, message: 'Please input your username!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Row gutter={8}>
                        <Col span={16}>
                            <Form.Item
                                name="email"
                                label="Email"
                                style={{ marginLeft: 100 }}
                                rules={[
                                    { type: 'email', message: 'Please enter a valid E-mail!' },
                                    { required: true, message: 'Please input your E-mail!' },
                                ]}
                            >
                                <Input style={{ width: 220 }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    onClick={handleSendCode}
                                    disabled={isCountdownActive}
                                    style={{ width: '100%', marginLeft: 35 }}
                                >
                                    {isCountdownActive ? `${countdown}s` : 'Send Code'}
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        name="code"
                        label="Verification Code"
                        rules={[{ required: true, message: 'Please input the verification code!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            { required: true, message: 'Please input your phone number!' },
                            { pattern: /^[0-9]{10}$/, message: 'Please enter a valid phone number (10 digits only).' },
                        ]}
                    >
                        <Input />
                    </Form.Item>



                    <Form.Item
                        name="addressStreet"
                        label="Address Street"
                        rules={[{ required: true, message: 'Please input the Address Street!' }]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        name="addressCity"
                        label="Address City"
                        rules={[{ required: true, message: 'Please input the Address City!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="addressState"
                        label="Address State"
                        rules={[{ required: true, message: 'Please input the Address State!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="addressZipCode"
                        label="Address zipCode"
                        rules={[{ required: true, message: 'Please input the Address zipCode!' }]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="User Type"
                        name="userType"
                        initialValue="1" // Default value (1 for personal user)
                    >
                        <Radio.Group>
                            <Radio value="1">Personal User</Radio>
                            <Radio value="2">Company User</Radio>
                        </Radio.Group>
                    </Form.Item>




                    <Form.Item
                        name="registName"
                        label="Corporate Name"
                    >
                        <Input />
                    </Form.Item>



                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            { validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')) },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Col>
    </Row >
    );
};

export default Register;
