import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Row, Col, message } from 'antd';
import axios from 'axios';
import './AuthForm.css';

const Reset = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(60);
    const [isCountdownActive, setIsCountdownActive] = useState(false);

    const api = axios.create({
        baseURL: 'http://localhost:8080/api/v1/user',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const onFinish = async (values) => {
        try {
            // TODO: Add axios post request to your backend endpoint
            const response = await api.post('/reset', {
                email: values.email,
                code: values.code,
                newPassword: values.newPassword,
            });
            if
                (response.data.code === 200) {
                // Handle successful response, e.g., show success message
                message.success("Reset Succeeded");
                navigate("/login")
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            // Handle error, e.g., show error message
            message.error("Reset Error");
        }
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
            const response = await api.get('/reset/sendMsg?email=' + email);

            if
                (response.data.code === 200) {
                // Handle successful response, e.g., show success message
                message.success("Code Sent Successfully");
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

            } else {

                message.error(response.data.message);
            }

        } catch (error) {
            message.error('Failed to send verification code. Please try again.');
        }
    };

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh', marginTop: - 100 }}>
            <Col span={8}>
                {/* Left Column */}
                <div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Your Large Text Title</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac urna eu felis dapibus
                        condimentum id in libero. Vivamus a fringilla elit, eget fermentum massa. Proin eu
                        ullamcorper erat, in fermentum justo.
                    </p>
                </div>
            </Col>
            <Col span={8}>
                <Card title="Reset Password" bordered={true} className="form-reset-card">
                    <Form
                        form={form}
                        name="reset"
                        onFinish={onFinish}
                        style={{ maxWidth: 600 }}
                        scrollToFirstError
                    >
                        <Row gutter={8}>
                            <Col span={16}>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        { type: 'email', message: 'Please enter a valid E-mail!' },
                                        { required: true, message: 'Please input your E-mail!' },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        onClick={handleSendCode}
                                        disabled={isCountdownActive}
                                        style={{ width: '100%' }}
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
                            name="newPassword"
                            label="New Password"
                            rules={[{ required: true, message: 'Please input your new password!' }]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm New Password"
                            dependencies={['newPassword']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your new password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('newPassword') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Reset Password
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row >
    );
};

export default Reset;
