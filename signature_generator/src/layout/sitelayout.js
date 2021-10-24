import { Layout, Menu, Image, Row, Col } from "antd";
import { 
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    UserAddOutlined,
    UserDeleteOutlined
} from '@ant-design/icons';
import React from "react";
import PageContent from "../content/pagecontent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import FullContent from "../content/fullcontent";
import DefaultSignature from "../content/defaultsignature";
import DefaultContent from "../content/defaultcontent";
import ShortContent from "../content/shortcontent";
  

const { Header, Sider, Content } = Layout;

const SiteLayout = (props) => {
    return (
        <Router>
            <Layout style={{ minHeight:"100vh" }}>
                <Sider triggle={null} collapsible collapsed={props.collapsed}>
                    <Image className="logo" preview={false} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/default"></Link>
                            AUG Default
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserDeleteOutlined />}>
                            <Link to="/short"></Link>
                            AirSENCE Short
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UserAddOutlined />}>
                            <Link to="/full"></Link>
                            AirSENCE Full
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <Row>
                            <Col span={2}>
                                {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: props.toggle,
                                })}
                            </Col>
                            <Col span={22}>
                                <h1>Email Signature Generation App</h1>
                            </Col>
                        </Row>
                        
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/default">
                                <DefaultContent />
                            </Route>
                            <Route path="/short">
                                <ShortContent />
                            </Route>
                            <Route path="/full">
                                <FullContent />
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default SiteLayout;