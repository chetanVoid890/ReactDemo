import { Input } from "antd";

const { TextArea } = Input;

const TextAreaItem = ({ fieldRequired, fieldName, fieldPlaceHolder }) => {
  return (
    <TextArea
      required={fieldRequired}
      placeholder={fieldPlaceHolder}
      name={fieldName}
    />
  );
};

export default TextAreaItem;
