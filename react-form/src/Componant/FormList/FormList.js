import React, { useState, useEffect } from "react";
import { Form, Select, Switch } from "antd";
import { AiOutlineDelete } from "react-icons/ai";

import TextInput from "../FormInputField/TextInput/TextInput";
import TextArea from "../FormInputField/TextArea/TextArea";
import RadioGroup from "../FormInputField/RadioGroup/RadioGroup";
import DropDown from "../FormInputField/DropDown/DropDown";
import Date from "../FormInputField/Date/Date";
import CheckBox from "../FormInputField/CheckBox/CheckBox";

import FormInputMainModal from "../FormInputMainModal/FormInputMainModal";
import FormCheckBox from "../FormInputModal/FormCheckBox/FormCheckBox";
import FormDate from "../FormInputModal/FormDate/FormDate";
import FormDropDown from "../FormInputModal/FormDropDown/FormDropDown";
import FormRadioGroup from "../FormInputModal/FormRadioGroup/FormRadioGroup";
import FormTextAreaModal from "../FormInputModal/FormTextAreaModal/FormTextAreaModal";
import FormTextInputModal from "../FormInputModal/FormTextInputModal/FormTextInputModal";

// =============================================================

const { Option } = Select;

// =============================================================

function FormList({ remove, fields }) {
  const { name, ...restFields } = fields;
  const [form] = Form.useForm();
  const [selectedItem, setselectedItem] = useState(null);
  const [itemSpecification, setItemSpecification] = useState({});
  const [itemTag, setItemTag] = useState(null);
  const [isRequired, setisRequired] = useState(false);
  const [modal, setModal] = useState(false);
  // =============================================================

  const onselectedItemHandler = (obj) => {
    let formItem = {};
    switch (obj.value) {
      case "input":
        formItem = {
          field_label: obj.label,
          field_id: name,
          field_type: obj.value,
          field_name: name,
          field_required: obj.isRequired,
          field_placeHolder: obj.placeholder,
        };
        setselectedItem(
          <TextInput
            fieldRequired={obj.isRequired}
            fieldName={name}
            fieldPlaceHolder={obj.placeholder}
          />
        );
        // dispatch(addFormItem(formItem));
        break;
      case "text-area":
        formItem = {
          field_label: obj.label,
          field_id: name,
          field_type: obj.value,
          field_name: name,
          field_required: obj.isRequired,
          field_placeHolder: obj.placeholder,
        };
        setselectedItem(
          <TextArea
            fieldRequired={obj.isRequired}
            fieldName={name}
            fieldPlaceHolder={obj.placeholder}
          />
        );
        // dispatch(addFormItem(formItem));
        break;
      case "dropdown":
        formItem = {
          field_label: obj.label,
          field_id: name,
          field_type: obj.value,
          field_name: name,
          field_required: obj.isRequired,
          field_placeHolder: obj.placeholder,
          field_options: obj.options,
        };
        setselectedItem(
          <DropDown
            fieldRequired={obj.isRequired}
            fieldName={name}
            fieldPlaceHolder={obj.placeholder}
            options={obj.options}
          />
        );
        // dispatch(addFormItem(formItem));
        break;
      case "radiogroup":
        formItem = {
          field_label: obj.label,
          field_id: name,
          field_type: obj.value,
          field_name: name,
          field_required: obj.isRequired,
          field_placeHolder: obj.placeholder,
          field_options: obj.options,
          field_direction: obj.direction,
        };
        setselectedItem(
          <RadioGroup
            direction={obj.direction}
            fieldName={name}
            options={obj.options}
          />
        );
        // dispatch(addFormItem(formItem));
        break;
      case "checkboxes":
        formItem = {
          field_label: obj.label,
          field_id: name,
          field_type: obj.value,
          field_name: name,
          field_required: obj.isRequired,
          field_placeHolder: obj.placeholder,
          field_options: obj.options,
          field_direction: obj.direction,
        };
        setselectedItem(
          <CheckBox
            direction={obj.direction}
            fieldName={name}
            options={obj.options}
          />
        );
        // dispatch(addFormItem(formItem));
        break;
      case "date":
        formItem = {
          field_label: obj.label,
          field_id: name,
          field_type: obj.value,
          field_name: name,
          field_required: obj.isRequired,
          field_placeHolder: obj.placeholder,
          field_disabledDate: obj.disabledDate,
          field_defaultDate: obj.defaultValue,
          field_disabledDateNav: obj.disabledDateNav,
        };
        setselectedItem(
          <Date
            defaultValue={obj.defaultValue}
            placeholder={obj.placeholder}
            disabledDate={obj.disabledDate}
            disabledDateNav={obj.disabledDateNav}
          ></Date>
        );
        // dispatch(addFormItem(formItem));
        break;
      default:
        setselectedItem(null);
        break;
    }
  };

  // =============================================================

  useEffect(() => {
    onselectedItemHandler({
      label: itemSpecification.label,
      value: itemTag,
      isRequired,
      placeholder: itemSpecification.placeHolder || "",
      options: itemSpecification.options || [],
      direction:
        itemTag === "radiogroup" || itemTag === "checkboxes"
          ? itemSpecification.direction
          : "",
      disabledDate: itemSpecification.disabledDate || null,
      disabledDateNav: itemSpecification.disabledDateNav || null,
      defaultValue: itemSpecification.defaultValue || null,
    });
  }, [itemTag, isRequired, itemSpecification]);

  // =============================================================

  const onselectHandler = (value) => {
    setItemTag(value);
    setModal(true);
  };

  const onRequiredHandler = (value) => {
    setisRequired(value);
  };

  const OnclickHandler = () => {
    setModal(false);
  };
  // =============================================================

  return (
    <>
      <div className="w-full p-1">
        <Form.Item name={[name, "first"]} {...restFields}>
          <div className="w-full p-1">
            <Select className="w-full" onChange={onselectHandler}>
              <Option key="input">Text Input</Option>
              <Option key="text-area">Text Area</Option>
              <Option key="dropdown">Dropdown</Option>
              <Option key="radiogroup">Radio Group</Option>
              <Option key="checkboxes">Checkboxes</Option>
              <Option key="date">Date</Option>
              <Option key="time">Time</Option>
            </Select>
            <div className="my-5 form-item">{selectedItem}</div>
            <div className="flex justify-between">
              <span className="font-bold">
                Required
                <span className="ml-3">
                  <Switch onChange={onRequiredHandler} />
                </span>
              </span>
              <span
                className="text-2xl ml-3 cursor-pointer"
                onClick={() => {
                  remove(name);
                }}
              >
                <AiOutlineDelete />
              </span>
            </div>
          </div>
        </Form.Item>
        <FormInputMainModal
          modal={modal}
          onClick={OnclickHandler}
          onSubmit={() => {
            console.log("hellooo-====");
            form
              .validateFields()
              .then((values) => {
                setItemSpecification(values);
                form.resetFields();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {itemTag === "input" && <FormTextInputModal form={form} />}
          {itemTag === "text-area" && <FormTextAreaModal form={form} />}
          {itemTag === "dropdown" && <FormDropDown form={form} />}
          {itemTag === "radiogroup" && <FormRadioGroup form={form} />}
          {itemTag === "date" && <FormDate form={form} />}
          {itemTag === "checkboxes" && <FormCheckBox form={form} />}
        </FormInputMainModal>
      </div>
    </>
  );
}

export default FormList;
