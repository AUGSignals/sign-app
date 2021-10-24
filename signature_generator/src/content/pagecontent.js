import { Layout, Row, Col } from "antd";
import React from "react";
import FullContent from "./fullcontent";

const { Content } = Layout;

const PageContent = () => {
    return (
        <Content>
            <FullContent />
        </Content>
    );
};

export default PageContent;