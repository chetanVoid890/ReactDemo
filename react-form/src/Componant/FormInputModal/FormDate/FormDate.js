import { DatePicker, Form, Input, Radio, Space } from "antd";

const FormDate = ({ form }) => {
  return (
    <>
      <Form form={form}>
        <Form.Item label="Title" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="PlaceHolder" name="placeHolder">
          <Input />
        </Form.Item>
        <Form.Item label="Default Selected Date" name="defaultValue">
          <DatePicker></DatePicker>
        </Form.Item>
        <div className="flex">
          <Space size="middle">
            <Form.Item label="Disabled Date" name="disabledDate">
              <DatePicker></DatePicker>
            </Form.Item>
            <Form.Item name="disabledDateNav">
              <Radio.Group>
                <Radio value="before">Before</Radio>
                <Radio value="after">After</Radio>
              </Radio.Group>
            </Form.Item>
          </Space>
        </div>
      </Form>
    </>
  );
};

export default FormDate;
