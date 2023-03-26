import React from "react";
import { Layout, Space, Button, Row } from "antd";
import {
  FaArrowCircleDown,
  FaCreditCard,
  FaExchangeAlt,
  FaLongArrowAltRight,
} from "react-icons/fa";
const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#020066",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#020066",
  backgroundColor: "#fff",
};

const largeTextStyle: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: "bold",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#020066",
  height: 64,
};

const Wallet: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
        <Space>
          <Button ghost shape="circle">
            ST
          </Button>
          Account 1<Space> </Space>
          ID: 153**8
        </Space>
      </Header>
      <Content style={contentStyle}>
        <div style={largeTextStyle}>100 TOCKEN</div>

        <Row justify="center">
          <Space size={35}>
            <Row>
              <Button
                type="primary"
                shape="circle"
                icon={<FaArrowCircleDown />}
                size="large"
              />
              <span>Receive</span>
            </Row>

            <Row>
              <Button
                type="primary"
                shape="circle"
                icon={<FaCreditCard />}
                size="large"
              />
              <span>Buy</span>
            </Row>

            <Row>
              <Button
                type="primary"
                shape="circle"
                icon={<FaExchangeAlt />}
                size="large"
              />
              <span>Swap</span>
            </Row>

            <Row>
              <Button
                type="primary"
                shape="circle"
                icon={<FaLongArrowAltRight />}
                size="large"
              />
              <span>Spend</span>
            </Row>
          </Space>
        </Row>
      </Content>
      <Footer style={footerStyle}></Footer>
    </Layout>
  </Space>
);

export default Wallet;
