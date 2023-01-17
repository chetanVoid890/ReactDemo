import { Form, Input } from "antd";
import React from "react";
const FormTextInputModal = ({ form, modal }) => {
  return (
    <>
      <Form form={form} open={modal}>
        <Form.Item label="Title" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="PlaceHolder" name="placeHolder">
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormTextInputModal;
