import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Home from "./page/Home";
import ListProducts from "./page/ListProducts";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: "Trang chủ",
      content: <Home />,
    },
    {
      label: "Sản phẩm",
      content: <ListProducts />,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab, index) => {
            return (
              <Tab
                label={tab.label}
                {...a11yProps({ index })}
                key={tab.label}
              />
            );
          })}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => {
        return (
          <TabPanel value={value} index={index} key={tab.label}>
            {tab.content}
          </TabPanel>
        );
      })}
    </Box>
  );
}

export default App;
