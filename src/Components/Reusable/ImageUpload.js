import { useRef } from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "./context";
import { useContext} from 'react'

function ImageUpload({ onImageInput, handelChanges, element, index }) {
  const hiddenFileInput = useRef(null);
  const [
    dynamicFiles,
    setDynamicFiles,
    uniqueIndex,
    setUniqueIndex,
    viewForm,
    setViewForm,
    fileName,
    setFileName,
  ] = useContext(Context);
  return (
    <>
      <button
        className="addOptions"
        onClick={() => {
          if(viewForm)
          {hiddenFileInput.current.click();
          onImageInput(true);}
        }}
      >
        Upload
        <FontAwesomeIcon className="FontIcon" icon={faUpload} />
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={(event) => {
          handelChanges(event, index, "value");
        }}
        style={{ display: "none" }}
        accept={`${element.inputType}/*`}
      />
    </>
  );
}

export default ImageUpload;
