import "antd/dist/antd.css";
import {
  Html5Outlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { getHtmlFile } from "./API/MainAPI";
import { Button, Row, Col } from "antd";

function App() {
  const [htmlBuffer, setHtmlBuffer] = useState("");

  const getHTMLDoc = async () => {
    const tempFile = await getHtmlFile();
    console.log("TEMP-FILE-->:", tempFile);
    setHtmlBuffer(tempFile);
    // setHtmlBuffer(await getHtmlFile());
  };

  return (
    <div className="App">
      <Row className={"row-style"}>
        <Col span={20}>
          {htmlBuffer === "" ? (
            <Button onClick={getHTMLDoc} type="primary" danger size={"large"}>
              <Html5Outlined />
            </Button>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: htmlBuffer }} />
          )}
        </Col>
        <Col span={4}>
          <Row type="flex" align="middle">
            <Col
              style={{ backgroundColor: "#f0f0f0" }}
              type="flex"
              align="middle"
              span={24}
            >
              <Button onClick={getHTMLDoc} shape={"round"} size={"middle"}>
                <ZoomInOutlined />
              </Button>
              <Button onClick={getHTMLDoc} shape={"round"} size={"middle"}>
                <ZoomOutOutlined />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
