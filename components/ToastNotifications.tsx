import React from "react";
import { ToastContainer, toast } from "react-toastify";

type Props = {};

const ToastNotifications = (props: Props) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};

export default ToastNotifications;
