import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const TabsContent = () => {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          'Home'
        </Tab>
        <Tab eventKey="profile" title="Profile">
         'Profile'
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          'Contact'
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsContent;
