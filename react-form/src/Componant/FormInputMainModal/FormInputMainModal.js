import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { closeModal } from "../../redux/actions/modal";

const FormInputMainModal = ({ onSubmit, children, modal, onClick }) => {
  console.log("hellooo-============================");

  return (
    <Modal
      open={modal}
      centered
      okText="submit"
      closable={false}
      onCancel={onClick}
      title="Specification"
      onOk={onSubmit}
    >
      {children}
    </Modal>
  );
};

export default FormInputMainModal;
