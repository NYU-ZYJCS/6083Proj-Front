import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col, Radio, Card, message } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import './AuthForm.css';

const Login = () => {
    const api = axios.create({
        baseURL: 'http://localhost:8080/api/v1/user',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {

            // TODO: Add axios post request to your backend endpoint
            const response = await api.post('/login', {
                username: values.username,
                password: values.password,
                userType: values.userType,
            });
            if
                (response.data.code === 200) {
                // Handle successful response, e.g., show success message
                message.success("Login Succeeded");
                sessionStorage.setItem('token', response.data.token);
                navigate('/');
                window.location.reload();
            } else {

                message.error(response.data.message);
            }


        } catch (error) {
            // Handle error, e.g., show error message
            message.error('Failed to reset password. Please try again.');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh', marginTop: - 100 }}>
            <Col span={8}>
                {/* Left Column */}
                <div>
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
                <Card title="Login" bordered={true} className="form-login-card">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 800,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
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
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            {/* Add Link to /reset with text "Forget Password?" */}
                            <Link to="/reset">Forget Password?</Link>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row >
    );
};

export default Login;
