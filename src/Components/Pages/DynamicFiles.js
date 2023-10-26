import NavBar from "../Reusable/NavBar";
import { useState } from "react";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Modal from "../Reusable/Modal";
import FileList from "../Reusable/FileList";
import { useContext, useEffect} from 'react'
import { Context } from "../Reusable/context";

const DynamicFiles = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [formData, setFormData] = useState([]);
  const [fieldValues, setFieldValues] = useState([]);
  const [displayDropDown, setDisplayDropDown] = useState(false);
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

  useEffect(() => {    
    const fieldValues = [...dynamicFiles];
    fieldValues.forEach((element) => {      
        setFormData((formData)=>[...formData, element.fileName]);    
    });
  }, [])
  onclick = (event) => {
      if (!event.target.value) {
        setDisplayDropDown(false);
      }
    };
  return (
    <>
      <NavBar
        folderIcon={faFolderPlus}
        displayNavBar={false}
        onDisplayModal={setDisplayModal}
        fileName={formData.fileName}
      />
      {displayModal && (
        <Modal
          fieldValues={fieldValues}
          onFieldValues={setFieldValues}
          onDisplayModal={setDisplayModal}
          onFormData={setFormData}
          formData={formData}
        />
      )}
       <div
        className="displayFiles"
        style={{ pointerEvents: displayModal ? "none" : "auto" }}
      >
        <FileList
          formData={formData}
          onFieldValues={setFieldValues}
          onFormData={setFormData}
          onDisplayDropDown={setDisplayDropDown}
          displayDropDown={displayDropDown}
        />
      </div>
    </>    
  );
};

export default DynamicFiles;
