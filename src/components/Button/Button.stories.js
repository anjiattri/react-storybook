import React from "react";
import Button from "./Button";
import Center from "../Center/Center";
import { text, boolean } from "@storybook/addon-knobs";
export default {
  title: "form/control/Button",
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
  args: {
    children: "Button",
  },
  tags: ["autodocs"],
};

// center component is decorator
export const Primary = () => (
  <Center>
    <Button variant="primary">Primary</Button>
  </Center>
);

export const Secondary = () => <Button variant="secondary">Secondary</Button>;

export const Success = () => <Button variant="success">Success</Button>;

export const Danger = () => <Button variant="danger">Danger</Button>;

export const Warning = () => (
  <Button variant="warning" disabled={boolean("Disabled", false)}>
    {text("Label", "Button Label")}
  </Button>
);

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  // children: "Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  // children: "Secondary Args",
};
//extending props useful
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: "LongPrimary Args",
};
