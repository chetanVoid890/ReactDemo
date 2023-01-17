import { Form, Button } from "antd";
import React, { useEffect } from "react";
import FormList from "../../Componant/FormList/FormList";
// =============================================================
const FormShow = (props) => {
  const [form] = Form.useForm();

  // =============================================================

  const generateUniqueID = (length) => {
    let id = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  };

  // =============================================================

  const uniqueKey = generateUniqueID(25);

  // =============================================================

  useEffect(() => {
    console.log(uniqueKey);
  }, [uniqueKey]);

  // =============================================================

  return (
    <>
      <div
        className="container"
        style={{ width: "25%", margin: "auto", paddingTop: "20px" }}
      >
        <Form className="w-full form" form={form} name="fields-form">
          <Form.List name="input-items">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map((field) => (
                    <div key={field.key}>
                      <FormList remove={remove} fields={field} />
                    </div>
                  ))}
                  <Button onClick={add} type="primary">
                    Add Field{" "}
                  </Button>
                </>
              );
            }}
          </Form.List>
        </Form>
      </div>
    </>
  );
};

export default FormShow;
