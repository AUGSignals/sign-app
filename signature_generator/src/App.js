import SiteLayout from './layout/sitelayout';
import React, { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed)
  };
  return (
    <SiteLayout collapsed={collapsed} toggle={toggle}/>
  );
}

export default App;
