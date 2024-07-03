import React, { useRef } from "react";

function Modal({ onClose }: { onClose: () => void }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) onClose();
    console.log(modalRef.current);
    console.log(e.target);
  };
  return (
    <div
      ref={modalRef}
      onClick={(e) => closeModal(e)}
      className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="flex flex-col">
        <button className=" place-self-end" onClick={onClose}>
          ❌
        </button>
        <div className="mx-auto bg-cyan-600 p-20">
          <h1 className="text-3xl">Hey click the link below</h1>
          <button className=" self-center">Download</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
