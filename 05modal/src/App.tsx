import { useRef, useState } from "react";
import Modal from "./Modal";

function App() {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow((pre) => !pre);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="h-[400px] w-[400px] bg-cyan-500 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl">Download File</h1>
        <button
          onClick={handleShow}
          className=" border-2 border-cyan-100 w-30 my-5 mx-auto rounded-md text-lg"
        >
          Download
        </button>
      </div>
      {show && <Modal onClose={handleShow} />}
    </div>
  );
}

export default App;
