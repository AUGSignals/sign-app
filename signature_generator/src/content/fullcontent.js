import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import FullSignature from './fullsignature';
import { Layout, Row, Col } from "antd";

const FullContent = () => {
    const [form] = Form.useForm();

    const [fullname, setFullName] = useState("");
    const [designation, setDesignation] = useState("");
    const [extension, setExtension] = useState("");
    const [email, setEmail] = useState("");

    const onChange = (values) => {
        setFullName(values.fullname);
        setDesignation(values.designation);
        setExtension(values.extension);
        setEmail(values.email);
    };

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={8}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onChange}
                    >
                        <Form.Item 
                            label="Full Name"
                            name="fullname"
                            rules={[
                                {
                                required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Enter Full Name" />
                        </Form.Item>
                        <Form.Item 
                            label="Designation"
                            name="designation"
                            rules={[
                                {
                                required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Enter Designation" />
                        </Form.Item>
                        <Form.Item 
                            label="Extension"
                            name="extension"
                            rules={[
                                {
                                required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Enter Extension" />
                        </Form.Item>
                        <Form.Item 
                            label="Email"
                            name="email"
                            rules={[
                                {
                                required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Enter Email" />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                            offset: 0,
                            span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={16}>
                    <FullSignature fullname={fullname} designation={designation} extension={extension} email={email} />
                </Col>
        </Row>
        
    );
};

export default FullContent;