import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <hr style={{ maxWidth: 700 }} />
      All rights reserved 2021
    </Footer>
  );
};

export default FooterComponent;
