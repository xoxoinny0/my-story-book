import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "@/components/DefaultTextField";
import { fn } from "@storybook/test";

const meta = {
  title: "buttons/DefaultTextField",
  component: DefaultTextField,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "텍스트 필드의 ID",
      table: {
        defaultValue: { summary: "" },
      },
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 placeholder",
      table: {
        defaultValue: { summary: "텍스트를 입력해주세요" },
      },
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      table: {
        defaultValue: { summary: "" },
      },
    },
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    errorMessage: {
      control: "text",
      description: "에러 메시지",
      table: {
        defaultValue: { summary: "" },
      },
    },
    onChange: { action: "changed", description: "텍스트 필드 값 변경 이벤트" },
    onIconClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    iconAlt: {
      control: "text",
      description: "아이콘 이미지의 alt 속성",
      table: {
        defaultValue: { summary: "icon" },
      },
    },
    iconPath: {
      control: "text",
      description: "아이콘 이미지의 경로",
      table: {
        defaultValue: { summary: "" },
      },
    },
  },
  args: {
    id: "email",
    iconAlt: "icon",
    iconPath: "/vite.svg",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    errorMessage: "",
    isError: false,
    onChange: fn(),
    onIconClick: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
