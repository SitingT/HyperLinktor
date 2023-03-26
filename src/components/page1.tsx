import React from "react";
import { Layout, Space } from "antd";
import Background from "../Image/background.jpeg";
const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  //  backgroundColor: "#301934",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      {/* <Header style={headerStyle}>Header</Header> */}
      <Content style={contentStyle}>Content</Content>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
  </Space>
);

export default App;
