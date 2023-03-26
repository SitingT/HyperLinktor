import React from "react";
import { Layout, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import GoogleKLineChart from "./stocks/GoogleKLineChart";
import { Col, Divider, Row } from "antd";
import Table from "../components/table";
import Background from "../Image/background2.jpeg";
import ModelList from "./ModelList/listMode";
import Wallet from "./wallet";

interface PlaceholderSquareProps {
  width: number;
  height: number;
  color: string;
}

const PlaceholderSquare = ({
  width,
  height,
  color,
}: PlaceholderSquareProps) => {
  const style = {
    width: width,
    height: height,
    backgroundColor: color,
  };
  return <div style={style}></div>;
};

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

const dataPoints = [
  { id: 1, name: "Model 1", return: 5 },
  { id: 2, name: "Model 2", return: -2 },
  { id: 3, name: "Model 3", return: 7 },
  { id: 4, name: "Model 4", return: -1 },
  { id: 5, name: "Model 5", return: 3 },
];

const Page3: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      {/* <Header style={headerStyle}>header</Header> */}
      <Content style={contentStyle}>
        <Row>
          <Col span={8}>
            <Space direction="horizontal" style={{ width: "5%" }}>
              {" "}
            </Space>
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            {" "}
            <Upload {...props}>
              <Button size="large" ghost icon={<UploadOutlined />}>
                Submit & Win
              </Button>
            </Upload>
          </Col>
        </Row>

        <Space> </Space>
        <Row>
          <Col span={3}></Col>
          <Col
            span={18}
            style={{
              textAlign: "center",
              marginTop: "20px",
              backgroundColor: "rgba(0, 0, 139, 0.5)",
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "36px",
                fontFamily: "Baskerville,serif",
              }}
            >
              About Me
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "18px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Hi, my name is John Doe and I'm a software engineer. I have a
              passion for building great products that make people's lives
              easier. In my free time, I enjoy hiking and playing basketball.
            </p>
          </Col>
          <Col span={3}></Col>
        </Row>
        <Space> </Space>
        <Row>
          <Col span={3}> </Col>
          <Col span={18}>
            <h1
              style={{
                color: "white",
                fontSize: "36px",
                fontFamily: "Baskerville,serif",
              }}
            >
              History
            </h1>
            <ModelList models={dataPoints} />
          </Col>
          <Col span={3}></Col>
        </Row>
        <Space> </Space>
        <Row>
          <Col span={3}> </Col>
          <Col span={18}>
            <Wallet />
          </Col>
          <Col span={3}></Col>
        </Row>
        <Space> </Space>
      </Content>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
  </Space>
);

export default Page3;
