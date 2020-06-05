import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const Footer = ({ muscles, category, selectCategory }) => {
  let index = !!category
    ? muscles.findIndex(item => {
        return item === category;
      }) + 1
    : 0;

  const handleChange = (event, newValue) => {
    let category = newValue === 0 ? "" : muscles[newValue - 1];
    selectCategory(category);
  };
  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={handleChange}
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab label={group} key={group} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
