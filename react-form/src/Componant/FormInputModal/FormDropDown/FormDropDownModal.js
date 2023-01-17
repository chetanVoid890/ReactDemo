import { Form, Input, Space, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
const FormDropDownModal = ({ form }) => {
  return (
    <>
      <Form form={form}>
        <Form.Item label="Title" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="PlaceHolder" name="placeHolder">
          <Input />
        </Form.Item>
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => {
                return (
                  <Space key={key} style={{ display: "flex" }} align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name, "Key"]}
                      fieldKey={[key, "Key"]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "Value"]}
                      fieldKey={[key, "Value"]}
                    >
                      <Input />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                );
              })}
              <Form.Item>
                <Button onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Options
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </>
  );
};

export default FormDropDownModal;