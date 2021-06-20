import CardModal from "../CardModal/Index";
import { StylesModal } from "./styles";

const Modal = ({ data, setModal }) => {
  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) {
      setModal(null);
    }
  }

  return (
    <StylesModal onClick={handleOutsideClick}>
      {data && <CardModal {...data} setModal={setModal} />}
    </StylesModal>
  );
};

export default Modal;
