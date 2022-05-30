import { useState } from "react";

const useAlert = () => {
  const defaultOptions = {
    active: false,
    message: "",
    type: "",
    autoClose: true,
  };
  const [alert, setAlert] = useState(defaultOptions);
};
