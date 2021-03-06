import React, { useRef } from "react";
import "./index.scss";
import { CgClose } from "react-icons/cg";
import useOutsideClick from "../../../hooks/useOutsideClick";

const ModalWindow = ({ children, onClose }) => {
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    onClose();
  });

  return (
    <div className="modal-window__wrapper">
      <div ref={ref} className="modal-window">
        <div className="modal-window__header">
          <div className="modal-window__close-wrapper" onClick={onClose}>
            <CgClose className="modal-window__close-icon" />
          </div>
        </div>
        <div className="modal-window__content">{children}</div>
      </div>
    </div>
  );
};

export default ModalWindow;
