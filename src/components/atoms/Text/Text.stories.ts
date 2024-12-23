import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Text from "./Text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tag: { control: "text" },
    type: { control: "text" },
    weight: { control: "text" },
    children: { control: "text" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body2: Story = {
  args: {
    tag: "p",
    type: "body2",
    weight: "bold",
    children: "Body 2 Bold Sample Text",
  },
};
