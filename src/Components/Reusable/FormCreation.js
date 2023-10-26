import CustomInput from "./CustomInputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { optionFields, urlFields } from "../Constant/constant";
import { useState } from "react";

const FormCreation = ({ inputIndex,selectedInputs,onSelectedInputs }) => {
//   const handelChanges = (event, index, field) => {
//     if (field === "value") {
//       const newselectedInputs = [...selectedInputs];
//       newselectedInputs[index].label = imageInput
//         ? URL.createObjectURL(event.target.files[0])
//         : event.target.value;
//       setImageInput(false);
//       onSelectedInputs(newselectedInputs);
//     } else {
//       const newselectedInputs = [...selectedInputs];
//       newselectedInputs[index].required = event.target.checked;
//       onSelectedInputs(newselectedInputs);
//     }
//   };
//   return (
//     <div className="formCreationContainer">
//       <CustomInput
//         type={"text"}
//         placeholder={inputIndex.componentName}
//         onChange={(event) => {
//           handelChanges(event, index, "value");
//         }}
//         value={selectedInputs[index].label}
//       />
//     </div>
//   );
};

export default FormCreation;
