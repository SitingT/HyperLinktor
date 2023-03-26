import React from "react";
import { Layout, Space } from "antd";
import { Col, Divider, Row } from "antd";
import Background from "../Image/background.jpeg";
import Image1 from "../Image/1.png";
import Image2 from "../Image/2.png";
import Image3 from "../Image/3.png";
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
      <Content style={contentStyle}>
        <Row>
          <Col span={3}></Col>
          <Col
            span={18}
            style={{
              textAlign: "center",
              marginTop: "20px",
              // backgroundColor: "rgba(0, 0, 139, 0.5)",
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "36px",
                fontFamily: "Baskerville,serif",
                lineHeight: "27px",
              }}
            >
              HyperLinktor
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "20px",
                fontFamily: "Arial, sans-serif",
                lineHeight: "27px", // 1.5 times the font size of 18px
              }}
            >
              Our platform leverages the latest technologies, including Web 3.0
              and trading, to provide users with cutting-edge insights and
              trading opportunities. We have developed a strategy platform that
              enables users to identify the best time to trade in various
              markets, including cryptocurrencies, with the aim of maximizing
              profits. Our team has a solid understanding of the market, and we
              are committed to providing users with real-time analysis and
              insights to help them stay ahead of the competition. With a clear
              roadmap for development and growth, our platform is poised to
              revolutionize the trading industry and provide investors with a
              strong return on investment.
            </p>
          </Col>
          <Col span={3}></Col>
        </Row>
        {/* <Space size={8}></Space> */}

        <p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
        <Row>
          <Col span={2}> </Col>
          <Col>
            <img
              src={Image1}
              alt="Image1"
              width="500px" // set width to 200 pixels
              height="500px"
            />

            <img
              src={Image2}
              alt="Image2"
              width="500px" // set width to 200 pixels
              height="500px"
            />
          </Col>
          <Col>
            <p
              style={{
                color: "white",
                fontSize: "18px",
                fontFamily: "Arial, sans-serif",
                lineHeight: "27px", // 1.5 times the font size of 18px
              }}
            >
              In addition to our strategy platform, we have added a layer of
              rewarding system that incentivizes users to contribute their own
              algorithm ideas. With our judge system, we can evaluate their
              ideas and reward them with fungible tokens, recorded on OKC (ok
              chain) for transparency and security. By associating the reward
              transaction with an algorithm unique ID, we protect the
              contributor's knowledge rights and ensure immutability. Our
              platform not only provides cutting-edge trading insights but also
              fosters a collaborative community of algorithm developers,
              creating a win-win situation for all users. Join us in
              revolutionizing the trading industry with the power of Web 3.0 and
              crypto.
            </p>
          </Col>
        </Row>

        <Space> </Space>
      </Content>

      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
  </Space>
);

export default App;
