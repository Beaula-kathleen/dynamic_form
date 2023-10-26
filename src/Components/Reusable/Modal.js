  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faXmark } from "@fortawesome/free-solid-svg-icons";
  import CustomInput from "../Reusable/CustomInputs";
  import { useState , useContext} from "react";
  import { Context } from "./context"; 
  import { useNavigate } from "react-router-dom";
  import "../Styles/dynamicStyles.css";
  import Button from "./Button";

  const Modal = ({
    fieldValues=[],
    onFieldValues,
    onDisplayModal,
    onFormData,
    formData,
  }) => {
    const [errorMessage, setErrorMessage] = useState(false);
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
    const navigate = useNavigate();

    const handelSubmit = () => {
      if (fieldValues?.fileName != null && fieldValues?.fileName.length) {
        onDisplayModal(false);
        onFormData({...formData, fieldValues});
        setFileName(fieldValues?.fileName)
        setUniqueIndex(null)
        setViewForm(true)
        navigate("/dynamicForm");
      } else {
          setErrorMessage(true);
        }
    };

    const handelInputValues = (event) => {
      setErrorMessage(false);
      onFieldValues({ ...fieldValues, fileName: event.target.value.trim()});
    };
    return (
      <div className="modalCreation">
        <div className="fileCreation">
          <FontAwesomeIcon
            icon={faXmark}
            className="fontAwesomeIcon closeModal"
            onClick={() => {
              onFieldValues("");
              onDisplayModal(false);
            }}
          />
          <h2>Create Form</h2>
          <CustomInput
            type="text"
            placeholder="Form Name"
            onChange={(event) => {
              handelInputValues(event);
            }}
            value={fieldValues?.fileName}
          />
          {errorMessage && (
            <div className="errorField">Please enter the File Name</div>
          )}
          <textarea placeholder="Description" />
          <Button
            value={"Create File"}
            onClick={() => {
              handelSubmit();
            }}
          />
        </div>
      </div>
    );
  };

  export default Modal;

