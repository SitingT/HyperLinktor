import React from "react";
import { Layout, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import GoogleKLineChart from "./stocks/GoogleKLineChart";
import { Col, Row } from "antd";
import Table from "../components/table";
import Background from "../Image/background2.jpeg";
import LineChart from "./lineChart";

// import useReadCSV from "./readCSV";
const props: UploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const { Footer, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  //  backgroundColor: "#301934",
};

// const footerStyle: React.CSSProperties = {
//   textAlign: "center",
//   color: "#fff",
//   backgroundColor: "#7dbcea",
// };

const Page2: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      {/* <Header style={headerStyle}>header</Header> */}
      <Content style={contentStyle}>
        <Space> </Space>
        <Row justify="center">
          <Col flex={3}></Col>
          <Col flex={3} span={24}>
            <GoogleKLineChart />
          </Col>
        </Row>

        <Upload {...props}>
          {/* <LineChart /> */}
          <Button size="large" ghost icon={<UploadOutlined />}>
            Submit & Win
          </Button>
        </Upload>
        <Row justify="center">
          <Col flex={3}></Col>
          <Col flex={3} span={21}>
            <Table />
          </Col>
        </Row>

        <Space> </Space>
      </Content>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
  </Space>
);

export default Page2;
