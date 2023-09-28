import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customButtonTextAsAny: any = "ButtonText";

const meta = {
  title: "Custom Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    customButtonText: customButtonTextAsAny as string,
    children: "Button",
  },
};
