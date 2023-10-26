import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "./context";

const FileList = ({
  formData = [],
  onFieldValues,
  onFormData,
  onDisplayDropDown,
  displayDropDown,
}) => {
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
      const onhandeloptions = (element, index,click) => {
        click==="view"?setViewForm(false):setViewForm(true);
        onDisplayDropDown("");
        setUniqueIndex(index);
        navigate(`/dynamicForm`);
        setFileName(element)        
      };
      const onhandelDeleteoptions = (index) => {
        const newlist = [...formData];
        const removedFile = newlist.filter(
          (element, indexVal) => indexVal != index
        );
        const removedFiled = dynamicFiles.filter(
          (element, indexVal) => indexVal != index
        );
        setDynamicFiles(removedFiled)
        onFormData(removedFile);
        onDisplayDropDown("");
      };
      return formData.map((element, index) => {
        return (
          <div className="dropdown">
            <button
              className="fileList"
              onClick={(e) => {
                e.target.value={index}
                onDisplayDropDown(index);
              }}
            >
              <div className="filesIcons">
              <FontAwesomeIcon icon={faFolderOpen} />              
              </div>
            </button>           
            {index === displayDropDown && (
              <div className="dropdownContent">
                <div
                  className="dropDownList"
                  onClick={() => onhandeloptions(element, index,"edit")}
                >
                  Edit
                </div>
                <div
                  className="dropDownList"
                  onClick={() => onhandeloptions(element, index,"view")}
                >
                  View Details
                </div>
                <div
                  className="dropDownList"
                  onClick={() => onhandelDeleteoptions(index)}
                >
                  Delete
                </div>
              </div>
            )} {element}
          </div>
        );
      });
};

export default FileList;
