import React from "react";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import { Layout, Menu } from "antd"; // Import Ant Design components
// import "./App.css"; //

const { Header, Content } = Layout;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <Link to="/Home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/stock">Stock</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/Account">My Account </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Routes>
              <Route path="/Home" element={<Page1 />} />
              <Route path="/stock" element={<Page2 />} />
              <Route path="/Account" element={<Page3 />} />
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
