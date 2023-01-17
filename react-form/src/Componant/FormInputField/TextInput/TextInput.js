import { Input } from "antd";

const InputItem = ({ fieldRequired, fieldName, fieldPlaceHolder }) => {
  console.log(
    "fieldName",
    fieldName,
    ":fieldRequired",
    fieldRequired,
    "fieldPlaceHolder",
    fieldPlaceHolder
  );
  return (
    <Input
      required={fieldRequired}
      placeholder={fieldPlaceHolder}
      name={fieldName}
    />
  );
};
export default InputItem;
