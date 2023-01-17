import { Select, Input } from "antd";
const { Option } = Select;

const DropDown = (props) => {
  console.log("props.options", props.options);
  return (
    <>
      <Select placeholder={props.fieldPlaceHolder} name={props.fieldName}>
        {props.options &&
          props.options.map((option, index) => {
            return (
              <>
                <Option value={option.Value} key={index}>
                  {option.Key}
                </Option>
                <Input
                  required={props.fieldRequired}
                  placeholder={props.Key}
                  name={props.fieldName}
                />
              </>
            );
          })}
      </Select>
    </>
  );
};

export default DropDown;
