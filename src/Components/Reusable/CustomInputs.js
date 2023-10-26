import React from "react";
import { useContext } from "react";
import { Context } from "./context";
export default function CustomInput(props) {
  let { type, placeholder, onChange, value } = props;
  const [
    dynamicFiles,
    setDynamicFiles,
    uniqueIndex,
    setUniqueIndex,
    viewForm,
    setViewForm,
    fileName,
    setFileName
  ] = useContext(Context);
  return (
    <div className="inputs">
      <input
        type={type || "text"}
        placeholder={placeholder || ""}
        onChange={onChange}
        value={value || ""}
      />
    </div>
  );
}
