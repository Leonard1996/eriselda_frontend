import React from "react";
import { Space, Spin } from "antd";

export default function WithLoader({ children, isLoading }) {
  if (isLoading)
    return (
      <Space size="middle">
        <Spin size="large" />
      </Space>
    );

  return children;
}
