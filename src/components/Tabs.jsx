import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Tabs.css";
import SpeakersSlider from "./SpeakersSlider.jsx";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="tab-panel"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div className="tab-content">{children}</div>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tabs-container">
      <Box className="tabs-header">
        <Tabs
          value={value}
          onChange={handleChange}
          className="custom-tabs"
        >
          <Tab label="Item One" className="custom-tab" {...a11yProps(0)} />
          <Tab label="Item Two" className="custom-tab" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <SpeakersSlider />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
            <SpeakersSlider />
      </CustomTabPanel>

      
    </Box>
  );
}