import React, { useContext } from "react";
import { Context } from "../Reusable/context";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import "../Styles/dynamicStyles.css";

const NavBar = ({
  folderIcon,
  displayNavBar,
  onDisplayNavBar,
  onDisplayModal,
  selectedInputs,
  fileNames
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
  
  const handelSave = () =>{
    const inputDatas = [...selectedInputs];
    const saveData = [{ fileName: fileName, datas: inputDatas }];
    if (uniqueIndex != null) {
      const newData = [...dynamicFiles];
      const fieldValues = newData.map((element, index) => {
        return index === uniqueIndex
          ? { fileName: fileName, datas: inputDatas }
          : element;
      });
      setDynamicFiles([...fieldValues]);
      setUniqueIndex("");
    } else {
      setDynamicFiles([...dynamicFiles,...saveData])
    }
    navigate(`/`);
  }
  return (
    <div className="navBar">
      <div>DYNAMIC FORM</div>
      {!displayNavBar && (
        <FontAwesomeIcon
          icon={folderIcon}
          className ="fontAwesomeIcon"
          onClick={() => {
            onDisplayModal(true);
          }}
        />
      )}
      {displayNavBar && (
        <div className="dynamicFormField">
          <Button
            value={"SAVE"}
            className={"navButtons"}
            onClick={() => {                          
              if (viewForm) {
                handelSave()              
              }
            }}
          />
          <Button
            value={"CANCEL"}
            className={"navButtons"}
            onClick={() => {
              navigate(`/`);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
