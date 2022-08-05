import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./index";
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/material";
export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const boxStyle = {
  padding: "0.125rem",
  marginTop: "0.25rem",
  marginRight: "0.625rem",
};

const buttonText = {
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "18px",
  borderRadius: "4px",
  width: "222px",
  height: "42px",
};
const previewButtonText = {
  color: "#FC5C5C",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "18px",
  borderRadius: "4px",
  width: "222px",
  height: "42px",
  "&:hover": {
    background: "none",
  },
};
const styles = {
  color: "#6B4DE0",
  width: "10.937rem",
  height: "2.5rem",
  fontSize: "16px",
  fontWeight: 400,
  size: "1rem",
  lineHeight: "1.5rem",
  padding: "0.5rem",
};
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const contained = Template.bind({});
export const text = Template.bind({});
export const NewPatient = Template.bind({});

NewPatient.args = {
  variant: "text",
  children: "New Patient",
  startIcon: (
    <AddIcon />
  ),
  sx: { ...styles },
};

contained.args = {
  variant: "contained",
  sx: { ...buttonText },
  children: "Select",
};
text.args = {
  variant: "text",
  sx: { ...previewButtonText },
  children: "Cancel",
};

