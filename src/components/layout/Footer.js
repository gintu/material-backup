import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const Footer = ({ muscles, category, selectCategory }) => {
  console.log(muscles, category);
  let index = !!category
    ? muscles.findIndex(item => {
        return item === category;
      })
    : 0;

  const handleChange = (event, newValue) => {
    selectCategory(muscles[newValue]);
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
          <Tab label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
