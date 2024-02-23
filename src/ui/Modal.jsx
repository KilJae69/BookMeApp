import { HiXMark } from "react-icons/hi2";
import { useState, useContext, createContext, cloneElement } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg shadow-lg p-8 transition-all duration-500">
      <ModalContext.Provider value={{ openName, close, open }}>
        {children}
      </ModalContext.Provider>
    </div>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 transition-all duration-500">
      <div className="flex justify-end absolute top-4 right-8">
        <button className="bg-transparent border-none p-1 rounded-sm transform translate-x-2 transition-all duration-200 hover:bg-gray-200">
          <HiXMark className="w-6 h-6 text-gray-500" />
        </button>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
